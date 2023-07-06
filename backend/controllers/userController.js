import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

// @desc    Register a new User
// @route   POST /api/users/
// @access  PUBLIC
const registerUser = async (req, res) => {
  const { name, email, password, phone, isAdmin } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.json(400);
      throw new Error(`User ${name} already exists`);
    }

    const user = User.create({ name, email, password, phone, isAdmin });
    if (user) {
      res.status(200).json({ user, token: generateToken(user._id) });
    }
  } catch (error) {
    throw new Error(`User Registration Failed: ${error}`);
  }
};

export { registerUser };
