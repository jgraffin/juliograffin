import formatMessage from "format-message";
import pt from "./pt-BR/translation.json";
import en from "./en-US/translation.json";

const english = formatMessage.namespace();

formatMessage.setup({
  locale: "pt-BR",
  translations: require("../locales"),
});

english.setup({
  locale: "en",
  translations: require("../locales"),
});
