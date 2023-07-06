import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("Database Connected Successfully"));
  } catch (error) {
    console.log(error);
  }
};
