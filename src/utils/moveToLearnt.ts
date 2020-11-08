import { firestore } from 'fb';
import { DictionarySection } from 'utils/types';

const moveToLearnt = async (
  id: string,
  word: DictionarySection,
  updatedDictionary: DictionarySection[]
) => {
  const databaseRef = await firestore.doc(`data/${id}`).get();
  const data = await databaseRef.data();
  try {
    await firestore.doc(`data/${id}`).set(
      {
        dictionary: updatedDictionary,
      },
      { merge: true }
    );
    await firestore.doc(`data/${id}`).set(
      {
        learnt: [...data?.learnt, word],
      },
      { merge: true }
    );
    return updatedDictionary;
  } catch (err) {
    return new Error(err);
  }
};

export default moveToLearnt;
