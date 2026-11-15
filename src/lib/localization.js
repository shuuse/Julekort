/**
 * Localization system for CardsOverTime
 * Supports English (en) and Norwegian (no)
 */

export const translations = {
  en: {
    // Entry screen
    title: "A little Christmas tradition…",
    subtitle: "Sometimes, we hide a tiny secret in our Christmas card photos.",
    instruction: "Take a look",

    // Current year back
    currentYearBack: "This year's secret is still hidden.",
    currentYearBridge: "Let's look at previous years…",

    // Card interaction
    tapToZoom: "Tap the photo to reveal",
    firstTapHint: "Tap the photo to reveal the hidden secret",
    continue: "Continue",

    // Navigation
    seeYearBefore: "The year before",
    seeYearAfter: "The year after",
    seeLatestYear: "Back to the latest year",
    home: "Start over"
  },

  no: {
    // Entry screen
    title: "En liten juletradisjon…",
    subtitle: "Noen ganger gjemmer vi en liten hemmelighet i julekortbildene våre.",
    instruction: "Ta en titt!",

    // Current year back
    currentYearBack: "Årets hemmelighet er fortsatt skjult.",
    currentYearBridge: "La oss se på tidligere år…",

    // Card interaction
    tapToZoom: "Trykk på bildet for å avsløre",
    firstTapHint: "Trykk på bildet for å avsløre den skjulte hemmeligheten",
    continue: "Fortsett",

    // Navigation
    seeYearBefore: "Året før",
    seeYearAfter: "Året etter",
    seeLatestYear: "Tilbake til siste år",
    home: "Start på nytt"
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
