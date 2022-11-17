const userService = require('../services/user.service');

const createUser = async (req, res, next) => {
  const result = await userService.createUser(req);

  if (result.code) {
    next(result);
    return;
  }

  res.status(201).json({ token: result });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.getUserById(id);

  if (result.code) {
    next(result);
    return;
  }

  res.status(200).json(result);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
