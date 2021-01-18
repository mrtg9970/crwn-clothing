import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw_lqwJFORN2VJFxV6sm9v_IIyYWEby_c",
  authDomain: "crwn-db-2961e.firebaseapp.com",
  projectId: "crwn-db-2961e",
  storageBucket: "crwn-db-2961e.appspot.com",
  messagingSenderId: "649972593597",
  appId: "1:649972593597:web:137bc753f29bc75c3898d4",
  measurementId: "G-0S084WZMYJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
