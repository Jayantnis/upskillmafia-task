import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../components/Navbar";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  course: Yup.string().required("Course is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", course: "", email: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-xl mb-4">Edit Student</h2>
        <Formik
          enableReinitialize
          initialValues={student}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axios
              .put(`http://localhost:5000/students/${id}`, values)
              .then(() => navigate("/"));
          }}
        >
          <Form className="border p-4 rounded">
            <div className="mb-3">
              <label>Name</label>
              <Field type="text" name="name" className="border p-2 w-full" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-3">
              <label>Course</label>
              <Field type="text" name="course" className="border p-2 w-full" />
              <ErrorMessage
                name="course"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="border p-2 w-full" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Student
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
