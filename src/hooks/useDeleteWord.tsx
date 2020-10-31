import { firestore } from 'fb';
import { useRecoilValue } from 'recoil';
import userState from 'state/user';
import dataState from 'state/data';

const useDeleteWord = () => {
  const { id } = useRecoilValue(userState);
  const { dictionary } = useRecoilValue(dataState);

  const handleDelete = async (indicator: number) => {
    const filteredState = dictionary.filter((_, index) => index !== indicator);
    try {
      await firestore.doc(`data/${id}`).set(
        {
          dictionary: filteredState,
        },
        { merge: true }
      );
      return filteredState;
    } catch (err) {
      return new Error(err);
    }
  };

  return handleDelete;
};

export default useDeleteWord;
