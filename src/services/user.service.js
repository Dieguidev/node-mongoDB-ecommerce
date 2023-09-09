const bcrypt = require('bcrypt');
const UserModel = require('../db/models/user.model');
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

  async getUsertStats() {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    console.log(lastYear);
    const data = await userModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    console.log(data);
    return data;
  }
}

module.exports = UserService;
