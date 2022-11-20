const loginService = require('../services/login.service');


const login = async (req, res, next) => {
  const result = await loginService.login(req);
  if (result.code) {
    next(result);
    return;
  }
  
  const { username } = result;
  const { Authorization } = req.headers;

  const message = {
    username: `${username}`,
    token: `${Authorization}`
  }
  res.status(200).json(message);
};

module.exports = { login };
