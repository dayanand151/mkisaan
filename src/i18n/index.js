import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: {} },
  hi: { translation: {} },
};

// Initialize i18next to load resources via fetch (public/locales)
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  debug: false,
  resources,
  interpolation: { escapeValue: false },
  backend: {
    // not used here because we'll load from public via fetch in useEffect below
  }
});

// We will lazy-load the JSON from public/locales when the app starts:
async function loadLocales() {
  const en = await fetch("/locales/en/translation.json").then(r => r.json());
  const hi = await fetch("/locales/hi/translation.json").then(r => r.json());
  i18n.addResourceBundle("en", "translation", en, true, true);
  i18n.addResourceBundle("hi", "translation", hi, true, true);
}
loadLocales();

export default i18n;