import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  updateOrder,
} from '../controllers/order.controller.js';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.get('/user/:userId', getOrderByUserId);

router.post('/', createOrder);
router.put('/:id', updateOrder);

export default router;
