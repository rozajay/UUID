import { clear } from "console";
import chalk from 'chalk';
import figlet from 'figlet';

clear();

// Print out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Find SubSequence', { horizontalLayout: 'full' })
  )
)

