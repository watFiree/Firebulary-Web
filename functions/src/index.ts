import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { detectLanguage, translateWord } from './helpers';
import { UsersData } from './types';
admin.initializeApp();

export const shuffleArray = functions.https.onCall(<T>(data: T[]): T[] => {
  const shuffled = [];
  while (data.length) {
    const index = Math.floor(Math.random() * data.length);
    const chosen = data.splice(index, 1)[0];
    shuffled.push(chosen);
  }
  return shuffled;
});

export const createUserProfileDocument = functions.auth.user().onCreate(async user => {
  const firestore = admin.firestore();
  const userRef = await firestore.doc(`users/${user.uid}`);
  const dataRef = await firestore.doc(`data/${user.uid}`);
  const { displayName = '', email, photoURL = '' } = user;
  const createdAt = new Date();
  try {
    await userRef.set({ displayName, email, photoURL, createdAt });
    await dataRef.set({ dictionary: [], learnt: [] });
    return 'Successfully created user doc';
  } catch {
    return new functions.https.HttpsError('invalid-argument', 'Could not create user document');
  }
});

export const getUserProfileDocument = functions.https.onCall(async (_, context) => {
  const firestore = admin.firestore();
  if (context.auth) {
    try {
      const userDoc = await firestore.collection('users').doc(context.auth.uid).get();
      if (userDoc.exists) {
        const data = userDoc.data();
        return {
          id: context.auth.uid,
          ...data,
        };
      }
      return new functions.https.HttpsError('not-found', 'User data not found !');
    } catch {
      return new functions.https.HttpsError('data-loss', 'Failed while getting user data !');
    }
  }
  return new functions.https.HttpsError('unauthenticated', 'User not authenticated !');
});

export const addWordToDictionary = functions.https.onCall(async (data, context) => {
  if (!context.auth)
    return new functions.https.HttpsError('unauthenticated', 'User not authenticated !');
  const firestore = admin.firestore();
  const userData = await firestore.doc(`data/${context.auth.uid}`);
  const snapshot = await userData.get();
  //function
  const processAdding = async (word: string, translation: string, translatedToLanguage: string) => {
    try {
      const database = (await snapshot.data()) as UsersData | undefined;
      if (database) {
        await userData.set(
          {
            dictionary: [
              ...database.dictionary,
              { word, translation, translatedToLanguage, answeredCorrectly: 0 },
            ],
          },
          { merge: true }
        );
        return 'Added word to dictionary';
      }
      return new functions.https.HttpsError('not-found', 'Database not found !');
    } catch (err) {
      return new functions.https.HttpsError('invalid-argument', 'Could not add word !');
    }
  };
  // adding
  if (data.autoTranslate) {
    // translate word, owns already translatedWordLanguage
    const translatedWord = await translateWord({
      word: data.word,
      source: data.translateFrom,
      target: data.translateTo,
    });

    if (translatedWord instanceof Error) return translatedWord;

    const result = await processAdding(data.word.trim(), translatedWord, data.translateTo);
    return result;
  } else {
    // owns already translation, only find translateWordLanguage left
    const translatedWordLanguage = await detectLanguage(data.translation);
    if (translatedWordLanguage instanceof Error) return translatedWordLanguage;

    const result = await processAdding(
      data.word.trim(),
      data.translation.trim(),
      translatedWordLanguage
    );
    return result;
  }
});

export const answeredCorrectly = functions.https.onCall(async (data: number, context) => {
  if (!context.auth)
    return new functions.https.HttpsError('unauthenticated', 'User not authenticated !');
  const firestore = admin.firestore();
  const doc = await firestore.doc(`data/${context.auth.uid}`);
  const snapshot = await doc.get();
  const database = (await snapshot.data()) as UsersData | undefined;
  if (database) {
    const word = database.dictionary.find((_, index) => index === data);
    if (!word) return new functions.https.HttpsError('not-found', 'Exact word not found !');
    if (word.answeredCorrectly < 4) {
      const updatedWord = { ...word, answeredCorrectly: word.answeredCorrectly + 1 };
      const updatedDictionary = database.dictionary.map((existing, index) =>
        index === data ? updatedWord : existing
      );
      try {
        await doc.set(
          {
            dictionary: updatedDictionary,
          },
          { merge: true }
        );
      } catch {
        return new functions.https.HttpsError('invalid-argument', 'Could not update database');
      }
    } else {
      // answered is equal 4 so move it to learnt array
      const updatedDictionary = database.dictionary.filter((_, index) => index !== data);
      try {
        await doc.set(
          {
            dictionary: updatedDictionary,
            learnt: [...database.learnt, word],
          },
          { merge: true }
        );
      } catch {
        return new functions.https.HttpsError(
          'invalid-argument',
          'Could not move word in database'
        );
      }
    }
    return 'Successfully updated word';
  }
  return new functions.https.HttpsError('not-found', 'Database not found !');
});

export const deleteWord = functions.https.onCall(async (data: number, context) => {
  if (!context.auth)
    return new functions.https.HttpsError('unauthenticated', 'User not authenticated !');
  const firestore = admin.firestore();
  const userId = context.auth.uid;
  const snapshot = await firestore.doc(`data/${userId}`).get();
  const database = (await snapshot.data()) as UsersData | undefined;
  if (database) {
    const filteredDictionary = database.dictionary.filter((_, index: number) => index !== data);
    try {
      await firestore.doc(`data/${userId}`).set(
        {
          dictionary: filteredDictionary,
        },
        { merge: true }
      );
    } catch {
      return new functions.https.HttpsError('data-loss', 'Failed while deleting word !');
    }
    return new functions.https.HttpsError('ok', 'Successfully deleted !');
  }
  return new functions.https.HttpsError('not-found', 'Database not found !');
});
