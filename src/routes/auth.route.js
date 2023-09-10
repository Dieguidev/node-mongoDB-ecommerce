const express = require('express');
const router = express.Router();
const User = require('../db/models/user.model');
const { register } = require('../controllers/user.controller');
const { login } = require('../controllers/auth.controller');
const validatorHandler = require('../middleware/validator.handler');
const { createUserSchema } = require('../schemas/user.schema');


router.post('/register',validatorHandler(createUserSchema, 'body'), register);
router.post('/login', login);





module.exports = router;
