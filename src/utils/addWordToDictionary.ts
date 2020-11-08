import { firestore } from 'fb';
import translateWord from './translateWord';
import detectLanguage from './detectLanguage';

import { AddWordInputProps } from 'utils/types';

const addWordToDictionary = async (uid: string, data: AddWordInputProps) => {
  const userData = await firestore.doc(`data/${uid}`);
  const snapshot = await userData.get();
  const processAdding = async (word: string, translation: string, translationLang: string) => {
    if (snapshot.exists) {
      try {
        const database = await snapshot.data();
        if (database) {
          await userData.set(
            {
              dictionary: [
                ...database.dictionary,
                { word, translation, translationLang, answeredCorrectly: 0 },
              ],
            },
            { merge: true }
          );
          return true;
        }
        return new Error('Could not find database !');
      } catch (err) {
        return new Error(err);
      }
    } else {
      try {
        await userData.set({
          dictionary: [{ word, translation, translationLang, answeredCorrectly: 0 }],
          learnt: [],
        });
        return true;
      } catch (err) {
        return new Error(err.message);
      }
    }
  };

  if (data.autoTranslate) {
    const translatedWord = await translateWord(data.word, data.translateFrom, data.translateTo);
    const result = await processAdding(data.word, translatedWord, data.translateTo);
    return result;
  } else {
    const translatedWordLang = await detectLanguage(data.translation);
    const result = await processAdding(data.word, data.translation, translatedWordLang);
    return result;
  }
};

export default addWordToDictionary;
