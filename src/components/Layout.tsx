import React from 'react';
import useRealtimeData from 'hooks/useRealtimeData';
import useNightMode from 'hooks/useNightMode';

const Layout: React.FC = ({ children }) => {
  useRealtimeData();
  useNightMode();
  return (
    <div className="h-screen w-full flex bg-trueGray-200 dark:bg-trueGray-700 transition-all">
      <div className="h-full mx-auto w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-3/5 bg-amber-500 dark:bg-amber-700 text-gray-900 dark:text-black flex items-center justify-center shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;
