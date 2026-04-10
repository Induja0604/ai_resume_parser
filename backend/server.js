require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "https://vercel.com/narnavaram-indujas-projects/ai-resume-parser"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));


app.use(express.json());

// Routes
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/candidates", require("./routes/candidateRoutes"));
app.use("/jobs", require("./routes/jobRoutes"));
app.use("/match", require("./routes/matchRoutes"));

// Health check
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);