import multer from "multer";
import path from "path";

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Temporary folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// Optional: File filter to restrict file types (e.g., images only)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Only images (JPEG, PNG, GIF) are allowed"), false); // Reject file
  }
};

// Export reusable Multer instance
const upload = multer({
  storage,
  fileFilter, // Optional: Uncomment to enable file type filtering
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: Limit file size to 5MB
});

export default upload;
