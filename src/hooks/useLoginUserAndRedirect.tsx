import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { functions } from 'fb';
import userState from 'state/user';

const useLoginUserAndRedirect = () => {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();
  const getUserProfileDocument = functions.httpsCallable('getUserProfileDocument');
  const setUserAndRedirect = async (user: firebase.User) => {
    if (user.uid) {
      const { data } = await getUserProfileDocument(user.uid);
      setUser({
        auth: true,
        ...data,
      });
      return history.push('/app');
    }
    return new Error("User's data not provided !");
  };

  return setUserAndRedirect;
};

export default useLoginUserAndRedirect;
