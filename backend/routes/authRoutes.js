import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../Models/user.js"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

// Register a new user
router.post("/register", async (req, res) => {
  const {firstName, lastName, email, password, role} = req.body
  try {
    const user = new User({firstName,lastName, email, password, role})
    await user.save()
    res.status(201).json({message: "User registered successfully!"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Login
router.post("/login", async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email})
    if (!user) return res.status(400).json({message: "Invalid credentials"})

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({message: "Invalid credentials"})

    const token = jwt.sign(
      {userId: user._id, role: user.role},
      process.env.JWT_SECRET,
      {expiresIn: "24h"}
    )
    res.json({
      token,
      user: {name: user.name, email: user.email, role: user.role}
    })
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router
