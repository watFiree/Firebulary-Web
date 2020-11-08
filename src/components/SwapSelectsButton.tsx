import React from 'react';
import { useFormikContext } from 'formik';

interface StringMap {
  [key: string]: string;
}

const SwapSelectsButton: React.FC<{
  label: string;
  firstVariable: string;
  secondVariable: string;
}> = ({ label, firstVariable, secondVariable }) => {
  const { values, setFieldValue } = useFormikContext<StringMap>();
  return (
    <button
      type="button"
      onClick={() => {
        const buffor = values[firstVariable];
        setFieldValue(firstVariable, values[secondVariable]);
        localStorage.setItem(firstVariable, values[secondVariable]);
        setFieldValue(secondVariable, buffor);
        localStorage.setItem(secondVariable, buffor);
      }}
    >
      {label}
    </button>
  );
};

export default SwapSelectsButton;
