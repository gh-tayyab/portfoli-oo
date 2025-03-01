import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0zK2FP26IPfIDuoaEkHJ9RSl95c8laSQ",
  authDomain: "portfolio-55fea.firebaseapp.com",
  projectId: "portfolio-55fea",
  storageBucket: "portfolio-55fea.firebasestorage.app",
  messagingSenderId: "89212754639",
  appId: "1:89212754639:web:856b4230793a7e1d5eb5ba",
  measurementId: "G-KD2XJ8YZDX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
