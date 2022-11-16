const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string()
  .min(12)  
  .required()
  .messages({
    'any.required': '400|"title" is required',
    'string.min': '400|"title" length must be at least 12 characters long',
  }),
  zipCode: Joi.number()
  .min(8)
  .required()
  .messages({
    'any.required': '400|"zipCode" is required',
    'string.min': '400|"zipCode" length must be 8 characters',
  }),
  cost: Joi.number()
  .required()
  .messages({
    'any.required': '400|"cost" is required',
  }),
  done: Joi.boolean()
  .required()
  .messages({
    'any.required': '400|"done" is required',
  }),
  deadline: Joi.date()
  .required()
  .messages({
    'any.required': '400|"deadline" is required',
  }),
});
