import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    fullText: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    cloudinaryId: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
