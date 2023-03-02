// You already have the methods imported
const { default: expect } = require('expect');
const {getfizzBuzz} = require('../dna');

test('Obtener los usuarios => ', () => {
  expect(getfizzBuzz(5)).toBe("Buzz");
});

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation