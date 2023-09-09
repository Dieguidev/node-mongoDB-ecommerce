const UserService = require('../services/user.service');
const userService = new UserService();

const register = async (req, res) => {
  try {
    const saveUser = await userService.createUser(req.body)
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
}





module.exports = {register}
