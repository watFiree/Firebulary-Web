import React from 'react';
import useRealtimeData from 'hooks/useRealtimeData';
import useNightMode from 'hooks/useNightMode';

const Layout: React.FC = ({ children }) => {
  useRealtimeData();
  useNightMode();
  return (
    <div className="h-full w-full flex bg-trueGray-200 dark:bg-trueGray-700 transition-all">
      <div className="min-h-screen mx-auto w-full lg:w-full xl:w-2/3 bg-amber-500 dark:bg-amber-700 text-gray-900 dark:text-black flex items-center justify-center shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;
