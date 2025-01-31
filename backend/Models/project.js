import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    image: {
      type: String, // You can store the image URL or path here
      required: true
    }
  },
  {timestamps: true}
)

export default mongoose.model("Project", projectSchema)
