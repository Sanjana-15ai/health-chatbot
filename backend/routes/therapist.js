const express = require("express");
const Therapist = require("../models/Therapist");

const router = express.Router();

router.get("/", async (req, res) => {
  const { issue, city } = req.query;

  const therapists = await Therapist.find({
    specialization: issue,
    location: city
  });

  res.json(therapists);
});

module.exports = router;
