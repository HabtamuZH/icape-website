import {Schema, model} from "mongoose"

const careerOpportunitySchema = new Schema({
  title: {
    type: String,
    required: [true, "Opportunity title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [1000, "Description cannot exceed 1000 characters"]
  },
  type: {
    type: String,
    required: [true, "Opportunity type is required"],
    enum: {
      values: [
        "Full-time & Part-time Positions",
        "Paid Internship (Summer/Fall 2025)",
        "Contract"
      ],
      message: "Invalid opportunity type"
    }
  },
  details: {
    type: [String],
    required: [true, "At least one detail is required"],
    validate: {
      validator: (arr) => arr.length > 0,
      message: "Details array cannot be empty"
    },
    default: []
  },
  buttonText: {
    type: String,
    required: [true, "Button text is required"],
    trim: true,
    maxlength: [50, "Button text cannot exceed 50 characters"]
  },
  buttonLink: {
    type: String,
    // required: [true, "Button link is required"],
    // trim: true,
    // match: [/^\/[a-zA-Z0-9\-\/]*$/, "Button link must be a valid URL path"],
    default:""
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

// Middleware to update `updatedAt` before saving
careerOpportunitySchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

// Index for efficient searching by title and type
careerOpportunitySchema.index({title: 1, type: 1})

const CareerOpportunity = model("CareerOpportunity", careerOpportunitySchema)

export default CareerOpportunity
