import * as yup from "yup";

export default yup.object().shape({
  userName: yup.string().min(3).required(),
  friends: yup
    .array()
    .test("test", "Provide at least 3 friends", function (value) {
      if (value && value.length < 3) return this.createError({ path: "arrayLenght" });
      return true;
    })
    .of(
      yup.object().shape({
        name: yup.string().min(3).required(),
        age: yup.number().positive().notRequired(),
      }),
    )
    .required(),
});
