
import express from 'express';

import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUsertStats,
} from "../controllers/user.controller.js";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifytoken.js";
import  validatorHandler  from "../middleware/validator.handler.js";
import { getUserSchema, updateUserSchema, queryUserSchema } from "../schemas/user.schemas.js";

const router = express.Router();


router.get('/',validatorHandler(queryUserSchema, 'query'), getAllUsers);
router.get('/stats', getUsertStats);
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser);
router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  verifyTokenAndAuthorization,
  updateUser
);
router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser);

export default router;

