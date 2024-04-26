// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH8DkqRMyIIlG3yc7DeIjiCBxrT7TfHpc",
  authDomain: "b9-a10-client-side.firebaseapp.com",
  projectId: "b9-a10-client-side",
  storageBucket: "b9-a10-client-side.appspot.com",
  messagingSenderId: "329987590033",
  appId: "1:329987590033:web:7def9f7b9fd2dafa98bc30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;