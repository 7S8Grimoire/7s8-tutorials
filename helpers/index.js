const chalk = require('chalk');  
const boxen = require('boxen');

const boxenOptions = { padding: { top: 1, bottom: 1, left: 9, right: 9 } };
exports.title = (title) => console.log(`\n${boxen(chalk.blue(title), boxenOptions)}\n`);

exports.keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
}