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
import { getCartSchema, queryCartSchema } from '../DTO/cart.dto.js';

const router = express.Router();

router.get(
  '/',
  verifyTokenAndAdmin,
  validatorHandler(queryCartSchema, 'query'),
  getAllCarts
);
router.get(
  '/:id',
  verifyTokenAndAuthorization,

  validatorHandler(getCartSchema, 'params'),
  getCartById
);
router.get('/cart/:userId', verifyTokenAndAuthorization, getCartByUserId);
router.post(
  '/',
  validatorHandler(getCartSchema, 'params'),
  verifyTokenAndAuthorization,
  createCart
);
router.put('/add:id', verifyTokenAndAuthorization, addProductToCart);
router.put('/takeoff/:id', verifyTokenAndAuthorization, deleteProductFromCart);
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

export default router;
