import * as yup from "yup";
import { isEmpty } from "lodash";

export default yup.object().shape({
  password: yup.string().test("passwordTest", "incorrect password", function (val) {
    const errors = {};
    if (!/[a-z]/g.test(val)) errors.lowerCase = "Min 1 lowercase char is required";
    if (!/[A-Z]/g.test(val)) errors.upperCase = "Min 1 uppercase char is required";
    if (!/[0-9]/g.test(val)) errors.number = "Min 1 number is required";
    if (!/[!@#$%<>?~]/g.test(val)) errors.special = "Min 1 special character is required";
    if (val.length < 8) errors.length = "Password should be at least 8 charactes";

    if (isEmpty(errors)) return true;
    else return this.createError({ params: errors });
  }),
  confirmPassword: yup.string().test("confirmPassword", "passwords doesn't match", function (val) {
    return this.parent.password === val;
  }),
});
