import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDimzR25rc2PEZW0JLodoWaT5HsgIXMmno",
  authDomain: "clone-ae5f5.firebaseapp.com",
  databaseURL: "https://clone-ae5f5.firebaseio.com",
  projectId: "clone-ae5f5",
  storageBucket: "clone-ae5f5.appspot.com",
  messagingSenderId: "753509707084",
  appId: "1:753509707084:web:4ac989ea9984e350d133e9",
  measurementId: "G-Y2P85H68WF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
