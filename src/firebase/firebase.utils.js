import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbmZyKxtrUNl1_SUKCLUBC_u4mbcJ0Ypc",
    authDomain: "crwn-db-3cd1d.firebaseapp.com",
    projectId: "crwn-db-3cd1d",
    storageBucket: "crwn-db-3cd1d.appspot.com",
    messagingSenderId: "467371621488",
    appId: "1:467371621488:web:30a48b3ffc0b28551708b5",
    measurementId: "G-2K5JV155D5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;