import AuthService from '../services/auth.services.js';
const authService = new AuthService();

export const login = async (req, res) => {
  try {
    const rpta = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', token: rpta });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
