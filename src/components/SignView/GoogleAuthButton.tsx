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
      className="btn bg-gray-200 h-12 px-8 mt-12 mb-5 rounded-lg font-semibold text-gray-800 flex items-center justify-center border-2 hover:border-gray-800"
      onClick={handleClick}
    >
      <img src={GoogleIcon} alt="Google" className="h-10 w-10 mr-2" />
      Continue with Google
    </button>
  );
};

export default GoogleAuthButton;
