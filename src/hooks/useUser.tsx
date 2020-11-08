import { useRecoilValue } from 'recoil';
import userState from 'state/user';

const useUser = () => {
  const userData = useRecoilValue(userState);
  return userData;
};

export default useUser;
