import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../controllers/blogController.js";

const router = Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").put(updateBlog).delete(deleteBlog);

export default router;
