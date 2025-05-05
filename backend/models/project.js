// backend/models/project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      maxlength: [100, "Project name cannot exceed 100 characters"],
    },
    role: {
      type: String,
      required: [true, "Project role is required"],
      trim: true,
      maxlength: [100, "Role cannot exceed 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    }, // Replaces description
    type: {
      type: String,
      required: [true, "Project type is required"],
      enum: ["architecture design", "urban design", "engineering design"],
      lowercase: true,
    },
    images: [
      {
        url: {
          type: String,
          required: [true, "Image URL is required"],
        },
        cloudinaryId: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

projectSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Project", projectSchema);
