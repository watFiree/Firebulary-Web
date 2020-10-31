import { firestore } from 'fb';
import getUserProfileDocument from './getUserProfileDocument';

const createUserProfileDocument = async (user: any, additionalInfo: any) => {
  if (!user) return;

  const userRef = await firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
    } catch (err) {
      console.log('error', err);
    }
  }

  return getUserProfileDocument(user.uid);
};

export default createUserProfileDocument;
