import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

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
export const db = getFirestore(app);


async function setpfp(profilePicture) {
    await setDoc(doc(db, "Groups", "test-group", "Users", "test-user"), {
        profilePicture: profilePicture,
    });
}