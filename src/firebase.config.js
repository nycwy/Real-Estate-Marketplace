import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl1RndYtoDBNQ677cnrPPWyEY2TsGFXsg",
    authDomain: "real-estate-market-89912.firebaseapp.com",
    projectId: "real-estate-market-89912",
    storageBucket: "real-estate-market-89912.firebasestorage.app",
    messagingSenderId: "817450686324",
    appId: "1:817450686324:web:7b22018c2dbe82a1c8fe21"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()