// const Joi = require('joi');
import Joi from 'joi';

const id = Joi.string().length(24);
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string().min(3).max(15);

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const isAdmin = Joi.boolean();

export const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required(),
  isAdmin
});

export const updateUserSchema = Joi.object({
  email,
  username
});

export const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

export const getUserSchema = Joi.object({
  id: id.required(),
});

export const queryUserSchema = Joi.object({
  limit,
  offset,
});


