const task = require('./task');

test('Checking variables', () => {
  const result = task();  
  expect(typeof result.author).toBe('string');
  expect(typeof result.age).toBe('number');
});