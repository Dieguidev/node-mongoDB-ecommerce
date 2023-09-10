import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../db/models/user.model.js';

export default class AuthService {
  constructor() {}

  async login(user) {
    const { email, password } = user;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return { mesage: 'user not found' };
    }

    if (bcrypt.compareSync(password, findUser.password)) {
      const token = jwt.sign(
        {
          id: findUser._id,
          isAdmin: findUser.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h', algorithm: 'HS256' },
      );

      return token;
    } else {
      return { mesage: 'password is incorrect' };
    }
  }
}
