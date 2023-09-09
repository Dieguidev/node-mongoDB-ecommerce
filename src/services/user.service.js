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


  async login(user) {
    const findUser = await UserModel.findOne({ email: user.email });
    console.log(findUser);
    if (!findUser) {
      return { mesage: 'user not found' };
    }

    if (bcrypt.compareSync(user.password, findUser.password)) {
      return findUser;
    } else {
      return { mesage: 'password is incorrect' };
    }
  }
}


module.exports = UserService;
