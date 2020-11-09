import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation-bonus";
import { get } from "lodash";

import { ReactComponent as CheckMark } from "../../images/checkmark.svg";
import { ReactComponent as Cross } from "../../images/cross.svg";

export default function Form4a() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    validate: async (values) => {
      try {
        await validationSchema.validate(values, { abortEarly: false });
      } catch (err) {
        return customFormErrors(err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="fields-wrapper">
        <TextField
          error={formik.touched.password && !!formik.errors.password}
          id="password"
          type="password"
          label="Password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div>
          {formik.touched.password && (
            <>
              <ValidationStatus status={get(formik, "errors.password.upperCase", false)} /> At least one uppercase
              letter
              <br />
              <ValidationStatus status={get(formik, "errors.password.lowerCase", false)} /> At least one lowercase
              letter
              <br />
              <ValidationStatus status={get(formik, "errors.password.number", false)} /> At least one number
              <br />
              <ValidationStatus status={get(formik, "errors.password.special", false)} /> At least one special char
              <br />
              <ValidationStatus status={get(formik, "errors.password.length", false)} /> Min 8 signs long
            </>
          )}
        </div>

        <TextField
          error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          id="confirmPassword"
          type="password"
          label="Confirm password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </div>

      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
}

const customFormErrors = (errors) => {
  const passwordErrors = errors.inner.find((err) => err.path === "password");
  if (!passwordErrors) return yupToFormErrors(errors);

  const { upperCase, lowerCase, length, special, number } = passwordErrors.params;
  const password = {
    upperCase,
    lowerCase,
    length,
    number,
    special,
  };

  return { ...yupToFormErrors(errors), password };
};

const ValidationStatus = ({ status }) => {
  return status ? <Cross /> : <CheckMark />;
};
