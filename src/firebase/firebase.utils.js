import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAgkXYpEUxMn8B-zfbhSHeuG2p34A32cTY",
    authDomain: "frwn-db.firebaseapp.com",
    databaseURL: "https://frwn-db.firebaseio.com",
    projectId: "frwn-db",
    storageBucket: "",
    messagingSenderId: "497103235430",
    appId: "1:497103235430:web:3ab66a52918738176b00a7",
    measurementId: "G-4MPNLW0W77"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;