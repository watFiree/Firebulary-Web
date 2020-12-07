import { firestore } from 'fb';
import { UserDocument, UserInputProps } from './types';

const createUserProfileDocument = async (user: UserInputProps, additionalInfo: any) => {
  if (!user) return;

  const userRef = await firestore.doc(`users/${user.uid}`);
  const dataRef = await firestore.doc(`data/${user.uid}`);

  const { displayName = '', email, photoURL = '' } = user;
  const createdAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      photoURL,
      createdAt,
      ...additionalInfo,
    });
    await dataRef.set({
      dictionary: [],
      learnt: [],
    });
    const userDoc = (await userRef.get()).data() as UserDocument;
    const data = {
      id: user.uid,
      ...userDoc,
    };
    return data;
  } catch (err) {
    return new Error(err.message);
  }
};

export default createUserProfileDocument;
