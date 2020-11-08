import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from './useUser';

const useAuth = () => {
  const user = useUser();
  const history = useHistory();

  useEffect(() => {
    if (!user.auth) {
      return history.push('/signin');
    }
  }, [user, history]);

  return user;
};

export default useAuth;
