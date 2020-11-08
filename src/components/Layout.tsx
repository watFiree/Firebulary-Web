import React from 'react';
import useRealtimeData from 'hooks/useRealtimeData';

const Layout: React.FC = ({ children }) => {
  useRealtimeData();
  return <div className=" container sm m-auto bg-orange-600 h-screen">{children}</div>;
};

export default Layout;
