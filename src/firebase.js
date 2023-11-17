import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3rWVF-tQyhe2Uend9OFEnIcMl1Nenb9U",
  authDomain: "instagram-clone-a2c2f.firebaseapp.com",
  projectId: "instagram-clone-a2c2f",
  storageBucket: "instagram-clone-a2c2f.appspot.com",
  messagingSenderId: "593313237270",
  appId: "1:593313237270:web:b7c1e1addda0eb7a0a2837",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();