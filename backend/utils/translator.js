const messages = {
  en: {
    crisis: "You are not alone. Help is available.",
    support: "I'm here with you. Please tell me more."
  },
  te: {
    crisis: "మీరు ఒంటరిగా లేరు. సహాయం అందుబాటులో ఉంది.",
    support: "నేను మీతోనే ఉన్నాను. దయచేసి మరింత చెప్పండి."
  },
  hi: {
    crisis: "आप अकेले नहीं हैं। सहायता उपलब्ध है।",
    support: "मैं आपके साथ हूँ। कृपया और बताइए।"
  }
};

export const t = (lang = "en", key) => {
  return messages[lang]?.[key] || messages.en[key];
};
