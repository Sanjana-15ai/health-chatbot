import express from "express";
import User from "../models/User.js";
import twilio from "twilio";
import { t } from "../utils/translator.js";

const router = express.Router();
const client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.post("/crisis-alert", async (req, res) => {
  const { userId, message } = req.body;

  try {
    const user = await User.findById(userId);

    if (user && user.alternativeNumber) {
      await client.messages.create({
        body: `🆘 MINDCARE ALERT\nUser: ${user.name}\nMessage: "${message}"`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: user.alternativeNumber
      });
    }

    res.status(200).json({
      success: true,
      localizedMessage: t(user?.preferredLanguage, "crisis")
    });
  } catch (err) {
    console.error("Twilio Error:", err.message);
    res.status(200).json({ success: false });
  }
});

export default router;
