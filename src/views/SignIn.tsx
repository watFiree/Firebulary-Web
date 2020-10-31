import React from 'react';
import { auth } from 'fb';
import { Formik } from 'formik';
import useLoginUserAndRedirect from 'hooks/useLoginUserAndRedirect';
import Form from 'components/SignForm';
import GoogleAuthButton from 'components/GoogleAuthButton';

const SignIn = () => {
  const setUserAndRedirect = useLoginUserAndRedirect();

  return (
    <div className="flex flex-col items-center h-screen justify-center ">
      <GoogleAuthButton />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = 'Please enter email !';
          }
          if (!values.password) {
            errors.password = 'Please enter password !';
          } else if (values.password.length < 6) {
            errors.password = 'Please enter longer password !';
          }
          return errors;
        }}
        onSubmit={async (values, { setErrors }) => {
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then(setUserAndRedirect)
            .catch(err => setErrors({ password: err.message }));
        }}
      >
        <Form label="Sign In" />
      </Formik>
    </div>
  );
};

export default SignIn;
