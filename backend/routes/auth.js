import express from "express";
import User from "../models/User.js"; // Always include .js extension
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ success: true, message: "User created!" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    // Return userId so the frontend can store it for Silent Alerts
    res.json({ success: true, userId: user._id, token: "dummy-token" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

export default router;