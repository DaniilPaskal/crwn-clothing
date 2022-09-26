import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBg-Ywxz8NEjihDL_6xFRTm2ki4ZGKKBqc",
    authDomain: "crwn-clothing-db-845ba.firebaseapp.com",
    projectId: "crwn-clothing-db-845ba",
    storageBucket: "crwn-clothing-db-845ba.appspot.com",
    messagingSenderId: "49803154700",
    appId: "1:49803154700:web:cdd8ff29602f6a6b69a529"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = signInWithPopup(auth, provider);