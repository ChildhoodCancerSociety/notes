import chalk from "chalk";

export const displayHelpText = () => {

  const createArgHelpText = (cmd, usage, comment, topLevel) => {
    const firstCmd = cmd.split(" | ")[0];
    const helpText = `${topLevel ? `  ${chalk.magenta(topLevel)}\n` : ""}   ${chalk.yellow(`--${cmd} [${firstCmd.toUpperCase()}]`)}
      ex: ${ chalk.blue(`node . --${firstCmd} ${usage}`) } ${ chalk.bgGrey(`${comment}`) }`
    return [helpText, `--${cmd}`];
  }
  const dateArg = createArgHelpText("date | -D", "11-16-22", "will pull up the first meeting from 11-16-22", "[stub, this isnt functional yet]");
  const showInfoArg = createArgHelpText("show-all | -S", "", "", "Pipes all output from `mdx-deck` to stdout in the existing process");

  const helperArgs = [dateArg, showInfoArg];

  const specificArg = process.argv.length > 3;
  if(!specificArg) {
    console.info("Run this script without any arguments to start mdx-deck using the latest (by date) meeting deck.");
    console.info("Other args:");
  }
  const shown = helperArgs.filter(arg => {
    if(specificArg) {
      const args = arg[1].split(" | ");
      return args.some(arg => process.argv.includes(arg)) ;
    }
    return true;
  });

  if(shown.length === 0 && specificArg) {
    console.info(chalk.red("Couldn't find this command."));
  } else {
    shown.forEach(arg => console.info(arg[0]));
  }

  process.exit(0);
};
