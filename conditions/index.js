const prompt = require("prompt-sync")();
const switchStatement = require('./switch-statement');
const { title } = require("../helpers");
title("IF (you suck at programming) THEN you suck at programming ELSE you lie");

try {
  while (true) {
    switchStatement();
    prompt("Press any key to continue");
    console.clear();
  }
} catch (e) {
  console.error(e);
}
