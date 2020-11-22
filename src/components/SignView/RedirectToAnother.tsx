import React from 'react';
import { Link } from 'react-router-dom';

const options = {
  signin: {
    label: "Don't have an account?",
    href: 'signup',
    buttonLabel: 'Sign Up',
  },
  signup: {
    label: 'Already have an account?',
    href: 'signin',
    buttonLabel: 'Sign In',
  },
};

const RedirectToAnother: React.FC<{ type: 'signin' | 'signup' }> = ({ type }) => (
  <p className="font-bold text-gray-800 text-opacity-75">
    {options[type].label}
    <Link to={options[type].href} className=" ml-2 text-red-800 font-bold">
      {options[type].buttonLabel}
    </Link>
  </p>
);

export default RedirectToAnother;
