
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL2xy2wlQ2c1akSAeYhYEG0dXThCXJzms",
  authDomain: "loginotp-611df.firebaseapp.com",
  projectId: "loginotp-611df",
  storageBucket: "loginotp-611df.appspot.com",
  messagingSenderId: "986918936503",
  appId: "1:986918936503:web:89c36987fc45affe905232",
  measurementId: "G-XNX5NSG205"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)