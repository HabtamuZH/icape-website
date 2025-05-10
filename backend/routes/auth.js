const express = require("express");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// POST: Login a user
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "Invalid email credentials" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password credentials" });
    }

    const token = user.generateAuthToken();
    res.status(200).json({ message: "User login successful!", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST: Logout user
router.post("/logout", async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "User logged out successfully!", token: null });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all users (for debugging, secure in production)
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      return res.status(404).json({ error: "No users found" });
    }

    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST: Register a new user
router.post("/register", async (req, res) => {
  const { email, password, role, googleId } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    if (googleId) {
      const existingGoogleUser = await User.findOne({ where: { googleId } });
      if (existingGoogleUser) {
        return res.status(400).json({ error: "Google ID already registered" });
      }
    }

    const user = await User.create({
      email,
      password, // Will be hashed by beforeCreate hook
      role: role || "user",
      googleId: googleId || null,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "Duplicate email or Google ID" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
