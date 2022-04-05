import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// initia. vlaue of form
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
};

// on submit function here
const onSubmit = (values) => {
  // api will be here
};

// validation schema using formik yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required! "),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div>
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="channel" />
        </div>

        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
