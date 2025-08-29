const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- Mongo Connection ----
const MONGO_URI = process.env.MONGO_CONNECTION;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

// ---- Schema & Model ----
// Using a flexible schema since your JSON is nested
const CareerPathSchema = new mongoose.Schema({}, { strict: false });
// Explicitly set collection name = "career_paths"
const CareerPaths = mongoose.model(
  "CareerPaths",
  CareerPathSchema,
  "career_paths"
);

// ---- Routes ----

// Health check
app.get("/api/ping", (_req, res) => res.json({ ok: true }));

// Raw dump for testing
app.get("/api/raw", async (_req, res) => {
  try {
    const docs = await CareerPaths.find({});
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Main filter route
app.post("/api/filter", async (req, res) => {
  try {
    let { interest, marks } = req.body;

    if (!interest)
      return res.status(400).json({ error: "interest is required" });
    if (marks === undefined || marks === null || marks === "") {
      return res.status(400).json({ error: "marks is required" });
    }
    marks = Number(marks);

    // Find the document for this interest (category)
    const doc = await CareerPaths.findOne({ category: interest });
    if (!doc) return res.json([]);

    const suggestions = doc.marks_based_suggestions;
    if (!suggestions) return res.json([]);

    const thresholds = Object.keys(suggestions)
      .map((k) => Number(k))
      .filter((n) => !Number.isNaN(n))
      .sort((a, b) => b - a); // descending order

    const matchedThreshold = thresholds.find((t) => marks >= t);
    if (!matchedThreshold) return res.json([]);

    return res.json(suggestions[String(matchedThreshold)] || []);
  } catch (err) {
    console.error("Filter error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// ---- Server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
