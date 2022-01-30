export function localLocale(language) {
  if (language == "en") return "english";
  else if (language == "chs") return "chinese-simplified";
  else if (language == "cht") return "chinese-traditional";
  else if (language == "fr") return "french";
  else if (language == "de") return "german";
  else if (language == "id") return "indonesian";
  else if (language == "ja") return "japanese";
  else if (language == "ko") return "korean";
  else if (language == "pt") return "portuguese";
  else if (language == "ru") return "russian";
  else if (language == "es") return "spanish";
  else if (language == "th") return "thai";
  else return "vietnamese";
}
