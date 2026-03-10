const translations = {
  en: {
    welcome: "How are you feeling today?",
    crisis: "You are not alone. Help is available."
  },
  te: {
    welcome: "ఈ రోజు మీరు ఎలా అనిపిస్తోంది?",
    crisis: "మీరు ఒంటరిగా లేరు. సహాయం అందుబాటులో ఉంది."
  },
  hi: {
    welcome: "आज आप कैसा महसूस कर रहे हैं?",
    crisis: "आप अकेले नहीं हैं। सहायता उपलब्ध है।"
  }
};

const getText = (key, lang = "en") => {
  return translations[lang]?.[key] || translations.en[key];
};

module.exports = getText;
