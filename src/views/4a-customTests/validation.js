import * as yup from "yup";

export default yup.object().shape({
  password: yup.string().test("passwordTest", "incorrect password", function (val) {
    if (!val) return this.createError({ message: "Password is required" });
    if (!/[a-z]/g.test(val)) return this.createError({ message: "Min 1 lowercase char is required" });
    if (!/[A-Z]/g.test(val)) return this.createError({ message: "Min 1 uppercase char is required" });
    if (!/[0-9]/g.test(val)) return this.createError({ message: "Min 1 number is required", params: "asdf" });
    if (!/[!@#$%<>?~]/g.test(val)) return this.createError({ message: "Min 1 special character is required" });
    if (!val.length < 8) return this.createError({ message: "Password should be at least 8 charactes" });
    return true;
  }),
  confirmPassword: yup.string().test("confirmPassword", "passwords doesn't match", function (val) {
    return this.parent.password === val;
  }),
});
