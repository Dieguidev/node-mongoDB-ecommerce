const UserService = require('../services/user.service');
const userService = new UserService();

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUsertStats = async (req, res) => {
  try {
    const userStats = await userService.getUsertStats();
    res.status(200).json(userStats);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const register = async (req, res) => {
  try {
    const saveUser = await userService.createUser(req.body);
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const userModify = await userService.updateUser(req.params.id, req.body);
  res.status(200).json('User updated successfully');
};

const deleteUser = async (req, res) => {
  const userDelete = await userService.deleteUser(req.params.id);
  res.status(200).json('User deleted successfully');
};

module.exports = {
  register,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUsertStats,
};
