// backend/models/teamMember.js
const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: [true, "Avatar URL is required"],
  },
  cloudinaryId: {
    type: String, // Store Cloudinary public_id for deletion
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [200, "Description cannot exceed 200 characters"],
  },
  socialLinks: [
    {
      platform: {
        type: String,
        required: [true, "Social platform name is required"],
        trim: true,
        enum: ["LinkedIn", "Twitter", "GitHub", "Instagram", "Facebook"],
      },
      url: {
        type: String,
        required: [true, "Social URL is required"],
        trim: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TeamMember", teamMemberSchema);
