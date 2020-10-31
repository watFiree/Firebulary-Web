import React from 'react';
import useAuth from 'hooks/useAuth';
const Layout: React.FC = ({ children }) => {
  return <div className=" container sm m-auto bg-orange-600 h-screen">{children}</div>;
};

export default Layout;
