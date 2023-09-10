import boom from '@hapi/boom';
import UserModel from '../db/models/user.model.js';

export default class UserService {
  constructor() {}

  async getUser(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async getAllUsers(query) {
    const { limit, offset } = query;
    const response = await UserModel.find().skip(offset).limit(limit);
    return response;
  }

  async createUser(newUser) {
    const findUser = await UserModel.findOne({ email: newUser.email });
    if (findUser) {
      return { mesage: 'user already exist' };
    }
    const userModel = new UserModel(newUser);
    const saveUser = await userModel.save();
    saveUser.password = undefined;
    return saveUser;
  }

  async updateUser(id, modifyUser) {
    const user = await UserModel.findByIdAndUpdate(id, modifyUser, {
      new: true,
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async deleteUser(id) {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
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
