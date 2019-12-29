import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

const resources = {
  en: {
    translation: {
      email: "This is not a correct email address",
      lowerCase: "Value has to be lower case",
      maxDate: "Too late",
      minDate: "Too early",
      numberMax: "Value has to be lower",
      numberMin: "Value has to be greather",
      required: "This field is required",
      stringMin: "Min 3 signs",
      upperCase: "Value has to be upper case",
      url: "This is not a correct url",
    },
  },
  pl: {
    translation: {
      email: "To nie jest poprawny email",
      lowerCase: "Wartość musi być podana małymi literami",
      maxDate: "Za późno",
      minDate: "Za wcześnie",
      numberMax: "Wartość musi być mniejsza",
      numberMin: "Wartość musi być większa",
      required: "To pole jest wymagane",
      stringMin: "Minimum 3 znaki",
      upperCase: "Wartość musi być podana duymi literami",
      url: "To nie jest poprawny url",
    },
  },
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
