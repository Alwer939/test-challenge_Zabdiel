const { default: expect } = require('expect');
const { sum,substract, multiply, division, power } = require('../calculator');

test('Suma de 2 numeros', () => {
  expect(sum(4,6)).toBe(10);
});

test('Resta de 2 numeros', () => {
  expect(substract(4,6)).toBe(-2);
});

test('Multiplicaicon de 2 numeros', () => {
  expect(multiply(4,6)).toBe(24);
});

test('division de 2 numeros', () => {
  expect(division(2,1)).toBe(2);
});

test('Potencia de numero a => a^b', () => {
  expect(power(4,6)).toBe(4096);
});
