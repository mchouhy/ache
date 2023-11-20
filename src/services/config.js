import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA3SeyqH-Yq4GZryvR43EUReEjdj2cZYLg",
    authDomain: "ache-store.firebaseapp.com",
    projectId: "ache-store",
    storageBucket: "ache-store.appspot.com",
    messagingSenderId: "411282411",
    appId: "1:411282411:web:646cd28e4e33398ba0c7ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
