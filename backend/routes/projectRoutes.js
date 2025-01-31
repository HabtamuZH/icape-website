import express from "express"
import Project from "../models/Project.js" // Use .js extension for module imports
import mongoose from "mongoose" // Import mongoose for ObjectId validation
const router = express.Router()

// Create a new project
router.post("/", async (req, res) => {
  const {title, description, category, year, image} = req.body
  try {
    const project = new Project({title, description, category, year, image})
    await project.save()
    res.status(201).json({message: "Project added successfully", project})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get a single project by ID
router.get("/:id", async (req, res) => {
  const {id} = req.params

  // Validate the ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({message: "Invalid project ID format"})
  }

  try {
    const project = await Project.findById(id)
    if (!project) return res.status(404).json({message: "Project not found"})
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Update a project
router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {title, description, category, year, image} = req.body

  // Validate the ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({message: "Invalid project ID format"})
  }

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      {title, description, category, year, image},
      {new: true}
    )
    if (!project) return res.status(404).json({message: "Project not found"})
    res.status(200).json({message: "Project updated successfully", project})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Delete a project
router.delete("/:id", async (req, res) => {
  const {id} = req.params

  // Validate the ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({message: "Invalid project ID format"})
  }

  try {
    const project = await Project.findByIdAndDelete(id)
    if (!project) return res.status(404).json({message: "Project not found"})
    res.status(200).json({message: "Project deleted successfully"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router // Use export default for the router module
