const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  contact: String,
  mode: String // Online / Offline
});

module.exports = mongoose.model("Therapist", therapistSchema);
