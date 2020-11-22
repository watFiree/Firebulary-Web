import React from 'react';
import useUser from 'hooks/useUser';

import AddWordForm from 'components/AddWordForm';
import Navigation from 'components/Navigation';

const App = () => {
  const user = useUser();

  return (
    <div className="container w-100 h-screen flex flex-col items-center ">
      <Navigation />
      <h1 className="text-6xl mt-48 my-6 font-semibold">Firebulary</h1>
      <AddWordForm uid={user.id} />
    </div>
  );
};

export default App;
