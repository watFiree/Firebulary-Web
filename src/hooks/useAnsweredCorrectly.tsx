import { firestore } from 'fb';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';
import useUser from './useUser';

import { DictionarySection } from 'utils/types';

import moveToLearnt from 'utils/moveToLearnt';

const useAnsweredCorrectly = () => {
  const { id } = useUser();
  const { dictionary } = useRecoilValue(dataState);

  const answeredCorrectly = async (
    dictionaryIndex: number
  ): Promise<Error | DictionarySection[]> => {
    const answeredWord = dictionary.find((_, index) => index === dictionaryIndex);
    if (!answeredWord) return new Error('Word not found !');

    if (answeredWord?.answeredCorrectly < 3) {
      const increased = Object.assign({}, answeredWord, {
        answeredCorrectly: answeredWord.answeredCorrectly + 1,
      });
      const updatedDictionary = dictionary.map((word, index) =>
        index === dictionaryIndex ? increased : word
      );
      try {
        await firestore.doc(`data/${id}`).set(
          {
            dictionary: updatedDictionary,
          },
          { merge: true }
        );
        return updatedDictionary;
      } catch (err) {
        return new Error(err);
      }
    } else {
      const updatedDictionary = dictionary.filter((_, index) => index !== dictionaryIndex);
      try {
        const result = await moveToLearnt(id, answeredWord, updatedDictionary);
        return result;
      } catch (err) {
        return new Error(err);
      }
    }
  };
  return answeredCorrectly;
};

export default useAnsweredCorrectly;
