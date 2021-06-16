import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDqik-PtTi7KpFb5WBr34S1wQj7cKnVCv0",
  authDomain: "fashion-kart-db.firebaseapp.com",
  projectId: "fashion-kart-db",
  storageBucket: "fashion-kart-db.appspot.com",
  messagingSenderId: "249071084074",
  appId: "1:249071084074:web:076b4b9d6a63d4ecf15953",
  measurementId: "G-T6VCF3RLE2",
};
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

