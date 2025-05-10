const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinary");
const Blog = require("../models/blogs");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "icape/blogs",
    allowed_formats: ["jpg", "jpeg", "png"],
    resource_type: "image",
    type: "upload",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, JPEG, and PNG files are allowed"), false);
    }
  },
});

// Create a new blog post
router.post("/", upload.single("image"), async (req, res) => {
  const {
    title,
    subtitle,
    description,
    content,
    author,
    category,
    tags,
    excerpt,
  } = req.body;
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Image file is required for new posts" });
    }

    const blogData = {
      title,
      subtitle,
      description,
      content,
      author,
      category,
      date: new Date(),
      imageUrl: req.file.path,
      cloudinaryId: req.file.filename.split("/").pop().split(".")[0],
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      excerpt,
    };

    const blog = await Blog.create(blogData);
    res.status(201).json({ message: "Blog post created successfully", blog });
  } catch (error) {
    console.warn("Error creating blog post:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      order: [["date", "DESC"]], // Sort by date descending
    });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get a single blog post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ message: "Blog post not found" });
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Update a blog post
router.put("/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const {
    title,
    subtitle,
    description,
    content,
    author,
    category,
    tags,
    excerpt,
  } = req.body;
  try {
    const blogData = {
      title,
      subtitle,
      description,
      content,
      author,
      category,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      excerpt,
    };

    if (req.file) {
      const oldBlog = await Blog.findByPk(id);
      if (oldBlog && oldBlog.cloudinaryId) {
        await cloudinary.uploader.destroy(oldBlog.cloudinaryId);
      }
      blogData.imageUrl = req.file.path;
      blogData.cloudinaryId = req.file.filename.split("/").pop().split(".")[0];
    }

    const [updated] = await Blog.update(blogData, { where: { id } });
    if (!updated)
      return res.status(404).json({ message: "Blog post not found" });

    const updatedBlog = await Blog.findByPk(id);
    res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ message: "Blog post not found" });

    if (blog.cloudinaryId) {
      await cloudinary.uploader.destroy(blog.cloudinaryId);
    }

    await blog.destroy();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
