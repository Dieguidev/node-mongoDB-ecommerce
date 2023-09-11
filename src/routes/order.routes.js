import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  updateOrder,
} from '../controllers/order.controller.js';
import {
} from '../middleware/verifytoken.js';

import  validatorHandler  from '../middleware/validator.handler.js';
import { createOrderSchema } from '../DTO/order.dto.js';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.get('/user/:userId', getOrderByUserId);
router.post(
  '/',
  // verifyTokenAndAuthorization,
  validatorHandler(createOrderSchema, 'body'),
  createOrder,
);
router.put('/:id', updateOrder);

export default router;
