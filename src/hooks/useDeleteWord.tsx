import { firestore } from 'fb';
import { useRecoilValue } from 'recoil';
import useUser from './useUser';
import dataState from 'state/data';

const useDeleteWord = () => {
  const { id } = useUser();
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
