const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinary");
const CareerApplication = require("../models/CareerApplication");
const InternshipApplication = require("../models/InternshipApplication");
const { Op } = require("sequelize");

const router = express.Router();

// Ensure Cloudinary is correctly initialized
if (!cloudinary.uploader || !cloudinary.api) {
  console.error("Cloudinary is not properly configured. Check your API keys.");
  process.exit(1);
}

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "icape/applications",
    allowed_formats: ["pdf"],
    resource_type: "auto",
    type: "upload",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// GET: Fetch all applications
router.get("/", async (req, res) => {
  try {
    const careerApplications = await CareerApplication.findAll();
    const internshipApplications = await InternshipApplication.findAll();

    const allApplications = [
      ...careerApplications,
      ...internshipApplications,
    ].sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

    res.status(200).json(allApplications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// GET: Monthly applicant stats
router.get("/monthly", async (req, res) => {
  try {
    const careerApplications = await CareerApplication.findAll({
      order: [["submittedAt", "ASC"]],
    });
    const internshipApplications = await InternshipApplication.findAll({
      order: [["submittedAt", "ASC"]],
    });

    const applications = [...careerApplications, ...internshipApplications];

    const monthlyCounts = applications.reduce((acc, app) => {
      const date = new Date(app.submittedAt);
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      const key = `${month}-${year}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const result = Object.entries(monthlyCounts).map(([key, count]) => ({
      month: key, // e.g., "Jan-2025"
      applicants: count,
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching monthly applicant data:", error);
    res
      .status(500)
      .json({ message: "Error fetching monthly data", error: error.message });
  }
});

// POST: Submit a new application
router.post("/", upload.single("cv"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const { opportunityType, ...rest } = req.body;
    const applicationData = { ...rest, cv: req.file.path };

    let application;

    switch (opportunityType) {
      case "Professional Career Opportunities":
        application = await CareerApplication.create(applicationData);
        break;
      case "Internship Program 2025":
        application = await InternshipApplication.create(applicationData);
        break;
      default:
        return res.status(400).json({ message: "Invalid opportunity type" });
    }

    res.status(201).json(application);
  } catch (error) {
    console.error("Error submitting application:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// PUT: Mark application as read
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let application = await CareerApplication.findByPk(id);
    let model = CareerApplication;

    if (!application) {
      application = await InternshipApplication.findByPk(id);
      model = InternshipApplication;
    }

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    await model.update({ isRead: true }, { where: { id } });
    const updatedApplication = await model.findByPk(id);

    res.status(200).json({
      ...updatedApplication.toJSON(),
      message: "Application marked as read",
    });
  } catch (error) {
    console.error("Error marking application as read:", error);
    res
      .status(500)
      .json({
        message: "Failed to mark Application as read",
        error: error.message,
      });
  }
});

module.exports = router;
