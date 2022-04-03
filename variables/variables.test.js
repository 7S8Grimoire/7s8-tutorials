const task = require('./task');

test('Checking variables type', () => {
  const result = task();  
  expect(typeof result.author).toBe('string');
  expect(typeof result.age).toBe('number');
});

// npm test -- .\variables\variables.test.js