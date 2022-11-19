const Joi = require('joi');

module.exports = Joi.object({
  username: Joi.string()
    .required()
    .messages({ 'string.empty': '400|"username" is required' }),
  password: Joi.string()
    .required()
    .messages({ 'string.empty': '400|"password" is required' }),
})
