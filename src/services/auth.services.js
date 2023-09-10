import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../db/models/user.model.js";

export default class AuthService {
  constructor() {}

  async login(user) {
    const findUser = await User.findOne({ email: user.email });

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
      return {findUser, token};
    } else {
      return { mesage: 'password is incorrect' };
    }
  }
}



