const chalk = require('chalk');

// The if statement executes a statement if a specified condition is truthy.
module.exports = (input) => {
  console.log('Typeof input: ', typeof input);
  console.log('IsNan: ', isNaN(input));
  if (!isNaN(input)) {
    // true
    console.log(chalk.yellow("This is a number 🤔?"));
  }
}