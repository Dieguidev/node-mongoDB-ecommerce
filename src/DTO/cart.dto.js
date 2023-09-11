import Joi  from "joi";

const id = Joi.string().length(24);
const userId = Joi.string().length(24);
const products = Joi.array();
const quantity = Joi.number().integer().min(1).default(1);
const productId = Joi.string().length(24);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const productSchema = Joi.object({
  productId: productId.required(),
  quantity
});

export const addOrTakeoffProductSchema = Joi.object({
  products: Joi.array().items(productSchema).length(1),
});

export const createCartSchema = Joi.object({
  userId: userId.required(),
  products,
})


export const queryCartSchema = Joi.object({
  limit,
  offset,
});

export const getByIdUserSchema = Joi.object({
  userId: userId.required(),
})

export const getCartByIsSchema = Joi.object({
  id: id.required(),
});
