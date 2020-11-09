import * as yup from "yup";
import i18n from "./i18n";

yup.setLocale({
  mixed: {
    required: () => i18n.t("required"),
  },
  date: {
    max: () => i18n.t("maxDate"),
    min: () => i18n.t("minDate"),
  },
  string: {
    url: () => i18n.t("url"),
    email: () => i18n.t("email"),
    lowercase: () => i18n.t("lowerCase"),
    min: () => i18n.t("stringMin"),
    uppercase: () => i18n.t("upperCase"),
  },
  number: {
    max: () => i18n.t("numberMax"),
    min: () => i18n.t("numberMin"),
  },
});

export default yup;
