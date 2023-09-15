import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQYmTA3wbClKbjGzZBHqdCQqMHekyDpCY",
  authDomain: "web-dev-sit378.firebaseapp.com",
  projectId: "web-dev-sit378",
  storageBucket: "web-dev-sit378.appspot.com",
  messagingSenderId: "436432314658",
  appId: "1:436432314658:web:54a8d7a0786315e495857b",
  measurementId: "G-WX2JG7D0L5"
};

  // Initialize Firebase

  const firebaseApp = initializeApp(firebaseConfig);

 

  const provider = new GoogleAuthProvider();

    provider.setCustomParameters ({

        prompt:"select_account"

    });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);