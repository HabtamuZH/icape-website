import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../Config/cloudinary.js";
import Project from "../models/project.js";

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

// Create a new project with multiple images
router.post("/", upload.array("images", 10), async (req, res) => {
  const { name, role, description, type } = req.body;
  try {
    console.log("Received body:", req.body);
    console.log("Received files:", req.files);

    if (!name || !role || !description || !type) {
      return res.status(400).json({
        message: "All text fields (name, role, description, type) are required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image file is required" });
    }

    const images = req.files.map((file) => ({
      url: file.path,
      cloudinaryId: file.filename.split("/").pop().split(".")[0],
    }));

    const projectData = {
      name,
      role,
      description,
      type,
      images,
    };

    console.log("Project data to save:", projectData);

    const project = new Project(projectData);
    const savedProject = await project.save();
    console.log("Saved project:", savedProject);
    res
      .status(201)
      .json({ message: "Project added successfully", project: savedProject });
  } catch (error) {
    console.error("Full error creating project:", error.stack);
    res.status(500).json({
      message: "Internal server error",
      error: error.message || "Unknown error",
      stack: error.stack,
    });
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

// Update a project with optional multiple image updates
router.put("/:id", upload.array("images", 10), async (req, res) => {
  const { id } = req.params;
  const { name, role, description, type } = req.body;
  try {
    console.log("PUT /api/projects/:id called with ID:", id);
    console.log("Request body:", req.body);
    console.log("Uploaded files:", req.files);

    const projectData = { name, role, description, type };

    if (req.files && req.files.length > 0) {
      const oldProject = await Project.findById(id);
      if (oldProject && oldProject.images && oldProject.images.length > 0) {
        await Promise.all(
          oldProject.images.map((image) =>
            image.cloudinaryId
              ? cloudinary.uploader.destroy(image.cloudinaryId)
              : Promise.resolve()
          )
        );
      }
      projectData.images = req.files.map((file) => ({
        url: file.path,
        cloudinaryId: file.filename.split("/").pop().split(".")[0],
      }));
    }

    const project = await Project.findByIdAndUpdate(id, projectData, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    console.log("Project updated:", project);
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    console.error("Full error updating project:", error.stack);
    res.status(500).json({
      message: "Internal server error",
      error: error.message || "Unknown error",
      stack: error.stack,
    });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    if (project.images && project.images.length > 0) {
      await Promise.all(
        project.images.map((image) =>
          image.cloudinaryId
            ? cloudinary.uploader.destroy(image.cloudinaryId)
            : Promise.resolve()
        )
      );
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
