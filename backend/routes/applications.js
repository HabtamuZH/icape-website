import express from "express"
import multer from "multer"
import Application from "../models/Application.js"

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
})
const upload = multer({storage})

router.post("/applications", upload.single("cv"), async (req, res) => {
  try {
    const applicationData = {
      ...req.body,
      cv: req.file ? req.file.path : null
    }
    const application = new Application(applicationData)
    const savedApplication = await application.save()
    res.status(201).json(savedApplication)
  } catch (error) {
    console.error("Error submitting application:", error) // Log detailed error
    res
      .status(400)
      .json({message: "Error submitting application", error: error.message})
  }
})

export default router
