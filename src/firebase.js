import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIhGovTd0rUzFLXELAgPiulcbs8eWnFlw",
  authDomain: "chat-app-79d92.firebaseapp.com",
  projectId: "chat-app-79d92",
  storageBucket: "chat-app-79d92.appspot.com",
  messagingSenderId: "84381478804",
  appId: "1:84381478804:web:de49c89d71e39da19ee981"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
