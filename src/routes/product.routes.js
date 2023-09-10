import express, { query } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import validatorHandler from '../middleware/validator.handler.js';
import {
  createProductSchema,
  getProductSchema,
  queryProductSchema,
  updateProductSchema,
} from '../schemas/product.schemas.js';

const router = express.Router();

router.get('/', validatorHandler(queryProductSchema, 'query'), getAllProducts);
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  getProductById
);
router.post('/', validatorHandler(createProductSchema, 'body'), createProduct);
router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
);
router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  deleteProduct
);

export default router;
