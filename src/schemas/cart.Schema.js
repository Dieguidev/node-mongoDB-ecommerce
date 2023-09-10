import Joi  from "joi";

const id = Joi.string().length(24);
const UserId = Joi.string().length(24);
const products = Joi.array();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

export const createCartSchema = Joi.object({
  UserId: UserId.required(),
  products: products.required(),
})

export const queryCartSchema = Joi.object({
  limit,
  offset,
});

export const getCartSchema = Joi.object({
  id: id.required(),
});
