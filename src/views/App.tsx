import React from 'react';
import useAuth from 'hooks/useAuth';

import AddWordForm from 'components/AddWordForm';
import Link from 'components/Link';

const App = () => {
  const user = useAuth();

  return (
    <div className="container w-100 h-screen flex flex-col items-center justify-center">
      <h1>Firebulary</h1>
      <AddWordForm uid={user.id} />
      <Link to="learn">learn</Link>
      <Link to="dictionary">your dictionary</Link>
      <button>stats</button>
    </div>
  );
};

export default App;
