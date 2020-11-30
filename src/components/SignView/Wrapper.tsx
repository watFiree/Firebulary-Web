import React from 'react';

const SignViewWrapper: React.FC = ({ children }) => (
  <div className="flex flex-col items-center justify-center min-h-450 lg:h-2/3 md:h-full 2xl:w-2/5 xl:w-2/5 lg:1/2 md:w-1/2 sm:w-2/3 mm:w-full mx-auto border-4 border-gray-900 dark:border-black">
    {children}
  </div>
);

export default SignViewWrapper;
