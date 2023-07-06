import Blog from "../models/blogModel.js";

// @desc    Create a new blog
// @route   POST /api/blogs/
// @access  PUBLIC
const createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const blog = await Blog.create({ title, content, author });
    res.send(blog);
  } catch (error) {
    throw new Error("Blog is not Created");
  }
};

// @desc    Get all blogs
// @route   GET /api/blogs/
// @access  PUBLIC
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (blogs) {
      if (blogs.length > 0) {
        res.send(blogs);
      } else {
        throw new Error("No Blogs found");
      }
    }
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};

export { createBlog, getAllBlogs };
