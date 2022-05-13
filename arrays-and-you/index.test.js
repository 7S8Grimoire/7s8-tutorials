const { loop } = require('../helpers/index');
const { 
  arrayMultiplier: answerArrayMultiplier,
  wordToCodes: answerWordToCodes,
  playerCounter: answerPlayerCounter,
} = require('./answers');
const { 
  arrayMultiplier: taskArrayMultiplier,
  wordToCodes: taskWordToCodes,
  playerCounter: taskPlayerCounter,
} = require('./task');



test('Array multiplier', () => {  
  const numbers = [];
  const numberCount = Math.floor(Math.random() * 20) + 1;  
  loop(numberCount, () => {
    numbers.push(Math.floor(Math.random() * 100)) + 1;
  });

  expect(taskArrayMultiplier(numbers)).toStrictEqual(answerArrayMultiplier(numbers));

});

test('Word to codes', () => {
  const wordGenerator = () => (Math.random() + 1).toString(36).substring(7);
  const words = [];
  Array.from({ length: 100 }, (x, i) => words.push(wordGenerator()));

  words.forEach(data => {    
    expect(taskWordToCodes(data)).toStrictEqual(answerWordToCodes(data));
  });
});

// test('Word to codes', () => {
//   const words = [
//     'Apple',
//     'Cat',
//     'tAblLEE',
//     'ahs9dgAFS879DFasudy8fa8sdF8ASD',
//     'Abdul'
//   ];

//   words.forEach(data => {    
//     expect(taskWordToCodes(data)).toStrictEqual(answerWordToCodes(data));
//   });
// });