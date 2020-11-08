import { firestore } from 'fb';
import { UserDocument, UserInputProps } from './types';
import createUserProfileDocument from './createUserProfileDocument';

const getUserProfileDocument = async ({ uid, displayName, email, photoURL }: UserInputProps) => {
  if (!uid) return new Error("User's uid not provided !");
  try {
    const userDoc = await firestore.collection('users').doc(uid).get();
    if (userDoc.exists) {
      const data = userDoc.data() as UserDocument | undefined;
      if (data) {
        return {
          id: uid,
          ...data,
        };
      }
      return new Error('Failed while getting user data !');
    } else {
      const data = await createUserProfileDocument({ uid, displayName, email, photoURL }, {});
      if (data) {
        return data;
      }
      return new Error('Failed while getting user data !');
    }
  } catch (err) {
    return new Error(err);
  }
};
export default getUserProfileDocument;
