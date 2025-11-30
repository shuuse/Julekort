/**
 * Localization system for CardsOverTime
 * Supports English (en) and Norwegian (no)
 */

export const translations = {
  en: {
    // Entry screen
    title: "A little Christmas tradition…",
    subtitle: "Every year, we hide a tiny secret in our Christmas card photos.",
    instruction: "Take a look",

    // Current year back
    currentYearBack: "This year's secret is still hidden.",
    currentYearBridge: "Let's look at previous years…",

    // Card interaction
    tapToZoom: "Tap the photo to reveal",
    continue: "Continue",

    // Navigation
    seeYearBefore: "The year before",
    seeYearAfter: "The year after",
    finish: "Finish",
    home: "Start over",

    // End screen
    endTitle: "May every year be another wonderful secret",
    endMessage: "Thanks for being part of our story!",
    returnToStart: "Return to start"
  },

  no: {
    // Entry screen
    title: "En liten juletradisjon…",
    subtitle: "Hvert år gjemmer vi en liten hemmelighet i julekortbildene våre.",
    instruction: "Ta en titt!",

    // Current year back
    currentYearBack: "Årets hemmelighet er fortsatt skjult.",
    currentYearBridge: "La oss se på tidligere år…",

    // Card interaction
    tapToZoom: "Trykk på bildet for å avsløre",
    continue: "Fortsett",

    // Navigation
    seeYearBefore: "Året før",
    seeYearAfter: "Året etter",
    finish: "Ferdig",
    home: "Start på nytt",

    // End screen
    endTitle: "May every year be another wonderful secret",
    endMessage: "Takk for at du er en del av historien vår.",
    returnToStart: "Tilbake til start"
  }
};

/**
 * Detect browser language and return supported locale
 * @returns {string} 'en' or 'no'
 */
export function detectLanguage() {
  const browserLang = navigator.language?.toLowerCase() || '';

  // Check for Norwegian variants
  if (browserLang.startsWith('no') ||
      browserLang.startsWith('nb') ||
      browserLang.startsWith('nn')) {
    return 'no';
  }

  // Default to English
  return 'en';
}

/**
 * Get translation for a key in the specified locale
 * @param {string} key - Translation key
 * @param {string} locale - 'en' or 'no'
 * @returns {string} Translated text
 */
export function t(key, locale = 'en') {
  return translations[locale]?.[key] || translations['en'][key] || key;
}
