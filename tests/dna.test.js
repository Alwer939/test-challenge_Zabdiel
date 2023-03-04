const { default: expect } = require('expect');
const canonical = require('../dna');

test('Obtener el resultado canonico => ', () => {
  expect(canonical('CTAGGGTA')).toBe("CTAG");
});