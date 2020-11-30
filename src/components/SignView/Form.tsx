import React from 'react';
import { Form } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from '../ErrorMessage';
import Button from '../Button';

const SignForm: React.FC<{ label: string }> = ({ label }) => {
  return (
    <>
      <p className="font-bold text-opacity-75">or</p>
      <Form className="w-4/5 min-h-44 h-1/3 mt-5 flex flex-col items-center  justify-between ">
        <TextInput type="email" name="email" placeholder="Email address" />
        <ErrorMessage name="email" />
        <TextInput type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" />
        <Button>{label}</Button>
      </Form>
      <button className="my-8 font-bold text-black text-opacity-75">forgot password?</button>
    </>
  );
};

export default SignForm;
