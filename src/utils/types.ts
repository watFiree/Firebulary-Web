export interface LearnWordProp {
  word: string;
  translation: string;
}

export interface LearnViewProps {
  index: number;
  data: LearnWordProp;
  setNextView: () => void;
}
