const Joi = require('joi');

const id = Joi.string().length(24)
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required()
});

const updateUserSchema = Joi.object({
  email: email,
  username: username,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema};
