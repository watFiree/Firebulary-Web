import React from 'react';
import firebase, { auth, providers } from 'fb';

import GoogleIcon from 'assets/google_logo.png';

const GoogleAuthButton = () => {
  const handleClick = () =>
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => firebase.auth().signInWithPopup(providers.google))
      .catch(err => console.log(err));

  return (
    <button
      className="btn bg-white h-12 px-6 rounded-lg font-semibold text-gray-700 flex items-center justify-center hover:border-gray-800 "
      onClick={handleClick}
    >
      <img src={GoogleIcon} alt="Google" className="h-10 w-10 mr-2" />
      Continue with Google
    </button>
  );
};

export default GoogleAuthButton;
