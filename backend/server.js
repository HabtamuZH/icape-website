// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db");
const User = require("./models/User");
const auth = require("./routes/auth");
const blog = require("./routes/blog");
const feedback = require("./routes/feedback");
const job = require("./routes/job");
const project = require("./routes/project");
const career = require("./routes/career");
const application = require("./routes/applications");
const team = require("./routes/team");
const users = require("./routes/users");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Use routes
app.use("/api/auth", auth);
app.use("/api/blogs", blog);
app.use("/api/feedbacks", feedback);
app.use("/api/jobs", job);
app.use("/api/projects", project);
app.use("/api/careers", career);
app.use("/api/applications", application);
app.use("/api/teams", team);
app.use("/api/users", users);

// Remove duplicate route (optional, kept as single line above)
// app.use('/api/applications', application);

// Home route
app.get("/", (req, res) => {
  res.send(`iCAPE Backend API is running...`);
});

// In server.js
const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "icapeadmin@gmail.com" }); // Fixed email to match creation

    if (existingAdmin) {
      console.log("Admin already exists", existingAdmin);
      return; // Exit if admin exists
    }

    const admin = new User({
      firstName: "icape",
      lastName: "admin",
      phone: "+251912345678",
      email: "icapeadmin@gmail.com",
      password: "admin@123",
      role: "admin",
    });
    await admin.save();
    console.log("Admin created successfully");
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};

// Run admin creation
createAdmin();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
