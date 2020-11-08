import React from 'react';
import { auth } from 'fb';

const Settings = () => {
  return (
    <div>
      <h1>settings</h1>
      <button>night theme</button>
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};

export default Settings;
