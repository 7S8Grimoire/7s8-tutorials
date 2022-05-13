const { wordToCodes: answer} = require('../answers');
const { wordToCodes: task } = require('../task');

const wordGenerator = () => (Math.random() + 1).toString(36).substring(2);
const words = [];
Array.from({ length: 10 }, (x, i) => words.push(wordGenerator()));

describe('Word to codes', () => {
  test.each(words)("%p", (word) => {
      expect(task(word)).toEqual(answer(word));
  });
});