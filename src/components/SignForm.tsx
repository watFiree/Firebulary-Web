import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const SignForm: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Form className=" w-40 h-64 mt-5 flex flex-col items-center  justify-between ">
      <Field type="email" name="email" placeholder="Email address" />
      <ErrorMessage name="email" />
      <Field type="password" name="password" placeholder="Password" />
      <ErrorMessage name="password" />
      <button type="submit">{label}</button>
    </Form>
  );
};

export default SignForm;
