import * as yup from "yup";

export default yup.object().shape({
  password: yup
    .string()
    .required()
    .test("lowercase", "must be lowercase", function (val = "") {
      if (!/[a-z]+/.test(val)) return this.createError({ path: "password.lowercase" });
      return true;
    })
    .test("length", "Has to be at least 8 chars", function (val = "") {
      if (val.length < 8) return this.createError({ path: "password.length" });
      return true;
    })
    .test("uppercase", "must be uppercase", function (val) {
      if (!/[A-Z]+/g.test(val)) return this.createError({ path: "password.uppercase" });
      return true;
    })
    .test("number", "must be number", function (val) {
      if (!/[0-9]+/g.test(val)) return this.createError({ path: "password.number" });
      return true;
    })
    .test("special", "must be special", function (val) {
      if (!/[!@#$%<>?~]+/g.test(val)) return this.createError({ path: "password.special" });
      return true;
    }),
  confirmPassword: yup.string().test("confirmPassword", "passwords doesn't match", function (val) {
    return this.parent.password === val;
  }),
});
