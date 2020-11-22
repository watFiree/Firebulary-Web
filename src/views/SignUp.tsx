import React from 'react';
import firebase, { auth } from 'fb';
import { Formik } from 'formik';

import Wrapper from 'components/SignView/Wrapper';
import Header from 'components/SignView/Header';
import Form from 'components/SignView/Form';
import GoogleAuthButton from 'components/SignView/GoogleAuthButton';
import RedirectToAnother from 'components/SignView/RedirectToAnother';

const SignUp = () => (
  <Wrapper>
    <Header>Sign Up</Header>
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
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => firebase.auth().createUserWithEmailAndPassword(values.email, values.password))
          .catch(err => setErrors({ password: err.message }));
      }}
    >
      <>
        <Form label="Sign Up" />
        <RedirectToAnother type="signup" />
      </>
    </Formik>
  </Wrapper>
);

export default SignUp;
