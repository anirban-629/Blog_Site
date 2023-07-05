import Blog from "../models/blogModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create a new blog
// @route   POST /api/blogs/
// @access  PUBLIC
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, author } = req.body;
  const blog = await Blog.create({ title, content, author });

  if (blog) {
    res.send(blog);
  } else {
    throw new Error("Blog is not Created");
  }
});

// @desc    Get all blogs
// @route   GET /api/blogs/
// @access  PUBLIC
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});

  if (blogs) {
    if (blogs.length > 0) {
      res.send(blogs);
    } else {
      throw new Error("No Blogs found");
    }
  } else {
    throw new Error("Some Error Occured");
  }
});

export { createBlog, getAllBlogs };
