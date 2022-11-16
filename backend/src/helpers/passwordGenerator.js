const bcrypt = require('bcryptjs');

module.exports = (length) => {
  const hashAleatoria = Math.random().toString(36).substring(0, length);
  const passwordHashed = bcrypt.hashSync(hashAleatoria, length);
  
  return passwordHashed;
};
