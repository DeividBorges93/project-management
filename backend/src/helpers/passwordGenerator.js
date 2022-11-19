const bcrypt = require('bcryptjs');

module.exports = (password, length) => {
  const passwordHashed = bcrypt.hashSync(password, length);

  return passwordHashed;
};
