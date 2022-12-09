import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb1GndPEtqOnNGNVZ4chTVIxyvGFE2GtI",
  authDomain: "bible-calendar-df919.firebaseapp.com",
  projectId: "bible-calendar-df919",
  storageBucket: "bible-calendar-df919.appspot.com",
  messagingSenderId: "1061918200791",
  appId: "1:1061918200791:web:62b3a9041dbb277809f192",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export function signInWithGoogle () {
    signInWithPopup(auth, provider).then((result) => {
        const email = result.user.email;
        const profilePicture = result.user.photoURL;

        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);
    }).catch((error) => console.log(error))
}