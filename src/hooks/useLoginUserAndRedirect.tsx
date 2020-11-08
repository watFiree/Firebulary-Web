import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from 'state/user';

import getUserProfileDocument from 'utils/getUserProfileDocument';

const useLoginUserAndRedirect = () => {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();

  const setUserAndRedirect = async (user: firebase.User) => {
    const { displayName, email, uid, photoURL } = user;

    if (uid && email) {
      const data = await getUserProfileDocument({ uid, displayName, email, photoURL });
      if (!(data instanceof Error)) {
        setUser({
          auth: true,
          ...data,
        });
        return history.push('/app');
      } else {
        return new Error('User not found !');
      }
    }
    return new Error("User's data not provided !");
  };

  return setUserAndRedirect;
};

export default useLoginUserAndRedirect;
