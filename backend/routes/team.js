import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../Config/cloudinary.js";
import TeamMember from "../models/TeamMember.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "icape/team",
    allowed_formats: ["jpg", "jpeg", "png"],
    resource_type: "image",
    type: "upload",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage,
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

// CREATE: Add a new team member with image (Admin only)authMiddleware,
router.post("/",  upload.single("avatar"), async (req, res) => {
  try {
    const { name, title, desc, socialLinks } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Avatar image is required" });
    }

    const teamMember = new TeamMember({
      avatar: req.file.path, // Cloudinary URL
      cloudinaryId: req.file.filename.split("/").pop().split(".")[0], // Extract public_id
      name,
      title,
      desc,
      socialLinks: JSON.parse(socialLinks), // Parse JSON string from FormData
    });
    await teamMember.save();
    res
      .status(201)
      .json({ message: "Team member added successfully", teamMember });
  } catch (error) {
    console.error("Error creating team member:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// READ: Get all team members (Public)
router.get("/", async (req, res) => {
  try {
    const teamMembers = await TeamMember.find().sort({ createdAt: -1 });
    res.status(200).json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// READ: Get a single team member by ID (Public)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teamMember = await TeamMember.findById(id);
    if (!teamMember)
      return res.status(404).json({ message: "Team member not found" });
    res.status(200).json(teamMember);
  } catch (error) {
    console.error("Error fetching team member:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// UPDATE: Update a team member with optional image (Admin only)
router.put(
  "/:id",
//   authMiddleware,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, title, desc, socialLinks } = req.body;
      const updates = {
        name,
        title,
        desc,
        socialLinks: JSON.parse(socialLinks),
      };

      if (req.file) {
        const oldTeamMember = await TeamMember.findById(id);
        if (oldTeamMember && oldTeamMember.cloudinaryId) {
          await cloudinary.uploader.destroy(oldTeamMember.cloudinaryId);
        }
        updates.avatar = req.file.path;
        updates.cloudinaryId = req.file.filename.split("/").pop().split(".")[0];
      }

      const teamMember = await TeamMember.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!teamMember)
        return res.status(404).json({ message: "Team member not found" });
      res
        .status(200)
        .json({ message: "Team member updated successfully", teamMember });
    } catch (error) {
      console.error("Error updating team member:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
);

// DELETE: Remove a team member (Admin only) authMiddleware,
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teamMember = await TeamMember.findById(id);
    if (!teamMember)
      return res.status(404).json({ message: "Team member not found" });
    if (teamMember.cloudinaryId) {
      await cloudinary.uploader.destroy(teamMember.cloudinaryId);
    }
    await TeamMember.findByIdAndDelete(id);
    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
