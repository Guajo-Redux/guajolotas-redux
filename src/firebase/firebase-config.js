import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAH5RzCfsiqMWmDuL0ipX6V88mjc5OSVJg",
  authDomain: "guajo-redux.firebaseapp.com",
  projectId: "guajo-redux",
  storageBucket: "guajo-redux.appspot.com",
  messagingSenderId: "432506807370",
  appId: "1:432506807370:web:0fc05cf77911ac101972b3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const authDb = firebase.auth();
console.log(authDb);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
  authDb
}