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


//take user auth object from firestore auth and store to database usrer's document
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShop = await userRef.get();

    if(!snapShop.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error){
            console.log("Error creating user: ", error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;