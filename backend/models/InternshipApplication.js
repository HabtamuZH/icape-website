// backend/models/internshipApplication.js
const mongoose = require("mongoose");

const internshipApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    maxlength: [100, "Full name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    // match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    // match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"]
  },
  opportunityType: {
    type: String,
    required: [true, "Opportunity type is required"],
    enum: ["Internship Program 2025"],
    default: "Internship Program 2025",
  },
  studentStatus: {
    type: String,
    required: [true, "Student status is required"],
    enum: ["Current Student", "Recent Graduate"],
  },
  reason: {
    type: String,
    required: [true, "Reason for applying is required"],
    trim: true,
    maxlength: [1000, "Reason cannot exceed 1000 characters"],
  },
  skills: {
    type: String,
    required: [true, "Skills are required"],
    trim: true,
    maxlength: [1000, "Skills cannot exceed 1000 characters"],
  },
  availability: {
    type: String,
    required: [true, "Availability is required"],
    enum: ["Summer 2025", "Fall 2025"],
  },
  cv: {
    type: String, // Cloudinary URL
    required: [true, "CV is required"],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

internshipApplicationSchema.index({ email: 1, submittedAt: -1 });

const InternshipApplication = mongoose.model(
  "InternshipApplication",
  internshipApplicationSchema
);

module.exports = InternshipApplication;
