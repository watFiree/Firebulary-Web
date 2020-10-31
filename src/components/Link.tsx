import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <RouterLink to={to} className="text-gray-800 hover:text-red-400 text-lg">
      {children}
    </RouterLink>
  );
};

export default Link;
