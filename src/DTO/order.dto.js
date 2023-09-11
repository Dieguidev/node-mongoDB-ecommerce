import Joi from 'joi';

const id = Joi.string().length(24);
const userId = Joi.string().length(24);
const quantity = Joi.number().integer().min(1).default(1);
const productId = Joi.string().length(24);
const address = Joi.string();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const productSchema = Joi.object({
  productId: productId.required(),
  quantity,
});

export const createOrderSchema = Joi.object({
  userId: userId.required(),
  products: Joi.array().items(productSchema),
  address: address.required(),
});

export const queryOrdertSchema = Joi.object({
  limit,
  offset,
});

export const getOrderByIdUserSchema = Joi.object({
  userId: userId.required(),
});

export const getOrderByIsSchema = Joi.object({
  id: id.required(),
});
