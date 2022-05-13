// npm test -- arrays-and-you/index.test.js

/**
 * You receive an array with numbers
 * You must multiply each element of array by array length
 * [ 2, 4, 1 ] => [ 6, 12, 3 ]
 * [ 10, -5, 4, 1, 0, 1 ] => [ 60, -30, 24, 6, 0, 6 ]
 * npm test -- tests/array-multiplier.test.js
 */
exports.arrayMultiplier = (array) => {
  return;
}

/**
 * You receive a word
 * Get string length
 * Create new array and using string length fill it with the character ascii codes of each letter of the received word
 * Return array with codes
 * npm test -- tests/word-to-codes.test.js
 */
exports.wordToCodes = (word) => {
  return;
}

/**
 * You receive array of players objects and letter
 * Count how much players have more than 100 points or is tagged
 * Calculate how many times the specified letter occurs in the players nicknames
 * return object with player count and letter count
 * npm test -- tests/player-counter.test.js
 */
const data = [ // Example!!
  
  {  // <-- counted
    nickname: "Uno Sacry Saitofia",
    points: 28,
    isTagged: true
  },
  {  // <-- not counted
    nickname: "Ed Hungry",
    points: 28,
    isTagged: false
  },
];

exports.playerCounter = (players, letter) => {
  return;
}


/**
 * You receive a length
 * You must generate array with invoices
 * npm test -- tests/invoice-generator.test.js
 */
const invoice = { // generate example
  id: 1, // <-- each next object id increments (starts from 1)
  type: "Sales", // <--- set type determining it from types array using modulus by 5 to current loop index  - index % 5
}

exports.invoiceGenerator = (length) => {
  const types = [ "Sales", "Consolidated ", "Timesheet", "Credit ", "Mixed" ]; // Example
  return;
}
