const { loop } = require('../../helpers/index');
const { arrayMultiplier: answer} = require('../answers');
const { arrayMultiplier: task } = require('../task');

test('Array multiplier', () => {  
  const numbers = [];
  const numberCount = Math.floor(Math.random() * 20) + 1;  

  loop(numberCount, () => {
    numbers.push(Math.floor(Math.random() * 100)) + 1;
  });

  expect(task(numbers)).toStrictEqual(answer(numbers));
});