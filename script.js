const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// Set up file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Parse JSON bodies
app.use(express.json());

// Endpoint to handle file upload
app.post("/upload", upload.single("attachment"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.json({
    filePath: `/uploads/${req.file.filename}`,
    fileName: req.file.originalname,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
