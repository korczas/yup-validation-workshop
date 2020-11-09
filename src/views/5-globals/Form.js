import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation";

export default function Form5() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      birthday: "",
      yourSite: "",
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    validationSchema,
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
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          id="email"
          label="Email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <TextField
          error={formik.touched.yourSite && !!formik.errors.yourSite}
          helperText={formik.touched.yourSite && formik.errors.yourSite}
          id="yourSite"
          label="Your www site"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.yourSite}
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
