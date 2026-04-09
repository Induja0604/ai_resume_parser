const express = require("express");
const { matchCandidate } = require("../controllers/matchController");

const router = express.Router();
router.post("/", matchCandidate);

module.exports = router;