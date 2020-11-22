import React from 'react';
import { auth } from 'fb';

import Heading from 'components/SubViewHeading';
import Button from 'components/Button';

const Settings = () => (
  <div className="w-full h-full flex flex-col">
    <Heading label="Settings" />
    <div className=" w-1/5 mx-auto h-1/3 flex flex-col justify-around items-center">
      <Button>night theme</Button>
      <Button color="orange" onClick={() => auth.signOut()}>
        logout
      </Button>
    </div>
  </div>
);

export default Settings;
