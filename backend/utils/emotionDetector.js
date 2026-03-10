const detectEmotion = (message) => {
  const msg = message.toLowerCase();

  if (msg.includes("sad") || msg.includes("depressed"))
    return "depression";

  if (msg.includes("anxious") || msg.includes("worried"))
    return "anxiety";

  if (msg.includes("stress") || msg.includes("pressure"))
    return "stress";

  if (msg.includes("suicide") || msg.includes("hopeless"))
    return "crisis";

  return "general";
};

module.exports = detectEmotion;
