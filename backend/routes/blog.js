import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../Config/cloudinary.js";
import Blog from "../models/blogs.js";

const router = express.Router();

// Configure Multer with Cloudinary storage for blog images
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
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, JPEG, and PNG files are allowed"), false);
    }
  },
});

// Create a new blog post with a required image
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, fullText, author, category } = req.body;
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const blogData = {
      title,
      description,
      fullText,
      author,
      category,
      imageUrl: req.file.path, // Cloudinary URL
      cloudinaryId: req.file.filename.split("/").pop().split(".")[0], // Extract public_id
    };

    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json({ message: "Blog post added successfully", blog });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get a single blog post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog post not found" });
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Update a blog post with optional image update
router.put("/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, description, fullText, author, category } = req.body;
  try {
    const blogData = { title, description, fullText, author, category };

    if (req.file) {
      // Delete old image from Cloudinary if it exists
      const oldBlog = await Blog.findById(id);
      if (oldBlog && oldBlog.cloudinaryId) {
        await cloudinary.uploader.destroy(oldBlog.cloudinaryId);
      }
      blogData.imageUrl = req.file.path;
      blogData.cloudinaryId = req.file.filename.split("/").pop().split(".")[0];
    }

    const blog = await Blog.findByIdAndUpdate(id, blogData, { new: true });
    if (!blog) return res.status(404).json({ message: "Blog post not found" });
    res.status(200).json({ message: "Blog updated successfully", blog });
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
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog post not found" });

    // Delete image from Cloudinary if it exists
    if (blog.cloudinaryId) {
      await cloudinary.uploader.destroy(blog.cloudinaryId);
    }

    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
