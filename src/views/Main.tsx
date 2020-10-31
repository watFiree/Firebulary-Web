import React from 'react';

import Link from 'components/Link';

const Main = () => {
  return (
    <div className="pt-20 flex flex-col items-center ">
      <h1 className=" text-3xl text-black antialiased font-semibold">Firebulary</h1>
      <Link to="signup">Sign up</Link>
      <Link to="signin">Sign in</Link>
      <Link to="app">Use without account</Link>
    </div>
  );
};

export default Main;
