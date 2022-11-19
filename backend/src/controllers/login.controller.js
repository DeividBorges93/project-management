const loginService = require('../services/login.service');


const login = async (req, res, next) => {
  const result = await loginService.login(req);

  if (result.code) {
    next(result);
    return;
  }

  const { username } = result;

  res.status(200).json(`${username} successfully logged in`);
};

module.exports = { login };
