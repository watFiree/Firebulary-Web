import React from 'react';
import useRealtimeData from 'hooks/useRealtimeData';

const Layout: React.FC = ({ children }) => {
  useRealtimeData();
  return (
    <div className="h-screen w-full flex bg-gray-300">
      <div className="h-full mx-auto w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-3/5 bg-orange-600 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
