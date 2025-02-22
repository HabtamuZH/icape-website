import express from "express"
import Blog from "../models/blogs.js"
const router = express.Router()

// Create a new blog post
router.post("/", async (req, res) => {
  const {title, content, author} = req.body
  try {
    const blog = new Blog({title, content, author})
    await blog.save()
    res.status(201).json({message: "Blog post added successfully", blog})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get a single blog post by ID
router.get("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const blog = await Blog.findById(id)
    if (!blog) return res.status(404).json({message: "Blog post not found"})
    res.status(200).json(blog)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Update a blog post
router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {title, content, author} = req.body
  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      {title, content, author},
      {new: true}
    )
    if (!blog) return res.status(404).json({message: "Blog post not found"})
    res.status(200).json({message: "Blog updated successfully", blog})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Delete a blog post
router.delete("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const blog = await Blog.findByIdAndDelete(id)
    if (!blog) return res.status(404).json({message: "Blog post not found"})
    res.status(200).json({message: "Blog deleted successfully"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router // Export router using ES module syntax

// * you can use this code to upload a single file or multiple files

/** 
 * // Route for single file upload
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await uploadSingleFile(req.file.path);

    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: result.imageUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for multiple file uploads
app.post("/upload-multiple", upload.array("images", 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const result = await uploadMultipleFiles(req.files);

    res.status(200).json({
      message: "Images uploaded successfully",
      imageUrls: result.imageUrls,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 */