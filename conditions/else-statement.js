const chalk = require('chalk');

// Note that there is no elseif syntax in JavaScript. However, you can write it with a space between else and if:
module.exports = (input) => {
  console.log('Typeof input: ', typeof input);
  console.log('IsNan: ', isNaN(input));
  if (!isNaN(input)) {
    // true
    console.log(chalk.yellow("This is a number 🤔?"));
  } else {
    // false
    console.log(chalk.yellow("This absolutely not a number 🙃!"));
  }
}