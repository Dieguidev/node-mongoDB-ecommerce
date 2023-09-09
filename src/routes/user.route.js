const express = require('express');
const { verifyTokenAndAuthorization } = require('../middleware/verifytoken');
const { updateUser, deleteUser, getUser, getAllUsers, getUsertStats } = require('../controllers/user.controller');
const router = express.Router();

router.get('/',getAllUsers)
router.get('/stats', getUsertStats)
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id',deleteUser);


module.exports = router;
