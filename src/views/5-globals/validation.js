import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().min(3).max(16).strict().uppercase().required(),
  lastName: yup.string().min(3).max(32).strict().lowercase().required(),
  email: yup.string().email().required(),
  yourSite: yup.string().url().required(),
  age: yup.number().min(7).max(70),
  birthday: yup.date().min('1/1/1990').max('1/1/2000').required()
});
