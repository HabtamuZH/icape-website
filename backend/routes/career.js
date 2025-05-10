const express = require("express");
const CareerOpportunity = require("../models/CareerOpportunity");

const router = express.Router();

// Fetch all career opportunities
router.get("/", async (req, res) => {
  try {
    const opportunities = await CareerOpportunity.findAll({
      order: [["createdAt", "DESC"]], // Sort by createdAt descending
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
    const opportunity = await CareerOpportunity.findByPk(id);
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
    const opportunity = await CareerOpportunity.create(req.body);
    res.status(201).json(opportunity);
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
    const [updated] = await CareerOpportunity.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    const updatedOpportunity = await CareerOpportunity.findByPk(req.params.id);
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
    const opportunity = await CareerOpportunity.findByPk(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    await opportunity.destroy();
    res.status(200).json({ message: "Career opportunity deleted" });
  } catch (error) {
    console.error("Error deleting opportunity:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
