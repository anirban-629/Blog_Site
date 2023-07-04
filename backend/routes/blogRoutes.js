import { Router } from "express";
import Blog from "../models/blogModel.js";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("all blogs");
  })
  .post((req, res) => {
    const { title, content, author } = req.body;
    const blog = Blog.create({ title, content, author });
    

    res.send("Working");
  });

export default router;
