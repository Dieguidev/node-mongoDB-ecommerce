import express from 'express';

import { register } from '../controllers/user.controller.js';
import { login } from '../controllers/auth.controller.js'
import validatorHandler from '../middleware/validator.handler.js';
import { createUserSchema, loginUserSchema } from '../DTO/user.dto.js';

const router = express.Router();

router.post('/register',validatorHandler(createUserSchema, 'body'), register);
router.post('/login',validatorHandler(loginUserSchema, 'body'), login);


export default router;
