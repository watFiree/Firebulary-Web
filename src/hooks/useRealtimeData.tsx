import { useEffect } from 'react';
import { firestore, auth } from 'fb';
import userState from 'state/user';
import dataState from 'state/data';
import { useRecoilState, useResetRecoilState } from 'recoil';

import useLoginUserAndRedirect from './useLoginUserAndRedirect';

const useRealtimeData = () => {
  const [user, updateUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const resetData = useResetRecoilState(dataState);
  const [, updateData] = useRecoilState(dataState);
  const setUserAndRedirect = useLoginUserAndRedirect();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async snapshot => {
      if (snapshot && !user.auth) {
        await setUserAndRedirect(snapshot);
      }
      if (!snapshot && user.auth) {
        resetUser();
        resetData();
      }
    });
    return () => unsubscribe();
  }, [user, resetUser, resetData, setUserAndRedirect]);

  useEffect(() => {
    if (user.auth && user.id) {
      const dataObserver = firestore.doc(`data/${user.id}`).onSnapshot(snapshot => {
        updateData(snapshot.data() as any);
      });

      return () => dataObserver();
    }
  }, [user, updateUser, updateData]);

  return user;
};

export default useRealtimeData;
