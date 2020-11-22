import React from 'react';
import { Field } from 'formik';

const TextInput: React.FC<{ type?: string; name: string; placeholder: string }> = ({
  type = 'text',
  name,
  placeholder,
}) => (
  <Field
    type={type}
    name={name}
    placeholder={placeholder}
    className="h-12 w-2/3 xl:w-3/5 text-lg p-3 placeholder-gray-500::placeholder placeholder-opacity-75 border-solid border-1 border-gray-700 rounded-xl shadow"
  />
);

export default TextInput;
