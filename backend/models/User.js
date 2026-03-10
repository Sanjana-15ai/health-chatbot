import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  alternativeNumber: { type: String, required: true }, // Twilio alert

  // 🌐 Language Preference
  preferredLanguage: {
    type: String,
    enum: ["en", "te", "hi"],
    default: "en"
  },

  // 🧠 Primary mental health concern
  primaryConcern: {
    type: String,
    default: "General"
  },

  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
export default User;
