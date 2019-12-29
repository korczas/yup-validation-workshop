import * as yup from "yup";

export default yup.object().shape({
  // firstName: min 3, max 16, required, must be upper case
  // lastName: min 3, max 32, required, must be lower case
  // email: required, correct email
  // yourSite: correct url
  // age: min 7, max 70
  // birthday: required, min 1990-1-1, max 2000-1-1
});
