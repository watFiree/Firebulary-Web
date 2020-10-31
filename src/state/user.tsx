import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: {
    id: '',
    auth: false,
    displayName: '',
    email: '',
    photoURL: '',
    createdAt: {
      nanoseconds: 0,
      seconds: 0,
    },
  },
});

export default userState;
