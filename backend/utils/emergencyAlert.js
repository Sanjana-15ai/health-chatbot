import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendEmergencyAlert = async (altNumber, userMessage) => {
  return await client.messages.create({
    body: `🚨 EMERGENCY ALERT 🚨
User may be in crisis.

Message:
"${userMessage}"

Please contact them immediately.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: altNumber
  });
};
