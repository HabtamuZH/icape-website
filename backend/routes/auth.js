import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// GET: Fetch all users (for debugging, secure in production)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res.status(404).json({ error: "No users found" });
    }
    const testPassword = "admin123";
    const isMatch = await bcrypt.compare(testPassword, users[1].password);
    console.log("Password matches 'admin123' for first user:", isMatch);

    res.json({
      users: users.map(user => ({
        id: user._id,
        email: user.email,
        password: user.password,
        role: user.role,
      })),
      passwordMatchesTest: isMatch,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST: Register a new user
router.post("/register", async (req, res) => {
  const { email, password, role, googleId } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    if (googleId) {
      const existingGoogleUser = await User.findOne({ googleId });
      if (existingGoogleUser) {
        return res.status(400).json({ error: "Google ID already registered" });
      }
    }

    const user = new User({
      email,
      password, // Will be hashed by pre-save hook
      role: role || "user", // Default to "user" if not provided
      googleId: googleId || null, // Optional, defaults to null
    });

    await user.save();
    const token = user.generateAuthToken();
    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.code === 11000) {
      res.status(400).json({ error: "Duplicate email or Google ID" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// POST: Login a user
router.post("/", async (req, res) => {
  console.log('Login begin');
  const { email, password } = req.body;
  console.log("Requested Data:", req.body);

  try {
    const user = await User.findOne({ email });
    console.log("User:", user);

    if (!user) {
      return res.status(400).json({ error: "Invalid email credentials" });
    }

    const isMatch = await user.matchPassword(password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password credentials" });
    }

    const token = user.generateAuthToken();
    console.log("Token:", token);

    res.status(200).json({ message: "User login successful!", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;