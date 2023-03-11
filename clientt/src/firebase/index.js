import { initializeApp } from "firebase/app";
// import { getAuth, connectAuthEmulator } from "firebase/auth";
// import { connectFunctionsEmulator, getFunctions } from "firebase/functions"
const firebaseConfig = {
  // apiKey: "AIzaSyDbC5C7OBTXulFY8omsTGqI1XpRfcJ1KdE",
  // authDomain: "test-d131b.firebaseapp.com",
  // projectId: "test-d131b",
  // storageBucket: "test-d131b.appspot.com",
  // messagingSenderId: "964160011114",
  // appId: "1:964160011114:web:143cbd9e71f9b42fb1c313",
  apiKey: "AIzaSyDD6JFUog-xt_wKe4EEqr6H8RQsXUJGDRM",
  authDomain: "testt-ab297.firebaseapp.com",
  projectId: "testt-ab297",
  storageBucket: "testt-ab297.appspot.com",
  messagingSenderId: "216067792496",
  appId: "1:216067792496:web:777964d06a1d9fd1e1deb5",
};

const app = initializeApp(firebaseConfig);
// connectAuthEmulator(getAuth(), "http://127.0.0.1:9099");
// connectFunctionsEmulator(getFunctions(), "http://127.0.0.1:5001");
export default app