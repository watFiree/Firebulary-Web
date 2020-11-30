import React from 'react';
import useUser from 'hooks/useUser';

import AddWordForm from 'components/AddWordForm';
import Navigation from 'components/Navigation';

const App = () => {
  const user = useUser();

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <Navigation />
      <h1 className="text-6xl mt-24 lg:mt-48 md:mt-32  my-6 font-semibold">Firebulary</h1>
      <AddWordForm uid={user.id} />
    </div>
  );
};

export default App;
