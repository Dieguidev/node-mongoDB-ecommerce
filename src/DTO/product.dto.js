import Joi from 'joi';

const id = Joi.string().length(24);
const title = Joi.string().min(3);
const description = Joi.string().min(3);
const image = Joi.string().uri();
const categories = Joi.array().items(Joi.string());
const size = Joi.string();
const color = Joi.string();
const price = Joi.number();
const category = Joi.string();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

export const createProductSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  image: image.required(),
  price: price.required(),
  categories,
  size,
  color,
})

export const updateProductSchema = Joi.object({
  title,
  description,
  image,
  categories,
  size,
  color,
  price,
})

export const getProductSchema = Joi.object({
  id: id.required(),
})

export const getProductsByCategorySchema = Joi.object({
  category: category.required(),
})

export const queryProductSchema = Joi.object({
  limit,
  offset,
})
