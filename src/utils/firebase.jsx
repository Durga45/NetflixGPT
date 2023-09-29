// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM_g-SsdsPNSYi0nyVxkDGJYhG2PZEfoQ",
  authDomain: "netflixgpt-631af.firebaseapp.com",
  projectId: "netflixgpt-631af",
  storageBucket: "netflixgpt-631af.appspot.com",
  messagingSenderId: "90975549750",
  appId: "1:90975549750:web:18ad467e649e5bada11b97",
  measurementId: "G-F78NG7BJGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
