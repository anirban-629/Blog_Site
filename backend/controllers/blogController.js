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
    if (blogs.length > 0) {
      res.send(blogs);
    } else {
      throw new Error("No Blogs found");
    }
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  PUBLIC
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.title = req.body.title || blog.title;
      blog.content = req.body.content || blog.content;
      blog.author = req.body.author || blog.author;

      const updatedBlog = await blog.save();
      res.status(200).send(updatedBlog);
    }
  } catch (error) {
    throw new Error("Blog not found");
  }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  PUBLIC
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      await blog.deleteOne();
      res.status(200).json({ message: "Blog deleted successfully" });
    }
  } catch (error) {
    throw new Error("Blog not found");
  }
};

export { createBlog, getAllBlogs, updateBlog, deleteBlog };
