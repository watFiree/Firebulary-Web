import React from 'react';
import { Link } from 'react-router-dom';
import LogoPNG from 'assets/app_logo.png';
import PreviewImage from 'assets/PreviewImage.svg';

import Button from 'components/Button';

const Main = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-24 shadow-lg flex bg-amber-600 dark:bg-amber-800 items-center">
        <img className="h-20 ml-8 mr-4" src={LogoPNG} alt="logo" />
        <h1 className="text-4xl font-semibold ">Firebulary</h1>
      </div>
      <div className="w-full h-2/3 flex justify-center mt-20">
        <div className="w-2/5 flex flex-col items-center">
          <div className="mx-auto w-full">
            <p className="text-7xl text-center font-bold tracking-wide mt-8 mb-16 leading-tight">
              Learn any language
              <br />
              fast and
              <br />
              pleaseant
            </p>
          </div>
          <div className="w-2/3 flex justify-around items-center">
            <Link to="/signin">
              <Button>sign in</Button>
            </Link>
            <p className="mx-4 font-semibold text-lg">or</p>
            <Link to="/signup">
              <Button color="blue">sign up</Button>
            </Link>
          </div>
        </div>
        <img className="w-1/2 -mt-8 " src={PreviewImage} alt="logo" />
      </div>
    </div>
  );
};

export default Main;
