import React from 'react';
import useAuth from 'hooks/useAuth';

const WithAuth: React.FC = ({ children }) => {
  const user = useAuth();
  return <>{user.auth ? children : <h1>loading....</h1>}</>;
};

export default WithAuth;
