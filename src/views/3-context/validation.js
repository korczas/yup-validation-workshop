import * as yup from "yup";

export default yup
  .object()
  .transform(function (value, originalvalue) {
    const birthday = originalvalue.birthday === "" ? undefined : originalvalue.birthday;
    const age = originalvalue.age === "" ? undefined : originalvalue.age;

    return { ...originalvalue, birthday, age };
  })
  .shape({
    firstName: yup.string().min(3).strict().required(),
    lastName: yup.string().min(3).strict().required(),
    age: yup.number().when("$adultOnly", {
      is: true,
      then: yup.number().min(18),
      otherwise: yup.number().min(7),
    }),
    birthday: yup.date().when("age", {
      is: (value) => !!value,
      then: yup.date().notRequired(),
      otherwise: yup.date().max("11/11/2011").required(),
    }),
  });
