import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js"; // Ensure correct case
import User from "./models/User.js";
import auth from "./routes/auth.js";
import blog from "./routes/blog.js";
import feedback from "./routes/feedback.js";
import job from "./routes/job.js";
import project from "./routes/project.js";
import career from "./routes/career.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Use routes
app.use("/api/auth", auth);
app.use("/api/blogs", blog);
app.use("/api/feedbacks", feedback);
app.use("/api/jobs", job);
app.use("/api/projects", project);
app.use("/api/careers", career);

// Home route
app.get("/", (req, res) => {
  res.send(`iCAPE Backend API is running...`);
});

// In server.js
const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "admin1@gmail.com" });
    if (!existingAdmin) {
      const admin = new User({
        email: "admin1@gmail.com",
        password: "admin123", // Will be hashed by pre-save hook
        role: "admin",
      });
      await admin.save();
      console.log("Admin created successfully");
    } else {
      console.log("Admin already exists");
    }
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};
// createAdmin();
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});