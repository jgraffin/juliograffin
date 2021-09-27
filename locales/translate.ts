import formatMessage from "format-message";
import pt from "./pt-BR/translation.json";
import en from "./en-US/translation.json";

const eng = formatMessage.namespace();

formatMessage.setup({
  locale: "pt",
  translations: {
    pt,
  },
  missingTranslation: "ignore",
});

eng.setup({
  locale: "en",
  translations: {
    en,
  },
  missingTranslation: "ignore",
});

export { eng };
