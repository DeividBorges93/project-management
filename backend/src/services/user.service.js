const { User } = require('../models');
const userSchemas = require('../schemas/user.schemas');
const passwordGenerator = require('../helpers/passwordGenerator');

const createUser = async (req) => {
  const { error } = userSchemas.validate(req.body);
  const { name, password } = req.body;
  const { username } = req.headers;
  const hashPassword = passwordGenerator(password, 8);

  if (error) {
    const [code, message] = error.message.split('|');
    return { code, message };
  }

  const usernameAlreadyExists = await User.findOne({ where: { username } });

  if (usernameAlreadyExists) return { code: 409, message: 'User already registered' };

  const user = await User.create({ name, password: hashPassword, username });

  return user;
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['hashPassword'] } });

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['hashPassword'] } });

  if (!user) return { code: 404, message: 'User does not exists' };

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
