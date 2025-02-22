import { Router } from "express";
import Feedback from "../models/Feedback.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

// POST: Submit new feedback (public)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// GET: Fetch all feedback (admin only)   authMiddleware,
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ date: -1 });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

// DELETE: Remove feedback by ID (admin only)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

export default router;