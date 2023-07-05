import { Router } from "express";
import { createBlog, getAllBlogs } from "../controllers/blogController.js";

const router = Router();

router.route("/").get(getAllBlogs).post(createBlog);

export default router;
