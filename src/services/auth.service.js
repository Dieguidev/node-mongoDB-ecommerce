const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const UserModel = require("../db/models/user.model");

class AuthService {
  constructor() {}

  async login(user) {
    const findUser = await UserModel.findOne({ email: user.email });

    if (!findUser) {
      return { mesage: 'user not found' };
    }

    if (bcrypt.compareSync(user.password, findUser.password)) {
      const token = jwt.sign(
        {
          id: findUser._id,
          isAdmin: findUser.isAdmin,
        }, process.env.JWT_SECRET,
        { expiresIn: '1h' , algorithm: 'HS256'})

      console.log(findUser, token);
      return {findUser, token};
    } else {
      return { mesage: 'password is incorrect' };
    }
  }


}


module.exports = AuthService;
