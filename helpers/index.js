const chalk = require('chalk');  
const boxen = require('boxen');

const boxenOptions = { padding: { top: 1, bottom: 1, left: 9, right: 9 } };
exports.title = (title) => console.log(`\n${boxen(chalk.blue(title), boxenOptions)}\n`);