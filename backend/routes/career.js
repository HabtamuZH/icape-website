import express from "express";
import CareerOpportunity from "../models/CareerOpportunity.js";
// import { Server } from "socket.io";

const router = express.Router();

// let io;
// export const initSocket = (server) => {
//   io = new Server(server, { cors: { origin: "*" } });
// };

// Fetch all career opportunities
router.get("/", async (req, res) => {
  try {
    const opportunities = await CareerOpportunity.find();
    res.status(200).json(opportunities);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching opportunities", error: error.message });
  }
});

// Fetch unread career opportunities count (example for future use)
router.get("/unread-count", async (req, res) => {
  try {
    const unreadCount = await CareerOpportunity.countDocuments({
      isRead: false,
    });
    res.status(200).json({ count: unreadCount });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching unread count", error: error.message });
  }
});

// POST: Create a new career opportunity
router.post("/", async (req, res) => {
  try {
    const opportunity = new CareerOpportunity(req.body);
    const savedOpportunity = await opportunity.save();
    if (io) io.emit("new-career", savedOpportunity);
    res.status(201).json(savedOpportunity);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating opportunity", error: error.message });
  }
});

// PATCH: Update a career opportunity
router.patch("/:id", async (req, res) => {
  try {
    const updatedOpportunity = await CareerOpportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOpportunity) {
      return res.status(404).json({ message: "Career opportunity not found" });
    }
    if (io) io.emit("career-updated", updatedOpportunity);
    res.status(200).json(updatedOpportunity);
  } catch (error) {
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
    if (io) io.emit("career-deleted", deletedOpportunity);
    res.status(200).json({ message: "Career opportunity deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting opportunity", error: error.message });
  }
});

export default router;
