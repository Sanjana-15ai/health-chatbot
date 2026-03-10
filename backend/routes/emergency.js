import express from "express";
import twilio from "twilio";

const router = express.Router();

/* 🔐 Twilio Credentials (from .env) */
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const emergencyNumber = process.env.ALTERNATE_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

/* 🚨 EMERGENCY SMS ROUTE */
router.post("/alert", async (req, res) => {
  try {
    const { reason, time } = req.body;

    // 🔎 Validation
    if (!reason) {
      return res.status(400).json({
        success: false,
        error: "Emergency reason is required"
      });
    }

    // 📩 Emergency Message Format
    const smsBody = `
🚨 EMERGENCY ALERT 🚨

A user has expressed suicidal intent.

🧠 Reason:
${reason}

⏰ Time:
${time || new Date().toISOString()}

⚠️ Please check immediately.
`;

    // 📲 Send SMS
    await client.messages.create({
      body: smsBody,
      from: twilioNumber,
      to: emergencyNumber
    });

    console.log("✅ Emergency SMS sent successfully");

    res.status(200).json({
      success: true,
      message: "Emergency alert sent"
    });

  } catch (error) {
    console.error("❌ Emergency SMS Error:", error.message);

    res.status(500).json({
      success: false,
      error: "Failed to send emergency alert"
    });
  }
});

export default router;
