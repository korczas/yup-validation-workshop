import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation";

export default function Form3({ adultOnly }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      birthday: "",
      yourSite: "",
    },
    validate: async (values) => {
      try {
        await validationSchema.validate(values, { context: { adultOnly }, abortEarly: false });
      } catch (err) {
        return yupToFormErrors(err);
      }
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="fields-wrapper">
        <TextField
          error={formik.touched.firstName && !!formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
          id="firstName"
          label="First Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <TextField
          error={formik.touched.lastName && !!formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
          id="lastName"
          label="Last Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <TextField
          error={formik.touched.age && !!formik.errors.age}
          helperText={formik.touched.age && formik.errors.age}
          id="age"
          label="Age"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="number"
          value={formik.values.age}
        />

        <TextField
          error={formik.touched.birthday && !!formik.errors.birthday}
          helperText={formik.touched.birthday && formik.errors.birthday}
          id="birthday"
          InputLabelProps={{ shrink: true }}
          label="Birthday"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="date"
          value={formik.values.birthday}
        />
      </div>

      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
}
