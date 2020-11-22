import React from 'react';
import { Field } from 'formik';

const CheckBox: React.FC<{ name: string; placeholder: string }> = ({ name, placeholder }) => {
  return (
    <div className="flex items-center justify-center">
      <Field
        type="checkbox"
        name={name}
        className="h-5 w-5 p-3 placeholder-gray-500::placeholder placeholder-opacity-75 border-solid border-1 border-gray-700 rounded-xl focus:outline-black shadow cursor-pointer"
      />
      <p className="text-lg ml-2">{placeholder}</p>
    </div>
  );
};

export default CheckBox;
