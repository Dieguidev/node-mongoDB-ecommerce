import express from 'express';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  getOrderMonthlyIncome,
} from '../controllers/order.controller.js';
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../middleware/verifytoken.js';

import validatorHandler from '../middleware/validator.handler.js';
import {
  createOrderSchema,
  getOrderByIdUserSchema,
  getOrderByIsSchema,
  queryOrdertSchema,
} from '../DTO/order.dto.js';

const router = express.Router();

router.get(
  '/',
  verifyTokenAndAdmin,
  validatorHandler(queryOrdertSchema, 'query'),
  getAllOrders,
);
router.get('/monthlyincome', verifyTokenAndAdmin, getOrderMonthlyIncome);
router.get(
  '/:id',
  verifyTokenAndAuthorization,
  validatorHandler(getOrderByIsSchema, 'params'),
  getOrderById,
);
router.get(
  '/user/:userId',
  verifyTokenAndAuthorization,
  validatorHandler(getOrderByIdUserSchema, 'params'),
  getOrderByUserId,
);
router.post(
  '/',
  verifyTokenAndAuthorization,
  validatorHandler(createOrderSchema, 'body'),
  createOrder,
);
router.delete(
  '/:id',
  verifyTokenAndAuthorization,
  validatorHandler(getOrderByIsSchema, 'params'),
  deleteOrder,
);

export default router;
