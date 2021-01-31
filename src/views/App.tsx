import React from 'react';

import AddWordForm from 'components/AddWordForm';
import Navigation from 'components/Navigation';

const App = () => (
  <div className="w-full h-screen flex flex-col items-center ">
    <Navigation />
    <h1 className="text-6xl mt-24 lg:mt-48 md:mt-32  my-6 font-semibold">Firebulary</h1>
    <AddWordForm />
  </div>
);

export default App;
