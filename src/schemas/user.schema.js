const Joi = require('joi');

const id = Joi.string().length(24);
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string().min(3).max(15);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  username: username,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const queryUserSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  queryUserSchema,
};
