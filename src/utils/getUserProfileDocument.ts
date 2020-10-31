import { firestore } from 'fb';
import { FirebaseProfile, UserDocument } from './types';

const getUserProfileDocument = async (uid: string): Promise<FirebaseProfile | undefined> => {
  if (!uid) return undefined;
  try {
    const userDoc = await firestore.collection('users').doc(uid).get();

    return {
      id: uid,
      ...(userDoc.data() as UserDocument),
    };
  } catch (err) {
    console.log(err);
  }
};
export default getUserProfileDocument;
