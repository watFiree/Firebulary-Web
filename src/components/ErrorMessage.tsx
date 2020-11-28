import React from 'react';
import { ErrorMessage as ErrorFormikComponent } from 'formik';

const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <ErrorFormikComponent name={name}>
    {msg => <p className="z-10 font-bold text-lg text-red-900">{msg}</p>}
  </ErrorFormikComponent>
);

export default ErrorMessage;
