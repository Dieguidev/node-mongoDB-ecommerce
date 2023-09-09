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
    const saveUser = await userService.createUser(newUser)
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error.message);
  }

}
module.exports = {register}
