const bcrypt = require('bcrypt');

class UserService {
  constructor() {}

  async createUser(newUser) {
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const saveUser = await newUser.save();
    return saveUser;
  }
}

module.exports = UserService;
