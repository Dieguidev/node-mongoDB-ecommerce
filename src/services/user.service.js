const bcrypt = require('bcrypt');
const UserModel = require("../db/models/user.model");
const userModel = require('../db/models/user.model');

class UserService {
  constructor() {}

  async getUser(id) {
    const response = await userModel.findById(id);
    return response;
  }

  async getAllUsers() {
    const response = await userModel.find();
    return response;
  }

  async createUser(newUser) {
    const findUser = await UserModel.findOne({ email: newUser.email });
    if (findUser) {
      return { mesage: 'user already exist' };
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const userModel = new UserModel(newUser);
    const saveUser = await userModel.save();
    return saveUser;
  }

  async updateUser(id, modifyUser) {
    const response = await userModel.findByIdAndUpdate(id, modifyUser);
    return response;
  }

  async deleteUser(id) {
    const response = await userModel.findByIdAndDelete(id);
    return response;
  }

}


module.exports = UserService;
