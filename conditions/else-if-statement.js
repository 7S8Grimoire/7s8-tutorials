const chalk = require('chalk');

// If the condition is falsy, else statement can be executed.
module.exports = (input) => {
  console.log('Typeof input: ', typeof input);
  console.log('IsNan: ', isNaN(input));
  if (!isNaN(input) && input % 1 === 0) {
    // if first condition true
    console.log(chalk.yellow("This is integer!"));
  } else if(!isNaN(input) && input % 1 !== 0) {
    // if first condition false and second true
    console.log(chalk.yellow("This is float 😱!"));
  } else {
    // if both condition false
    console.log(chalk.yellow("This absolutely not a number 🙃!"));
  }
}