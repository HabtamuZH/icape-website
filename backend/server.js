const express = require("express")
require("dotenv").config() // Load environment variables from .env
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Test route
// app.get("/", (req, res) => {
//   res.send("iCAPE Backend is running!")
// })

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
