import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import da from "./translations/da.json";
import en from "./translations/en.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources: {
    en: { translation: en },
    da: { translation: da },
  },
  lng: "da",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
