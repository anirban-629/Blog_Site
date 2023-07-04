import mongoose from "mongoose";
import asynchandler from "express-async-handler";

export const connectDB = asynchandler(async () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Database Connected Successfully"))
    .catch((e) => console.error(e));
});
