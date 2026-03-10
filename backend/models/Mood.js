import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  happy: { 
    type: Number, 
    min: 0, 
    max: 1, 
    required: true 
  }, // 0.1 to 1.0 scale
  sentiment: String, // e.g., "Positive", "Neutral", "Crisis"
  language: { type: String, default: "en" }, // Language used during this entry
  createdAt: { type: Date, default: Date.now }
});

const Mood = mongoose.model("Mood", moodSchema);
export default Mood;