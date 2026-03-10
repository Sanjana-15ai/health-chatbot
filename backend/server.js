import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 

// 1. Import Routes (Matching your actual folder structure)
import authRoutes from "./routes/auth.js";
import crisisRoutes from "./routes/crisis.js"; 
import gardenRoutes from "./routes/garden.js"; // Matches garden.js in your sidebar
import gardenHistoryRoutes from "./routes/gardenHistory.js"; // Matches gardenHistory.js
import emergencyRoutes from "./routes/emergency.js"; // Matches emergency.js

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. API Endpoints
app.use("/api/auth", authRoutes);
app.use("/api/crisis", crisisRoutes); 
app.use("/api/garden", gardenRoutes);
app.use("/api/garden-history", gardenHistoryRoutes);
app.use("/api/emergency-contacts", emergencyRoutes);

// NOTE: chat and mood routes are removed because the files don't exist in your routes folder yet.

// 4. Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ 
    success: false, 
    message: "Internal Server Error - Check route naming or DB connection." 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🆘 Crisis Alert System: http://localhost:${PORT}/api/crisis/crisis-alert`);
});