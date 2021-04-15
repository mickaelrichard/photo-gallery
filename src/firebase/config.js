import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAyAR8M2YNCwBrGHqP_7jnDOCGHl5ptElI",
  authDomain: "firegram-c2164.firebaseapp.com",
  projectId: "firegram-c2164",
  storageBucket: "firegram-c2164.appspot.com",
  messagingSenderId: "468857281921",
  appId: "1:468857281921:web:02d573c8f4cbaca6ee5c80",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
