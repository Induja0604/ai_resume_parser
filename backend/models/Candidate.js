const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: [String],
  experience: Number,
  education: String,
  company: String,
  resumeUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Candidate", CandidateSchema);