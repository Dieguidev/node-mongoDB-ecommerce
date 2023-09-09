

const AuthService = require('../services/auth.service');
const authService = new AuthService();


const login = async (req, res) => {
  try {
    const rpta = await authService.login(req.body)
    res.status(200).json(rpta);
  } catch (error) {
    res.status(400).json(error.message);
  }
}




module.exports = {login}
