import UserModel from '../db/models/user.model.js';

export default class UserService {
  constructor() {}

  async getUser(id) {
    const user = await UserModel.findById(id);
    return user;
  }

  async getAllUsers(query) {
    const { limit, offset } = query;
    const response = await UserModel.find().skip(offset).limit(limit);
    return response;
  }

  async getUserByUsername(username) {
    const findUser = await UserModel.findOne({username});
    return findUser;
  }

  async getUserByEmail(email) {
    const findUser = await UserModel.findOne({email});
    return findUser;
  }

  async createUser(newUser) {
    const userModel = new UserModel(newUser);
    const saveUser = await userModel.save();
    saveUser.password = undefined;
    return saveUser;
  }

  async updateUser(id, modifyUser) {
    const user = await UserModel.findByIdAndUpdate(id, modifyUser, {
      new: true,
    });
    return user;
  }

  async deleteUser(id) {
    const user = await UserModel.findByIdAndDelete(id);
    return user;
  }

  async getUsertStats() {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    return data;
  }
}
