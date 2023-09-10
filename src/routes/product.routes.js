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
import { verifyTokenAndAdmin } from '../middleware/verifytoken.js';

const router = express.Router();

router.get('/', validatorHandler(queryProductSchema, 'query'), getAllProducts);
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  getProductById
);
router.post('/',verifyTokenAndAdmin, validatorHandler(createProductSchema, 'body'), createProduct);
router.put(
  '/:id',verifyTokenAndAdmin,
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
);
router.delete(
  '/:id',verifyTokenAndAdmin,
  validatorHandler(getProductSchema, 'params'),
  deleteProduct
);

export default router;
