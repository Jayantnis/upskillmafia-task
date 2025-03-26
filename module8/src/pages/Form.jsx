import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button, Alert } from "react-bootstrap";

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function FormPage() {
  return (
    <Container className="mt-5">
      <h2>Form Page</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form Data:", values);
          alert("Form submitted successfully!");
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-4 border rounded shadow">
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
