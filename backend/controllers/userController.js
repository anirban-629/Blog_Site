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

    const user = await User.create({ name, email, password, phone, isAdmin });

    if (user) {
      res.status(200).json({ user, token: generateToken(user._id) });
    }
  } catch (error) {
    throw new Error(`User Registration Failed: ${error}`);
  }
};

// @desc    Login a  User
// @route   POST /api/users/login
// @access  PUBLIC
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (await user.comparePassword(password)) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        throw new Error("Invalid Password");
      }
    } else {
      throw new Error("No user found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export { registerUser, loginUser };
