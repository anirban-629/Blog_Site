import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import blogRoutes from "./routes/blogRoutes.js";

const app = express();

dotenv.config({ path: "../.env" });
connectDB();

const PORT = process.env.PORT || 5000;

// Works like middleware app.use()
app.use(express.json());
app.use("/api/blogs", blogRoutes);


app.get("/", (req, res) => {
  res.json({ msg: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
