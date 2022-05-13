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

exports.pressToContinue = async () => {
  console.log("Press any key to continue...");
  await this.keypress();
}

exports.delay = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.loop = (times, callback) => {
  Array(times).fill(0).forEach((item, i) => callback(i));
};