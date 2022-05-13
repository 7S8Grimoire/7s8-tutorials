// npm run la

const prompt = require("prompt-sync")();
const { title, pressToContinue, delay } = require("../helpers");

// I am very lazy to write ten times console.log("I am lazy")
(async () => {
  title("Simple for");
  await pressToContinue();

  title("From 0 to 9");
  for (let i = 0; i < 10; i++) {
    console.log(`${i} I am lazy`);
  }
  await pressToContinue();

  title("From 10 to 1");
  for (let i = 10; i > 0; i--) {
    console.log(`${i} I am lazy`);
  }
  await pressToContinue();

  title("For IN/OF");
  const info = {
    name: "Martishka",
    surname: "Obezjanova",
    age: 58,
    items: [
      "bananana small",
      "bananana yellow",
      "bananana fresh",
      "bananana big",
      "bananana rotten",
    ],
  };

  for (attribute in info) {
    if (Array.isArray(info[attribute])) {
      let i = 1;
      console.log(`${attribute}:`);
      for (item of info[attribute]) {
        console.log(`\t${i++} - ${item}`);
      }
    } else {
      console.log(`${attribute} - ${info[attribute]}`);
    }
  }
  await pressToContinue();

  while (info.items.length) {
    console.log(`${info.items.length} banana-na-s left`);
    info.items.pop();
    if (!info.items.length) {
      console.log("Last banana disappeared 😢;");
    }
  }
  await pressToContinue();

  console.log();

  const password = "bananana";
  const continuePassword = "ABOBA";
  let word = null;
  do {
    word = prompt(
      `Input word '${password}' and then you can exit or type '${continuePassword}' to continue: `
    );
  } while (word !== password && word !== continuePassword);

  if (word === password) {
    console.log("Thats all 🤗");
    process.exit(0);
  } else {
    title("Arrays");
    console.log("The Array object, as with arrays in other programming languages,");
    console.log("enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.");
    await pressToContinue();
    

    let arr = [];
    console.log(arr, "<=== This is array (empty)");
    console.log('Fill as much as you want until the RAM runs out. Array limit: 4294967296')
    await pressToContinue();
    
    let arrayLength = undefined;
    do {
      arrayLength = +prompt("Type the array length: ");
      if (arrayLength <= 0) {
        console.log("choose more than 0 :)");
      }
      if (isNaN(arrayLength)) {
        console.log("Pls type a number :)");
      }
    } while (isNaN(arrayLength) || arrayLength <= 0);

    console.log("filling array");
    for (let i = 1; i <= arrayLength; i++) {
      console.log(`Inserting ${i} to array`);
      // Push, just push
      arr.push(i);
    }
    console.log(`The array: `, arr);
    await pressToContinue();
    
    title("ForEach")
    console.log('Same FOR but better');
    arr.forEach(item => {
      console.log(`${item} * 2 = ${item * 2}`);
    });
    await pressToContinue();

    console.log('There your adventure begins ^_^');
    console.log('Function with arrays:');
    const arrayPossibleFunctions = Object.getOwnPropertyNames(Array.prototype);
    await pressToContinue();

    arrayPossibleFunctions.forEach((item, index) => {      
      console.log(`${index + 1} ${item}`);
    });
    await pressToContinue();

    const objectPossibleFunctions = Object.getOwnPropertyNames(Object.prototype);
    console.log('Function with object:');
    objectPossibleFunctions.forEach((item, index) => {      
      console.log(`${index + 1} ${item}`);
    });
    await pressToContinue();

    console.log("Goodbye!");
    process.exit(0);
  }
})();
