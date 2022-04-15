const prompt = require("prompt-sync")();
const switchStatement = require('./switch-statement');
const { title, keypress } = require("../helpers");
(async () => {
  title("IF (you suck at programming) THEN you suck at programming ELSE you lie");

  try {
    while (true) {
      switchStatement();
      console.log("Press any key to continue");
      await keypress();
      process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
      console.clear();
    }
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
})();
