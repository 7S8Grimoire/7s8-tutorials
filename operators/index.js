const chalk = require('chalk');  
const boxen = require('boxen');

const boxenOptions = { padding: { top: 1, bottom: 1, left: 9, right: 9 } };
const title = (title) => console.log(`\n${boxen(chalk.blue(title), boxenOptions)}\n`);


title('Assign Operator "="');
// Assign operator "="
let x = 10;
let y = 5;
let z = 0;

console.log(`let x = 10 | x: ${x}`);
console.log(`let y = 5  | y: ${y}`);
console.log(`let z = 0  | z: ${z}`);


// Arithmetic Operators
title('Arithmetic Operators');

console.log(`z = x + y Addition "+"`)
z = x + y;
console.log(`z: ${z}\n`);

console.log(`z = x - y Subtraction "-"`)
z = x - y; 
console.log(`z: ${z}\n`);

console.log(`z = x * y Multiplication "*"`)
z = x * y;
console.log(`z: ${z}\n`);

console.log(`z = x / y Division "/"`)
z = x / y;
console.log(`z: ${z}\n`);

console.log(`z = x ** y Exponentiation "**"`)
z = x ** y;
console.log(`z: ${z}\n`);


// 10+1 Increment "++"
// x = x + 1;
console.log(`x: ${x} | x incremented by 1 - x++`);
x++;
console.log(`x: ${x}\n`);

// 11-1 Decrement "--"
// x = x - 1;
console.log(`x: ${x} | x decremented by 1 - x--`);
x--;
console.log(`x: ${x}\n`);

// !!! Increment/decrement before output or using

console.log(`\nIf you will use variable increment after output or some processing - this will firstly output variable value and then increment it x++: ${x++}`);
console.log(`Now this is: ${x}\nDecrement also x--: ${x--}\nLook: ${x}`);
console.log(`Incrementing before output/processing ++x: ${++x} and decrementing --x: ${--x}`);

title("Assignment operators");

z = 0;
console.log(`z: ${z} | Operator "+=" | z = z + y;`);
z += y;
console.log(`z: ${z}`)

z = 0;
console.log(`\nz: ${z} | Operator "-=" | z = z - y;`);
z -= y;
console.log(`z: ${z}`);

z = 1;
console.log(`\nz: ${z} | Operator "*=" | z = z * y`);
z *= y;
console.log(`z: ${z}`);

z = 10;
console.log(`\nz: ${z} | Operator "/=" | z = z / y`)
z /= y;
console.log(`z: ${z}`);

z = 11;
console.log(`\nz: ${z} | Operator "%=" | z = z % y`)
z %= y;
console.log(`z: ${z}`);

z = 2;
console.log(`\nz: ${z} | Operator "**=" | z = z ** y`);
z **= 5;
console.log(`z: ${z}`);

title("operators and STRINGs");

z = "text";
console.log("String has one interesting feature: everything that will be added to them or with them will be converted to string and added to text");
console.log(`z: ${z} - now is the variable with value "text" and type string`);
console.log(`z + "variable" = ${z + "variable"}`);
console.log(`z + 1 = ${z + 1}`);
console.log(`z + true = ${z + true}`);
console.log(`z - "text" = ${z - "text"} | Subtraction with text will return NaN but!`);
console.log(`"4" - "3" = ${"4" - "3"} | If string text is only numbers then you will get result :3`);

title("Comparison Operators");

console.log("comparison operators compares two operands and return a boolean value true or false\n");

let num1 = 5, num2 = 10, num3 = "5";
let num1Copy = num1;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`num3: ${num3}`);
console.log(`num1Copy: ${num1Copy}\n`);

console.log(`num1 == num3 | ${num1} == "${num3}" | ${num1 == num3} | "==" - Compares the equality of two operands without considering type.`);
console.log(`num1 == num1Copy | ${num1} == ${num1Copy} | ${num1 == num1Copy}`);
console.log(`num1 === num3 | ${num1} === "${num3}" | ${num1 === num3} | "===" - Compares equality of two operands with type.\n`);


console.log(`num1 != num3 | ${num1} != ${num3} | ${num1 != num3} | "!=" Compares inequality of two operands.`);
console.log(`num1 != num2 | ${num1} != ${num2} | ${num1 != num2}\n`);

console.log(`num1 > num2 | ${num1} > ${num2} | ${num1 > num2} | ">" left more than right`);
console.log(`num1 < num2 | ${num1} < ${num2} | ${num1 < num2} | "<" left less than right`);
console.log(`num1 < num1Copy | ${num1} < ${num1Copy} | ${num1 < num1Copy} | "<" left less than or equal right\n`);

console.log(`num1 >= num2 | ${num1} >= ${num2} | ${num1 >= num2} | ">=" left more than or equal right`);
console.log(`num1 <= num2 | ${num1} <= ${num2} | ${num1 <= num2} | "<=" left less than or equal right`);
console.log(`num1 <= num1Copy | ${num1} <= ${num1Copy} | ${num1 <= num1Copy} | "<=" left less than or equal right`);

title("Logical Operators");

console.log("Logical operators are used to combine two or more conditions. JavaScript provides the following logical operators.");

console.log("&& - Logical AND");
console.log(`${true} && ${true} = ${true && true}`);
console.log(`${false} && ${true} = ${false && true}`);
console.log(`${true} && ${false} = ${true && false}\n`);

console.log("|| - Logical OR");
console.log(`${true} || ${true} = ${true || true}`);
console.log(`${false} || ${true} = ${false || true}`);
console.log(`${true} || ${false} = ${true || false}\n`);

console.log("! - Logical NOT");
console.log(`!${true} = ${!true}`);
console.log(`!${false} = ${!false}`);

title("Logical Operators + Comparison operators");












