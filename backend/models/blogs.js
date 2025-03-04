// backend/models/blogs.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxLength: 100 },
    subtitle: { type: String, trim: true },
    description: { type: String }, // Optional short description
    content: { type: String, required: true }, // Replaces fullText
    author: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String }, // Optional, handled by Cloudinary
    cloudinaryId: { type: String },
    tags: [{ type: String, trim: true }],
    excerpt: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
