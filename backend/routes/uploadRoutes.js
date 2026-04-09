const express = require("express");
const multer = require("multer");
const { uploadResume } = require("../controllers/uploadController");

const router = express.Router();

// ✅ MUST use memory storage
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post("/", upload.single("file"), uploadResume);

module.exports = router;