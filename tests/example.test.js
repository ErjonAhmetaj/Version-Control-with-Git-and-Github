const add = require('../example'); // Import the function to test

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
