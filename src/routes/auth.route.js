const express = require('express');
const router = express.Router();
const User = require('../db/models/user.model');
const { register } = require('../controllers/user.controller');

// router.post('/register', async (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//   });

//   try {
//     const saveUser = await newUser.save();
//     res.status(201).json(saveUser);

//   } catch (error) {
//     res.status(500).json(error);
//   }
// })

router.post('/register', register)


module.exports = router;
