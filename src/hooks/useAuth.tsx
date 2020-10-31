import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from 'state/user';

const useAuth = () => {
  const user = useRecoilValue(userState);
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    if (!user.auth) {
      return history.push('/signin');
    }
    return;
  }, [user, history]);

  return user;
};

export default useAuth;
