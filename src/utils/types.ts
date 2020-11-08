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

export interface UserInputProps {
  uid: string;
  displayName: string | null;
  email: string;
  photoURL: string | null;
}

export interface DictionarySection {
  word: string;
  translation: string;
  answeredCorrectly: number;
  translationLang: string;
}
export interface LearnWordProp {
  word: string;
  translation: string;
}

export interface LearnViewProps {
  index: number;
  data: LearnWordProp;
  setNextView: () => void;
}

export interface AddWordInputProps {
  word: string;
  translation: string;
  autoTranslate: boolean;
  translateFrom: string;
  translateTo: string;
}

export interface DetectLanguageResponse {
  data: {
    detections: Array<Array<{ isReliable: boolean; confidence: number; language: string }>>;
  };
}

export interface TranslateWordResponse {
  data: {
    translations: Array<{ translatedText: string }>;
  };
}
