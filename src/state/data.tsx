import { atom } from 'recoil';

const dataState = atom({
  key: 'dataState',
  default: {
    dictionary: [{ word: '', translation: '', answeredCorrectly: 0, translationLang: '' }],
    learnt: [],
  },
});
export default dataState;
