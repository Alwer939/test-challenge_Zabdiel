// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers, users} = require('../users');

test('Obtener los usuarios => ', () => {
  expect(getUsers).toBe(users);
});

test('Obtener el usuario => ', () => {
  expect(getUser(1)).toBe(users[0]);
});

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation