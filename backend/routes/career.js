import express from "express";
import CareerOpportunity from "../models/CareerOpportunity.js"; // Add .js extension for ES modules

const router = express.Router();

// POST: Create a new career opportunity
router.post("/", async (req, res) => {
  try {
    const opportunity = new CareerOpportunity(req.body);
    const savedOpportunity = await opportunity.save();
    res.status(201).json(savedOpportunity);
  } catch (error) {
    res.status(400).json({ message: "Error creating opportunity", error: error.message });
  }
});

// GET: Fetch all active career opportunities
router.get("/", async (req, res) => {
  try {
    const opportunities = await CareerOpportunity.find({ isActive: true });
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching opportunities", error: error.message });
  }
});

export default router;