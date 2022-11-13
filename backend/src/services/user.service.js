const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');
const userSchemas = require('../schemas/user.schemas');

const createUser = async (req) => {
  const { error } = userSchemas.validate(req.body);
  const { name, password } = req.body;
  const { username } = req.headers;
  const { id } = req.params;

  if (error) {
    const [code, message] = error.message.split('|');
    return { code, message };
  }

  const usernameAlreadyExists = await User.findOne({ where: { username }});

  if (usernameAlreadyExists) return { code: 409, message: 'User already registered' };

  await User.create({ name, password, username });

  const token = jwtGenerator({ username, id });

  return token;
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { code: 404, message: 'User does not exists' };

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById
};
