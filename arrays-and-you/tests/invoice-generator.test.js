const { invoiceGenerator: answer} = require('../answers');
const { invoiceGenerator: task } = require('../task');

test('Generate invoices', () => {  
  const length = Math.floor(Math.random() * 20 + 10);
  expect(task(length)).toStrictEqual(answer(length));
});