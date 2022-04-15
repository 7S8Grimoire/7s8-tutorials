module.exports = () => {
  const fs = require('fs');
  const path = require("path");
  const prompt = require("prompt-sync")();

  console.log("1. if");
  console.log("2. else");
  console.log("2.1. else if");
  console.log("3. switch");
  console.log("4. Conditional (ternary) operator");
  console.log("5. Exit");

  let choose = +prompt("Choose your action: ");
  let file = null;
  let text = null;
  let input = null;
  console.clear();

  switch (choose) {
    case 1:        
      file = path.join(__dirname, "if-statement.js");
      text = fs.readFileSync(file).toString('utf-8');      
      break;
    case 2:
      file = path.join(__dirname, "else-statement.js");
      text = fs.readFileSync(file).toString('utf-8');      
      break;
    case 2.1:
      file = path.join(__dirname, "else-if-statement.js");
      text = fs.readFileSync(file).toString('utf-8');      
      break;
    case 3:
      file = path.join(__dirname, 'switch-statement.js');
      text = fs.readFileSync(file).toString('utf-8');
      break;
    case 4:
      file = path.join(__dirname, "ternary-operator.js");
      text = fs.readFileSync(file).toString('utf-8');
      break;
    case 5:
      throw "Goodbye";
    default:
      console.log("No such (-_-)");          
  }
  
  if (choose != 3) {
    console.log(text);
    console.log('\nTry the code!');
    input = +prompt("Input: ");
    require(file)(input);
  } else {
    console.log("\nYou are already working with this code 😂");
  }
}