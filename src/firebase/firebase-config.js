import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDv33VlFtPR2qRfqwphWItCOl4gPJkfHEs",
  authDomain: "crud---new-example.firebaseapp.com",
  projectId: "crud---new-example",
  storageBucket: "crud---new-example.appspot.com",
  messagingSenderId: "707889256408",
  appId: "1:707889256408:web:e32eacdc8da08ac23c04ad"
};

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}