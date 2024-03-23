import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAV4AUIHiql2JIFTSRyjx4XsSI7j-WYuSg",
  authDomain: "react-notes-7d315.firebaseapp.com",
  projectId: "react-notes-7d315",
  storageBucket: "react-notes-7d315.appspot.com",
  messagingSenderId: "791577499837",
  appId: "1:791577499837:web:c6fa2921a5cce6a3fb3fd4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const notesCollection=collection(db, "notes")