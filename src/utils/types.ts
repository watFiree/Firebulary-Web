export interface FirebaseProfile {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}

export interface UserDocument {
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}

export interface WordProp {
  word: string;
  translation: string;
}
