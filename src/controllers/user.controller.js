const userModel = require("../db/models/user.model");
const UserService = require("../services/user.service")

const userService = new UserService();

const register = async (req, res) => {
  try {
    const newUser = new userModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    const saveUser = await userService.createUser(req.body)
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const login = async (req, res) => {
  try {
    const user = new userModel(req.body);    const rpta = await userService.login(user)
    res.status(200).json(rpta);
  } catch (error) {
    res.status(400).json(error.message);
  }
}


module.exports = {register, login}
