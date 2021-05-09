import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBO5EzttYBFctruaJqP6Wny0SSnDNZccsc",
  authDomain: "disney-clone-c322f.firebaseapp.com",
  projectId: "disney-clone-c322f",
  storageBucket: "disney-clone-c322f.appspot.com",
  messagingSenderId: "220778441507",
  appId: "1:220778441507:web:6a7065d467d75f2c363a96",
  measurementId: "G-WDS78HPF1B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
