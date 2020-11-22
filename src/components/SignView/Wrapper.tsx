import React from 'react';

const SignViewWrapper: React.FC = ({ children }) => (
  <div className="flex flex-col items-center justify-center h-2/3 w-2/4 mx-auto border-4 border-black">
    {children}
  </div>
);

export default SignViewWrapper;
