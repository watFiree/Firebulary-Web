import { firestore } from 'fb';
import translateWord from './translateWord';

interface Data {
  word: string;
  translation: string;
  autoTranslate: boolean;
  translateFrom: string;
  translateTo: string;
}

const addWordToDictionary = async (uid: string, data: Data) => {
  const userData = await firestore.doc(`data/${uid}`);
  const snapshot = await userData.get();
  const processAdding = async (word: string, translation: string) => {
    if (snapshot.exists) {
      try {
        const database = await snapshot.data();
        if (database && database.dictionary.length) {
          await userData.set(
            {
              dictionary: [...database.dictionary, { word, translation }],
            },
            { merge: true }
          );
          return true;
        }
        return new Error('Could not find database !');
      } catch (err) {
        console.log(err);
        return new Error(err);
      }
    } else {
      try {
        await userData.set({
          dictionary: [{ word, translation }],
          learnt: [],
        });
        return true;
      } catch (err) {
        console.log(err);
        return new Error(err.message);
      }
    }
  };

  if (data.autoTranslate) {
    const translatedWord = await translateWord(data.word, data.translateFrom, data.translateTo);
    const result = await processAdding(data.word, translatedWord);
    return result;
  } else {
    const result = await processAdding(data.word, data.translation);
    return result;
  }
};

export default addWordToDictionary;
