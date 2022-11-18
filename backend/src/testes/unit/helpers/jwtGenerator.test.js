/* eslint-disable no-undef */
require('dotenv/config');
const jwtGenerator = require('../../../helpers/jwtGenerator');
const { mockUserWithId } = require('../../mocks/mockUser');

const { username, id } = mockUserWithId;

test('Geração de um token', () => {
  const result = jwtGenerator({ username, id });

  const length = 187;

  expect(result).toHaveLength(length);
});
