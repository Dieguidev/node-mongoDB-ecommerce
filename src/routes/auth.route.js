const express = require('express');
const router = express.Router();
const User = require('../db/models/user.model');
const { register, login } = require('../controllers/user.controller');


router.post('/register', register);
router.post('/login', login);





module.exports = router;
