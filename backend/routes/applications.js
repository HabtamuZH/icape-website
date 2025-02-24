import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../Config/cloudinary.js";
import CareerApplication from "../models/CareerApplication.js";
import InternshipApplication from "../models/InternshipApplication.js";

const router = express.Router();

// Ensure cloudinary is correctly initialized
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

// const upload = multer({
//   storage: storage,
//   limits: {fileSize: 5 * 1024 * 1024}, // 5MB limit
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "application/pdf") {
//       cb(null, true)
//     } else {
//       cb(new Error("Only PDF files are allowed"), false)
//     }
//   }
// })

const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const careerApplications = await CareerApplication.find();
    const internshipApplications = await InternshipApplication.find();

    const allApplications = [...careerApplications, ...internshipApplications];

    res.status(200).json(allApplications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// POST: Handle Career and Internship Applications
router.post("/", upload.single("cv"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    console.log("Request Body:", req.body);

    const { opportunityType, ...rest } = req.body;
    const applicationData = { ...rest, cv: req.file.path };
    console.log("Application Data:", req.file);

    let application;

    switch (opportunityType) {
      case "Professional Career Opportunities":
        application = new CareerApplication(applicationData);
        break;
      case "Internship Program 2025":
        application = new InternshipApplication(applicationData);
        break;
      default:
        return res.status(400).json({ message: "Invalid opportunity type" });
    }

    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    console.error("Error submitting application:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const id = req.params.id;
    const careerApplication =
      (await CareerApplication.findById(id)) ||
      (await InternshipApplication.findById(id));

    careerApplication.isRead = true;
    await careerApplication.save();
    res.status(200).send({
      ...careerApplication,
      message: "Application marked as read",
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Failed to mark Application as read" });
  }
});

export default router;
