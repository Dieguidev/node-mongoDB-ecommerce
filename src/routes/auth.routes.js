
import express from 'express';
const router = express.Router();

import { register } from '../controllers/user.controller.js';
import { login } from '../controllers/auth.controller.js'
import validatorHandler from '../middleware/validator.handler.js';
import { createUserSchema, loginUserSchema } from '../schemas/user.schemas.js';





router.post('/register',validatorHandler(createUserSchema, 'body'), register);
router.post('/login',validatorHandler(loginUserSchema, 'body'), login);





export default router;
