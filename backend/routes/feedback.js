const express = require("express");
const Feedback = require("../models/Feedback");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Submit new feedback (public)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = await Feedback.create({ name, email, message });
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// GET: Fetch all feedback (admin only)
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.findAll({
      order: [["date", "DESC"]], // Sort by date descending
    });
    res.status(200).json(feedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

// DELETE: Remove feedback by ID (admin only)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Feedback.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    console.error("Error deleting feedback:", error);
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

// PUT: Mark feedback as read (admin only)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    await Feedback.update({ isRead: true }, { where: { id } });
    const updatedFeedback = await Feedback.findByPk(id);

    res.status(200).json({
      ...updatedFeedback.toJSON(),
      message: "Feedback marked as read",
    });
  } catch (error) {
    console.error("Error marking feedback as read:", error);
    res
      .status(500)
      .json({
        message: "Failed to mark feedback as read",
        error: error.message,
      });
  }
});

module.exports = router;
