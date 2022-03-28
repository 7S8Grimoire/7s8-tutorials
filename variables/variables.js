/**** Declaring & Scopes ****/

superGlobalVar = 101; // This is a global of global variable - accessible everywhere in any project file

var globalVar = 102; // This is global variable, but accessible only in this file :(

let localVar = 103; // This is local variable - accessible only in block where was declared

const constantVar = 104; // Works like let but is constant (almost)

if (true) { // <== block open
  let hi = "hi!"; // is accessible only there
  hi = "Hi!"

} // <== block close
hi = "Hello!" // <== error

/**** Types ****/

let age = 10; // Number
let kg = 10.60; // Also number
let notANumber = NaN; // Not a number but typeof number
let author = "SaintMiner" // String
let isActive = true; // Boolean true/false
let today = new Date(); // Date
let list = [] // Array
let nothing = null; // Da - there is nothing, this is false and 0 and object (╯°□°）╯︵ ┻━┻ | converting null to number is 0
let alsoNothing = undefined; // Da - also nothing but really nothing, this is also false | converting null to number is NaN (Not a Number)
let doWork = () => {} // Function - yes, you can save your functions in variable

let person = { // Object
  name: "Stepan",
  age: 57,
  isWorking: false,
}

/**
 * JS is Loosely-typed
 * He does not care how you use variable. You can change it type whenever you want
 * Karoč look:
 */
let something = 10;
something = "was there";
something = new Date("2022-03-28"); // but we don't do that (bad karma). Often we convert string number to normal number "10.12" => 10.12

/** you can get any variable type using typeof */
let height = 100;
typeof height; // 'number'

/** Tips 
 * For boolean naming use prefixes: is, has
 * isActive
 * hasChildren
*/








