import express from "express"; // Changed from require
import Mood from "../models/Mood.js"; // Added .js extension and changed to import

const router = express.Router();

router.get("/weekly-stats", async (req, res) => {
  try {
    const history = [];
    const today = new Date();

    // Loop through the last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + 1);

      // Find all mood entries for this specific day
      const entries = await Mood.find({
        createdAt: { $gte: date, $lt: nextDate }
      });

      if (entries.length > 0) {
        // Calculate the average happy score (assuming 0-1 scale)
        const avg = entries.reduce((sum, e) => sum + (e.happy || 0), 0) / entries.length;
        history.push(Math.round(avg * 100)); // Convert to 0-100 for the chart
      } else {
        history.push(50); // Default to neutral if no data for that day
      }
    }

    res.json({ success: true, history });
  } catch (error) {
    console.error("Error calculating stats:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;