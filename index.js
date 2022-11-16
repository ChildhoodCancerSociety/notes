import fs from "fs";
import { spawn } from "child_process";
import ora from "ora";
import chalk from "chalk";
import { displayHelpText } from "./helpers.js";

const isDate = date => (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));

const args = process.argv;

if(args[2] === "--help" || args[2] === "-H") displayHelpText();

const hasDateArg = args.includes("-D") || args.includes

const meetingsDir = fs.readdirSync("meetings", { encoding: 'utf-8' });

const meetingDates = meetingsDir.map(meeting => ({ folder: meeting, date: new Date(meeting.split('_')[1]), name: meeting.split('_')[0].split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ') }));

meetingDates.sort((mA, mB) => mB.date > mA.date);

try {
  const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";
  const meeting = meetingDates[0];
  const filePath = `meetings/${meeting.folder}/meeting.mdx`;
  const mdxProcess = spawn(`${npxCmd}`, ["mdx-deck", filePath]);

  let spinner = ora("Compiling");

  mdxProcess.on("error", e => {
    console.error(e);
    process.exit(1);
  });

  mdxProcess.on("spawn", m => {
    console.info("MDX process created!");
    console.info(`Setting up meeting deck for ${ meeting.name } on ${ meeting.date.toLocaleDateString('en-US', { month: "short", day: "2-digit" }) }`);
    spinner.start();
  });

  mdxProcess.stdout.setEncoding("utf-8");
  mdxProcess.stdout.on("data", data => {
    if(data.includes("You can now view mdx-deck in the browser")) {
      spinner.stop();
      console.info("Initial compilation succeeded! Opening in http://localhost:8000/");
    } else if (data.includes("success") && data.includes("Building development bundle")) {
      console.info("Rebuilt successfully" + data.split("Building development bundle")[1]);
    }
  });
} catch(e) {
  console.error(e);
}
