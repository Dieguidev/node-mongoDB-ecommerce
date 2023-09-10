const express = require('express');
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUsertStats,
} = require('../controllers/user.controller');
const validatorHandler = require('../middleware/validator.handler');
const { getUserSchema, updateUserSchema, queryUserSchema } = require('../schemas/user.schema');


const router = express.Router();


router.get('/',validatorHandler(queryUserSchema, 'query'), getAllUsers);
router.get('/stats', getUsertStats);
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser);
router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
);
router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser);


module.exports = router;
