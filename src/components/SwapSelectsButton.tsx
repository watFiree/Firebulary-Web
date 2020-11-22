import React from 'react';
import { useFormikContext } from 'formik';

interface StringMap {
  [key: string]: string;
}

const SwapSelectsButton: React.FC<{
  firstVariable: string;
  secondVariable: string;
}> = ({ firstVariable, secondVariable }) => {
  const { values, setFieldValue } = useFormikContext<StringMap>();
  return (
    <button
      type="button"
      className="mx-4"
      onClick={() => {
        const buffor = values[firstVariable];
        setFieldValue(firstVariable, values[secondVariable]);
        localStorage.setItem(firstVariable, values[secondVariable]);
        setFieldValue(secondVariable, buffor);
        localStorage.setItem(secondVariable, buffor);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-replace"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
        <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
      </svg>
    </button>
  );
};

export default SwapSelectsButton;
