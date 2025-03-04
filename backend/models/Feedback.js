// backend/models/feedback.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
