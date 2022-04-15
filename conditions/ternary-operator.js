const chalk = require('chalk');

/**
 * The conditional (ternary) operator is the only JavaScript operator that takes three operands:
 *  a condition followed by a question mark (?), 
 *  then an expression to execute if the condition is truthy followed by a colon (:),
 *  and finally the expression to execute if the condition is falsy.
 */
module.exports = (input) => {  
  console.log('Typeof input: ', typeof input);
  console.log('IsNan: ', isNaN(input));
  console.log(chalk.yellow(!isNaN(input) ? "This is a number 🤔?" : "This absolutely not a number 🙃!"));
}