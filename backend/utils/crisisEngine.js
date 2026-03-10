export const isCrisisMessage = (text) => {
  const t = text.toLowerCase();

  const crisisKeywords = [
    "kill myself",
    "commit suicide",
    "i want to die",
    "end my life",
    "self harm",
    "suicide"
  ];

  return crisisKeywords.some(word => t.includes(word));
};
