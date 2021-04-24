import { clear } from 'console';
import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import findLongestSubsequence from './utils/findLongestSubsequence';

clear();

// Print out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Find \nMAX \nSubSequence', { horizontalLayout: 'full' }),
  ),
);

// Process command line text
const processedContent = yargs.command(
  '$0 <input string>',
  'the default command',
).argv;

// Print out output
try {
  findLongestSubsequence(processedContent.inputstring as string);
  const longestSubsequnce = findLongestSubsequence(processedContent.inputstring as string);

  console.log(
    chalk.yellow(`Input: ${processedContent.inputstring}`),
  );

  console.log(
    chalk.yellow(`Output: ${longestSubsequnce}`),
  );
} catch (error) {
  console.log(
    chalk.red(`Make sure the inputs are passed in double quotes eg("1 2 2") \n Output: ${error}`),
  );
}
