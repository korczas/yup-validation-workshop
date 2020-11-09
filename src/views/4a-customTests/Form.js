import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation";

export default function Form4a() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="fields-wrapper">
        <TextField
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          id="password"
          type="password"
          label="Password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

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
