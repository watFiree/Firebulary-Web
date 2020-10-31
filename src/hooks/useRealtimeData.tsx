import { useEffect } from 'react';
import { firestore } from 'fb';
import userState from 'state/user';
import dataState from 'state/data';
import { useRecoilState } from 'recoil';

const useRealtimeData = () => {
  const [user, updateUser] = useRecoilState(userState);
  const [, updateData] = useRecoilState(dataState);

  useEffect(() => {
    if (user.auth && user.id) {
      //data observer
      firestore.doc(`data/${user.id}`).onSnapshot(snapshot => {
        updateData(snapshot.data() as any);
      });

      //user observer
      firestore.doc(`users/${user.id}`).onSnapshot(snapshot => {
        const userProfileData = { auth: true, id: user.id, ...snapshot.data() };
        updateUser(userProfileData as any);
      });
    }
  }, [user.auth, user.id, updateUser, updateData]);

  return user;
};

export default useRealtimeData;
