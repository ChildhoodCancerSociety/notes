import chalk from "chalk";

export const displayHelpText = () => {

  const createArgHelpText = (cmd, usage, comment) => {
    return [`
  ${chalk.yellow(`--${cmd} [${cmd.toUpperCase()}]`)}
      ex: ${ chalk.blue(`node . --${cmd} ${usage}`) } ${ chalk.bgGrey(`${comment}`) }
`, `--${cmd}`];
  }
  const dateArg = createArgHelpText("date", "11-16-22", "will pull up the first meeting from 11-16-22");
  const helperArgs = [dateArg];

  const specificArg = process.argv.length > 3;
  if(!specificArg) {
    console.info("Run this script without any arguments to start mdx-deck using the latest (by date) meeting deck.");
    console.info("Other args:");
  }
  const shown = helperArgs.filter(arg => {
    if(specificArg) {
      return process.argv.includes(arg[1]);
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
