import { atom } from 'recoil';

const dataState = atom({
  key: 'dataState',
  default: {
    dictionary: [{ word: '', translation: '' }],
    learnt: [],
  },
});
export default dataState;
