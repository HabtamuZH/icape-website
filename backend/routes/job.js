import express from "express"
import Job from "../models/job.js"
const router = express.Router()

// Create a new job listing
router.post("/", async (req, res) => {
  const {title, description, location} = req.body
  try {
    const job = new Job({title, description, location})
    await job.save()
    res.status(201).json({message: "Job listing added successfully", job})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get all job listings
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find()
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get a single job by ID
router.get("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const job = await Job.findById(id)
    if (!job) return res.status(404).json({message: "Job not found"})
    res.status(200).json(job)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Update a job listing
router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {title, description, location} = req.body
  try {
    const job = await Job.findByIdAndUpdate(
      id,
      {title, description, location},
      {new: true}
    )
    if (!job) return res.status(404).json({message: "Job not found"})
    res.status(200).json({message: "Job updated successfully", job})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Delete a job listing
router.delete("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const job = await Job.findByIdAndDelete(id)
    if (!job) return res.status(404).json({message: "Job not found"})
    res.status(200).json({message: "Job deleted successfully"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router // Export router using ES module syntax
