import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCIGlUDdOtw9Wal-L98O1vc2u31RFaqm3w',
  authDomain: 'firebulary.firebaseapp.com',
  databaseURL: 'https://firebulary.firebaseio.com',
  projectId: 'firebulary',
  storageBucket: 'firebulary.appspot.com',
  messagingSenderId: '1053649833607',
  appId: '1:1053649833607:web:5b2ddf90024a2467947222',
  measurementId: 'G-M4G1Y85D5H',
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export default firebase;
