import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../Models/user.js"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.get("/", async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// Register a new user
router.post("/register", async (req, res) => {
  const {username, email, password, role} = req.body
  const defaultRole = "client"
  const userRole = role || defaultRole // Use the provided role or set 'client' as default.
  try {
    console.log("Received registration request:", req.body) // Log the received data

    const existingUser = await User.findOne({email})
    if (existingUser) {
      return res.status(400).json({message: "Email already registered"})
    }

    //  Hash password before saving
    // const salt = await bcrypt.genSalt(8)
    // const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      username,
      email,
      password,
      role: userRole
    })
    console.log("User object before saving:", user) // Log the user object
    await user.save()
    res.status(201).json({message: "User registered successfully!"})
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation error
      const errors = Object.values(error.errors).map((err) => err.message)
      console.error("Mongoose Validation Error:", errors) // Log the validation errors
      res.status(400).json({message: "Validation failed", errors})
    } else {
      console.error("Registration error:", error) // Log full error for debugging
      res.status(500).json({error: error.message})
    }
  }
})

// Login Route (authRoutes.js)
router.post("/login", async (req, res) => {
  const {email, password} = req.body
  console.log("Requested Data:", req.body)

  try {
    const user = await User.findOne({email})
    console.log("User:", user)

    if (!user) {
      return res.status(400).json({message: "Invalid email credentials"})
    }

    const isMatch = await user.isPasswordMatch(password)
    console.log("Password Match:", isMatch)

    if (!isMatch) {
      return res.status(400).json({message: "Invalid password credentials"})
    }

    // Generate token using the model method
    const token = user.generateAuthToken()
    console.log("Token: ",token)

    res.status(200).json({message: "User login successful!", token})
  } catch (error) {
    console.error("Login Error:", error)
    res.status(500).json({error: error.message})
  }
})

export default router
