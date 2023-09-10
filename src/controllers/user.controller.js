
import  UserService  from '../services/user.services.js';
const userServices = new UserService();

export const getUser = async (req, res,next) => {
  try {
    console.log(req.params.id);
    const user = await userServices.getUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userServices.getAllUsers(req.query);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUsertStats = async (req, res, next) => {
  try {
    const userStats = await userServices.getUsertStats();
    res.status(200).json(userStats);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res) => {
  try {
    const saveUser = await userServices.createUser(req.body);
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  const userModify = await userServices.updateUser(req.params.id, req.body);
  res.status(200).json('User updated successfully');
};

export const deleteUser = async (req, res) => {
  const userDelete = await userServices.deleteUser(req.params.id);
  res.status(200).json('User deleted successfully');
};




