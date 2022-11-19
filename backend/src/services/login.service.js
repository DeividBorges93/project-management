const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');
const loginSchemas = require('../schemas/login.schemas');
const { compareSync } = require('bcryptjs');

const login = async (req) => {
  const { error } = loginSchemas.validate(req.body);
  const { username } = req.headers;
  const { password } = req.body;
  
  if (error) {
    if (!error.message.includes('|')) return { code: 400, message: error.message };
    const [code, message] = error.message.split('|');
    return { code, message };
  }

  const findUser = await User.findOne({ where: { username } });
  
  if (!findUser) return { code: 400, message: 'Invalid fields' };

  const { id, password: hashPasword } = findUser.dataValues;

  const passwordMatch = compareSync(password, hashPasword);

  
  if (!passwordMatch) return { code: 400, message: 'Invalid password'};

  const token = jwtGenerator({ username, id });

  req.headers.authorization = token;

  return findUser;
};

module.exports = { login };
