import fs from "fs";
import uploader from "../Config/cloudinary.js";

// Upload a single file to Cloudinary
const uploadSingleFile = async (filePath, options = {}) => {
  try {
    const result = await uploader.upload(filePath, {
      public_id: `mern_upload_${Date.now()}`,
      folder: "mern_uploads",
      ...options,
    });

    // Delete temporary file
    fs.unlinkSync(filePath);

    return {
      success: true,
      imageUrl: result.secure_url,
      data: result, // Full Cloudinary response
    };
  } catch (error) {
    // Delete file even if upload fails to avoid clutter
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    throw new Error(`Single file upload failed: ${error.message}`);
  }
};

// Upload multiple files to Cloudinary
const uploadMultipleFiles = async (files, options = {}) => {
  try {
    const uploadPromises = files.map((file) =>
      uploader.upload(file.path, {
        public_id: `mern_upload_${Date.now()}`,
        folder: "mern_uploads",
        ...options, // Override defaults with provided options
      })
    );

    const results = await Promise.all(uploadPromises);

    // Delete temporary files
    files.forEach((file) => fs.unlinkSync(file.path));

    return {
      success: true,
      imageUrls: results.map((result) => result.secure_url),
      data: results, // Full Cloudinary responses
    };
  } catch (error) {
    // Delete files even if upload fails
    files.forEach((file) => {
      if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
    });
    throw new Error(`Multiple file upload failed: ${error.message}`);
  }
};

export { uploadSingleFile, uploadMultipleFiles };
