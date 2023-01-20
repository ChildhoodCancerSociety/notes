const { readFile, readdirSync, writeFile, lstatSync } = require("fs");

const commander = require("commander");
const { marked } = require("marked");
const path = require("path");

const capitalize = (str) =>
  str
    .split(" ")
    .map((s) => {
      console.log("str", s);
      return s ? s[0].toUpperCase() + s.substr(1) : s;
    })
    .join(" ");

const readMarkdownFile = async (filename, cwd) => {
  const mdFilePath = path.resolve(cwd, filename);
  return new Promise((resolve, reject) => {
    readFile(mdFilePath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const translateMarkdownFileToHtml = async (filename, cwd, baseUrl) => {
  const mdFileContents = await readMarkdownFile(filename, cwd);
  if (mdFileContents) {
    return marked(mdFileContents, { baseUrl });
  }
  return null;
};

const createLinks = (cwd, pathname, writeFile) => {
  const filepath = path.resolve(cwd, pathname);
  const lstat = lstatSync(filepath);
  if (lstat.isDirectory()) {
    const linkDir = readdirSync(filepath);
    const hasAssets = linkDir.includes("assets") || linkDir.includes("static");
    console.info("reading dir", pathname, hasAssets ? `-> HAS 🎨assets` : "");

    const links = linkDir
      .map((file) => {
        const fileLstat = lstatSync(path.resolve(filepath, file));
        if (fileLstat.isFile()) {
          return file;
        } else if (fileLstat.isDirectory()) {
          if (hasAssets) {
            // TODO: extract potential header image and add to array
          }
        }
        return null;
      })
      .filter((a) => a)
      .map((link, i, a) => {
        const branch = i === a.length - 1 ? "┗" : "┠";
        console.log(i, a.length - 1, branch);
        const isMd = link.toLowerCase().endsWith(".md");
        const linkNoExtension = isMd
          ? link.substring(0, link.length - 3)
          : link;

        return `${branch}[${isMd ? "📝" : " "}${capitalize(
          linkNoExtension
        )}](<${pathname}/${link}>)`;
      })
      .join("  \n");

    return `## 📁${pathname}\n\n${links}`;
  } else if (pathname !== writeFile && pathname.toLowerCase().endsWith(".md")) {
    return capitalize(pathname);
  }

  return null;
};

const compileStrings = async (args, { defaultCwd, defaultFile }) => {
  let { p, f } = args;
  const notesCwd = p || defaultCwd;
  const notesFolderContents = readdirSync(notesCwd, { encoding: "utf-8" });
  const filename = f || defaultFile;
  console.info("Compiling", filename);

  const noteFileContentArray = notesFolderContents
    .map((potentialNoteFile) =>
      createLinks(notesCwd, potentialNoteFile, filename)
    )
    .filter((a) => a);

  console.log();

  return new Promise((resolve, reject) => {
    try {
      const fileContents = `# ${defaultFile.split(".md")[0]}

${noteFileContentArray.join("\n\n")}
`;

      writeFile(
        path.resolve(notesCwd, filename),
        fileContents,
        { encoding: "utf-8" },
        resolve
      );
    } catch (e) {
      reject(e);
    }
  });
};

const main = async () => {
  const program = commander.program;

  program
    .name("notes CLI")
    .description("CLI for the CCS notes project")
    .version("0.1.0");

  const cwdOpt = ["-p [cwd]", "the working directory"];
  const fileOpt = ["-f [file]", "the file to write to"];
  const typeOpt = ["-t [type]", "either 'meetings' or 'notes'"];

  program
    .command("compile")
    .option(...cwdOpt)
    .option(...fileOpt)
    .action(async (args) => {
      const { t } = args;
      const opts = [
        { defaultCwd: path.resolve("..", "notes"), defaultFile: "Notes.md" },
        {
          defaultCwd: path.resolve("..", "meetings"),
          defaultFile: "Meetings.md",
        },
      ];

      if (!t) {
        await Promise.all(opts.map((opt) => compileStrings(args, opt)));
      } else if (t.includes("note")) {
        await compileStrings(args, opt[0]);
      } else if (t.includes("meeting")) {
        await compileStrings(args, opt[1]);
      }
    });

  program.command("create-docs");

  await program.parseAsync();
};

main()
  .then(() => {
    console.info("Done.");
    process.exit(0);
  })
  .catch((e) => console.error(e));
