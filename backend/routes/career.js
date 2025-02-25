import express from "express";
import CareerOpportunity from "../models/CareerOpportunity.js";

const router = express.Router();

// Fetch all career opportunities
router.get("/", async (req, res) => {
  try {
    const opportunities = await CareerOpportunity.find().sort({
      createdAt: -1,
    });
    res.status(200).json(opportunities);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Get a single career opportunity by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const opportunity = await CareerOpportunity.findById(id);
    if (!opportunity) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    res.status(200).json(opportunity);
  } catch (error) {
    console.error("Error fetching opportunity:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// POST: Create a new career opportunity
router.post("/", async (req, res) => {
  try {
    const opportunity = new CareerOpportunity(req.body);
    const savedOpportunity = await opportunity.save();
    res.status(201).json(savedOpportunity);
  } catch (error) {
    console.error("Error creating opportunity:", error);
    res
      .status(400)
      .json({ message: "Error creating opportunity", error: error.message });
  }
});

// PATCH: Update a career opportunity
router.put("/:id", async (req, res) => {
  try {
    const updatedOpportunity = await CareerOpportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOpportunity) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    res.status(200).json(updatedOpportunity);
  } catch (error) {
    console.error("Error updating opportunity:", error);
    res
      .status(400)
      .json({ message: "Error updating opportunity", error: error.message });
  }
});

// DELETE: Delete a career opportunity
router.delete("/:id", async (req, res) => {
  try {
    const deletedOpportunity = await CareerOpportunity.findByIdAndDelete(
      req.params.id
    );
    if (!deletedOpportunity) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    res.status(200).json({ message: "Career opportunity deleted" });
  } catch (error) {
    console.error("Error deleting opportunity:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
