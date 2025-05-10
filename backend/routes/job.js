const express = require("express");
const Job = require("../models/job");

const router = express.Router();

// Create a new job listing
router.post("/", async (req, res) => {
  const { title, description, location } = req.body;
  try {
    const job = await Job.create({ title, description, location });
    res.status(201).json({ message: "Job listing added successfully", job });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get all job listings
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get a single job by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findByPk(id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: error.message });
  }
});

// Update a job listing
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, location } = req.body;
  try {
    const [updated] = await Job.update(
      { title, description, location },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ message: "Job not found" });
    }
    const updatedJob = await Job.findByPk(id);
    res
      .status(200)
      .json({ message: "Job updated successfully", job: updatedJob });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a job listing
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Job.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
