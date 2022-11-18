/* eslint-disable no-undef */
const passwordGenerate = require('../../../helpers/passwordGenerator');

test('Geração de um hashPassword', () => {
  const result = passwordGenerate(8);
  const password = '$2a$08$712O7Acuxa8F3g9ip5gWV.gig4W2BiZ2jT/g8XdSivCjEoX.WHOgW';

  expect(result).toHaveLength(password.length);
});
