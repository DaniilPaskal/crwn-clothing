import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch (error) {
            console.log('error creating user', error.message)
        }
     
        return userDocRef;
    }
}