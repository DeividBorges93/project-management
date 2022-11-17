const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .min(8)
    .required()
    .messages({
      'any.required': '400|"name" is required',
      'string.min': '400|"name" length must be at least 8 characters long',
    }),
  username: Joi.string()
    .required()
    .min(8)
    .messages({
      'any.required': '400|"username" is required',
      'string.min': '400|"username" length must be at least 8 characters long',

    }),
});
