import React from "react";
import { useFormik } from "formik";
import "./Signup.css";
import * as yup from "yup";
export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "Must be 15 character or Less")
        .required("Required"),
      lastName: yup
        .string()
        .max(5, "Must be 5 character or Less")
        .required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="lastname"
          name="lastName"
          type="text"
          placeholder="last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
