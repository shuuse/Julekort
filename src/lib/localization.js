/**
 * Localization system for CardsOverTime
 * Supports English (en) and Norwegian (no)
 */

export const translations = {
  en: {
    // Entry screen
    title: "A little Christmas tradition…",
    subtitle: "Every year, we hide a tiny secret in our Christmas card photos.",
    instruction: "Tap below to start your journey back in time.",

    // Current year back
    currentYearBack: "This year's secret is still hidden.",
    currentYearBridge: "Let's look at previous years…",

    // Card interaction
    tapToFlip: "Tap to flip",
    continue: "Continue",

    // Navigation
    seeYearBefore: "See the year before",
    finish: "Finish",
    home: "Start over",

    // End screen
    endTitle: "You found every little secret.",
    endMessage: "Thanks for being part of our story.",
    returnToStart: "Return to start"
  },

  no: {
    // Entry screen
    title: "En liten juletradisjon…",
    subtitle: "Hvert år gjemmer vi en liten hemmelighet i julekortbildene våre.",
    instruction: "Trykk nedenfor for å starte reisen tilbake i tid.",

    // Current year back
    currentYearBack: "Årets hemmelighet er fortsatt skjult.",
    currentYearBridge: "La oss se på tidligere år…",

    // Card interaction
    tapToFlip: "Trykk for å snu",
    continue: "Fortsett",

    // Navigation
    seeYearBefore: "Se året før",
    finish: "Ferdig",
    home: "Start på nytt",

    // End screen
    endTitle: "Du fant alle de små hemmelighetene.",
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
