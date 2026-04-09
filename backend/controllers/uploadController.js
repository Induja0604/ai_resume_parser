const parseResume = require("../utils/parser");
const Candidate = require("../models/Candidate");

exports.uploadResume = async (req, res) => {
  try {
    console.log("✅ API HIT");

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("📄 File:", req.file.originalname);

    // ✅ Parse resume
    const parsedData = await parseResume(req.file.buffer);

    console.log("🧠 Parsed:", parsedData);

    // ✅ Save to DB
    const savedCandidate = await Candidate.create(parsedData);

    console.log("💾 Saved to DB");

    // ✅ ALWAYS send response
    res.status(200).json(savedCandidate);

  } catch (err) {
    console.error("❌ ERROR:", err);

    // 🔥 FAIL-SAFE RESPONSE (VERY IMPORTANT)
    res.status(500).json({
      error: "Parsing failed",
      fallback: {
        name: "Fallback User",
        email: "test@gmail.com",
        skills: ["react"]
      }
    });
  }
};