import * as yup from "yup";

export default yup.object().shape({
  userName: yup
    .string()
    .min(3)
    .required(),
  friends: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .min(3)
          .required(),
        age: yup
          .number()
          .positive()
          .notRequired(),
      }),
    )
    .min(3)
    .required(),
});
