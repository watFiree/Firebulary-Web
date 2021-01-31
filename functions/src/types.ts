export interface WordSection {
  word: string;
  translation: string;
  answeredCorrectly: number;
  translationLang: string;
}

export interface UsersData {
  dictionary: Array<WordSection>;
  learnt: Array<WordSection>;
}

export interface DetectLanguageResponse {
  data: {
    detections: Array<Array<{ isReliable: boolean; confidence: number; language: string }>>;
  };
}

export interface TranslateWordInput {
  word: string;
  source: string;
  target: string;
}

export interface TranslateWordResponse {
  data: {
    translations: Array<{ translatedText: string }>;
  };
}
