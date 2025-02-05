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

// Login a user
router.post("/login", async (req, res) => {
  const {email, password} = req.body
  console.log("Requested Data:", req.body)

  try {
    const user = await User.findOne({email})
    console.log("User:", user)

    if (!user) {
      return res.status(400).json({message: "Invalid email credentials"})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log("Password Match:", isMatch)

    if (!isMatch) {
      return res.status(400).json({message: "Invalid password credentials"})
    }

    // Generate token using the model method
    const token = user.generateAuthToken()
    console.log("Token: ", token)

    res.status(200).json({message: "User login successful!", token})
  } catch (error) {
    console.error("Login Error:", error)
    res.status(500).json({error: error.message})
  }
})

// Google Sign-In
router.post("/google", async (req, res) => {
  const {email, googleId} = req.body
  try {
    let user = await User.findOne({googleId})

    if (!user) {
      // If no user found with the googleId, create a new user
      user = new User({
        email,
        googleId,
        // You can set a default username or prompt the user to set one later
        username: email.split("@")[0] // Or generate a random one
      })
      await user.save()
    }
    const token = user.generateAuthToken()
    res.status(200).json({message: "Google login successful!", token})
  } catch (error) {
    console.error("Google login error:", error)
    res.status(500).json({error: error.message})
  }
})

export default router
