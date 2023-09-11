import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from '../controllers/product.controller.js';
import validatorHandler from '../middleware/validator.handler.js';
import {
  createProductSchema,
  getProductSchema,
  getProductsByCategorySchema,
  queryProductSchema,
  updateProductSchema,
} from '../DTO/product.dto.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/verifytoken.js';

const router = express.Router();

router.get('/', validatorHandler(queryProductSchema, 'query'), getAllProducts);
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  getProductById,
);
router.get('/findByCategory',verifyTokenAndAuthorization,validatorHandler(getProductsByCategorySchema, 'body'), getProductsByCategory);
router.post(
  '/',
  verifyTokenAndAdmin,
  validatorHandler(createProductSchema, 'body'),
  createProduct,
);
router.put(
  '/:id',
  verifyTokenAndAdmin,
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct,
);
router.delete(
  '/:id',
  verifyTokenAndAdmin,
  validatorHandler(getProductSchema, 'params'),
  deleteProduct,
);

export default router;
