import { createI18n } from "vue-i18n";
import enLocale from "@/i18n/locales/en.json";
import huLocale from "@/i18n/locales/hu.json";
import deLocale from "@/i18n/locales/de.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: enLocale,
    hu: huLocale,
    de: deLocale,
    // You can add more languages here if needed
  },
});

export default i18n;
