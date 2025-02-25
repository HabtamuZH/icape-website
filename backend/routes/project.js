import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../Config/cloudinary.js";
import Project from "../models/project.js"; // We'll create this model

const router = express.Router();
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "icape/projects",
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

router.post("/", upload.single("imageUrl"), async (req, res) => {
  const { name, role, description, type } = req.body;
  try {
    console.log("Received body:", req.body);
    console.log("Received file:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const projectData = {
      name,
      role,
      description,
      type,
      imageUrl: req.file.path,
      cloudinaryId: req.file.filename.split("/").pop().split(".")[0],
    };

    console.log("Project data to save:", projectData);

    const project = new Project(projectData);
    await project.save();
    res.status(201).json({ message: "Project added successfully", project });
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get a single project by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Update a project with optional image update
router.put("/:id", upload.single("imageUrl"), async (req, res) => {

  console.log("PUT /api/projects/:id called with ID:", req.params.id);
  console.log("Request body:", req.body);
  console.log("Uploaded file:", req.file);

  const { id } = req.params;
  const { name, role, description, type } = req.body;
  try {
    const projectData = { name, role, description, type };

    if (req.file) {
      const oldProject = await Project.findById(id);
      if (oldProject && oldProject.cloudinaryId) {
        await cloudinary.uploader.destroy(oldProject.cloudinaryId);
      }
      projectData.imageUrl = req.file.path;
      projectData.cloudinaryId = req.file.filename.split("/").pop().split(".")[0];
    }

    const project = await Project.findByIdAndUpdate(id, projectData, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found" });
    console.log("Project updated:", project);
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Delete image from Cloudinary if it exists
    if (project.cloudinaryId) {
      await cloudinary.uploader.destroy(project.cloudinaryId);
    }

    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;