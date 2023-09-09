const bcrypt = require('bcrypt');
const UserModel = require("../db/models/user.model");

class UserService {
  constructor() {}

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

}


module.exports = UserService;
