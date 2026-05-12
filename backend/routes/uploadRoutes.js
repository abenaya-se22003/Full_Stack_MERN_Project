const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const router = require("./orderRoutes");


require("dotenv").config();

// Configure Cloudinary with credentials from environment variables 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memeory storage

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // function to upload the file buffer to Cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
            } else {
            reject(error);
          }
        });
        // use streamifier to create a readable stream from the file buffer and pipe it to Cloudinary's upload stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
        });
    };

    // call the streamUpload function with the file buffer from multer
    const result = await streamUpload(req.file.buffer);
    // Respond with the URL of the uploaded image
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;