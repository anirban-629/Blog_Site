import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
