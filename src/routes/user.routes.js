import express from 'express';

import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUsertStats,
} from '../controllers/user.controller.js';
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../middleware/verifytoken.js';
import validatorHandler from '../middleware/validator.handler.js';
import {
  getUserSchema,
  updateUserSchema,
  queryUserSchema,
} from '../DTO/user.dto.js';

const router = express.Router();

router.get(
  '/',
  verifyTokenAndAdmin,
  validatorHandler(queryUserSchema, 'query'),
  getAllUsers,
);
router.get('/stats',verifyTokenAndAdmin, getUsertStats);
router.get('/:id',verifyTokenAndAuthorization, validatorHandler(getUserSchema, 'params'), getUser);
router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  verifyTokenAndAuthorization,
  updateUser,
);
router.delete('/:id',verifyTokenAndAdmin, validatorHandler(getUserSchema, 'params'), deleteUser);

export default router;
