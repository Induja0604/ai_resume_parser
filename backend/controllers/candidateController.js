const Candidate = require("../models/Candidate");

exports.createCandidate = async (req, res) => {
  const candidate = await Candidate.create(req.body);
  res.json(candidate);
};

exports.getCandidates = async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
};