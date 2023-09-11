import express from 'express';
import {
  addProductToCart,
  createCart,
  deleteCart,
  deleteProductFromCart,
  getAllCarts,
  getCartById,
  getCartByUserId,
} from '../controllers/cart.controller.js';
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from '../middleware/verifytoken.js';
import validatorHandler from '../middleware/validator.handler.js';
import {
  addOrTakeoffProductSchema,
  createCartSchema,
  getByIdUserSchema,
  getCartByIsSchema,
  queryCartSchema,
} from '../DTO/cart.dto.js';

const router = express.Router();

router.get(
  '/',
  verifyTokenAndAdmin,
  validatorHandler(queryCartSchema, 'query'),
  getAllCarts,
);
router.get(
  '/:id',
  verifyTokenAndAuthorization,
  validatorHandler(getCartByIsSchema, 'params'),
  getCartById,
);
router.get(
  '/user/:userId',
  verifyTokenAndAuthorization,
  validatorHandler(getByIdUserSchema, 'params'),
  getCartByUserId,
);
router.post(
  '/',
  verifyTokenAndAuthorization,
  validatorHandler(createCartSchema, 'body'),
  createCart,
);
router.put(
  '/add/:userId',
  verifyTokenAndAuthorization,
  validatorHandler(getByIdUserSchema, 'params'),
  validatorHandler(addOrTakeoffProductSchema, 'body'),
  addProductToCart,
);
router.put(
  '/takeoff/:userId',
  verifyTokenAndAuthorization,
  validatorHandler(getByIdUserSchema, 'params'),
  validatorHandler(addOrTakeoffProductSchema, 'body'),
  deleteProductFromCart,
);
router.delete(
  '/:id',
  // verifyTokenAndAuthorization,
  validatorHandler(getCartByIsSchema, 'params'),
  deleteCart,
);

export default router;
