import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyASJzJUSDMUS6g1q-ApfLiMaFpwH2Mm7Tg",
  authDomain: "hushnote-96564.firebaseapp.com",
  databaseURL: "https://hushnote-96564.firebaseio.com",
  projectId: "hushnote-96564",
  storageBucket: "hushnote-96564.appspot.com",
  messagingSenderId: "595951103889",
  appId: "1:595951103889:web:6a7d51641940a61007f430",
  measurementId: "G-77XF10DKMN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
