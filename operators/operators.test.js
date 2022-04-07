const { subtaskLargest, subtaskLargestOrGreaterThan20, subtaskAllLessThan0 } = require('./task');

test('Checking variables type', () => {
  expect(subtaskLargest(5, 2, -1)).toBe(true);
  expect(subtaskLargest(7, 10, 3)).toBe(false);
  expect(subtaskLargest(3, 3, 3)).toBe(false);
  expect(subtaskLargest(-10, -7, -1)).toBe(false);

  expect(subtaskLargestOrGreaterThan20(7, 10, 5)).toBe(true);
  expect(subtaskLargestOrGreaterThan20(9, 0, 6)).toBe(true);
  expect(subtaskLargestOrGreaterThan20(-6, -1, 0)).toBe(false);
  expect(subtaskLargestOrGreaterThan20(9, 9, 0)).toBe(false);

  expect(subtaskAllLessThan0(-6, -1, -3)).toBe(true);
  expect(subtaskAllLessThan0(6, -1, -3)).toBe(false);
  expect(subtaskAllLessThan0(0, 0, 0)).toBe(false);
});

// npm test -- operators/operators.test.js