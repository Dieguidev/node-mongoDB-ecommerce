const express = require('express');
const router = express.Router();
const User = require('../db/models/user.model');
const { register } = require('../controllers/user.controller');
const { login } = require('../controllers/auth.controller');


router.post('/register', register);
router.post('/login', login);





module.exports = router;
