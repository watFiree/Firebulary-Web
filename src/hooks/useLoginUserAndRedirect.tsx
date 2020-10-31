import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from 'state/user';

import createUserProfileDocument from 'utils/createUserProfileDocument';
import getUserProfileDocument from 'utils/getUserProfileDocument';

const useLoginUserAndRedirect = () => {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();
  const setUserAndRedirect = async ({ user, additionalUserInfo }: firebase.auth.UserCredential) => {
    if (user?.uid && user?.email) {
      if (additionalUserInfo?.isNewUser) {
        const data = await createUserProfileDocument(user, {});
        if (data !== undefined) {
          setUser({
            auth: true,
            ...data,
          });
        }
      } else {
        const data = await getUserProfileDocument(user.uid);
        if (data !== undefined) {
          setUser({
            auth: true,
            ...data,
          });
        }
      }

      return history.push('/app');
    }
    throw new Error("User's data not provided !");
  };

  return setUserAndRedirect;
};

export default useLoginUserAndRedirect;
