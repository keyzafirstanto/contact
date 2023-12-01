import I18n from "i18n";
import path from "path";

const i18n = I18n.configure({
  locales: ["id", "en"],
  defaultLocale: "id",
  directory: path.join(__dirname, "./locales"),
  objectNotation: true,
});

export default i18n;
