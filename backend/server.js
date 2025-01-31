import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js" // Add the ".js" extension

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

// Import routes
import authRoutes from "./routes/authRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"

// Use routes
app.use("/api/auth", authRoutes)
app.use("/api/blogs", blogRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/jobs", jobRoutes)
app.use("/api/projects", projectRoutes)

// Home route
app.get("/", (req, res) => {
  res.send(`iCAPE Backend API is running...`)
})

// Error handling middleware
  // app.use((err, req, res, next) => {
  //   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  //   res.status(statusCode)
  //   res.json({
  //     message: err.message,
  //     stack: process.env.NODE_ENV === "production" ? null : err.stack
  //   })
  // })


// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
