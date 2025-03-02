import { Schema, model } from "mongoose";

const feedbackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Feedback = model("Feedback", feedbackSchema);

export default Feedback; // Fixed typo (removed "|")