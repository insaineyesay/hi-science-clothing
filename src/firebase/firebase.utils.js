import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFCnV9zu_UWcw9laK2hhV6RY5-KTgaJu0",
    authDomain: "hi-science-clothing.firebaseapp.com",
    databaseURL: "https://hi-science-clothing.firebaseio.com",
    projectId: "hi-science-clothing",
    storageBucket: "hi-science-clothing.appspot.com",
    messagingSenderId: "899675206040",
    appId: "1:899675206040:web:a4c67dd14b36150548bbed"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const sigInInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;