import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCRb6sLrY4aahZJn_1081Fq4DxT4gJgHQ",
  authDomain: "chat-react-application-codepth.firebaseapp.com",
  projectId: "chat-react-application-codepth",
  storageBucket: "chat-react-application-codepth.appspot.com",
  messagingSenderId: "257575776050",
  appId: "1:257575776050:web:89bd81de2529305ee2b12b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
