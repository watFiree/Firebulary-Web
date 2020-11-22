import React from 'react';

const Button: React.FC<
  { color?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => (
  <button
    {...props}
    className={`w-32 h-12 text-lg text-gray-200 font-semibold rounded-xl bg-${
      props.color ? props.color : 'gray'
    }-900 hover:text-orange-600 uppercase shadow`}
  >
    {props.children}
  </button>
);

export default Button;
