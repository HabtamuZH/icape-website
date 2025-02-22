import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    maxlength: [100, "Full name cannot exceed 100 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"]
  },
  opportunityType: {
    type: String,
    required: [true, "Opportunity type is required"],
    enum: ["Professional Career Opportunities", "Internship Program 2025"]
  },
  department: {
    type: String,
    required: [
      function () {
        return this.opportunityType === "Professional Career Opportunities"
      },
      "Department is required for career opportunities"
    ],
    enum: ["Engineering", "Product Development", "Business Operations", ""], // "" allows it to be optional for internships
    default: ""
  },
  studentStatus: {
    type: String,
    required: [
      function () {
        return this.opportunityType === "Internship Program 2025"
      },
      "Student status is required for internship applications"
    ],
    enum: ["Current Student", "Recent Graduate", ""], // "" allows it to be optional for careers
    default: ""
  },
  reason: {
    type: String,
    required: [true, "Reason for applying is required"],
    trim: true,
    maxlength: [1000, "Reason cannot exceed 1000 characters"]
  },
  skills: {
    type: String,
    required: [true, "Skills are required"],
    trim: true,
    maxlength: [1000, "Skills cannot exceed 1000 characters"]
  },
  availability: {
    type: String,
    required: [true, "Availability is required"],
    enum: ["Full-time", "Part-time", "Summer 2025", "Fall 2025"]
  },
  cv: {
    type: String, // Store file path or URL after upload
    required: [true, "CV is required"]
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
})

applicationSchema.index({email: 1, opportunityType: 1, submittedAt: -1})

const Application = mongoose.model("Application", applicationSchema)

export default Application
