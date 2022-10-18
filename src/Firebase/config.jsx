import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD8O53-DfmuQteC9feFK1KfvGDcrj1O_1s',
  authDomain: 'thedojo-f8a62.firebaseapp.com',
  projectId: 'thedojo-f8a62',
  storageBucket: 'thedojo-f8a62.appspot.com',
  messagingSenderId: '625935122115',
  appId: '1:625935122115:web:dafca73c8e0323bbb46c76',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//time stamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
