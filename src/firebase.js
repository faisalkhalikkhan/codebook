import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY-xVdo2VZ06rOyGOZNWeikiBCNIEZis4",
  authDomain: "codebook-8c917.firebaseapp.com",
  projectId: "codebook-8c917",
  storageBucket: "codebook-8c917.appspot.com",
  messagingSenderId: "2116041107",
  appId: "1:2116041107:web:25af5f8e3ba11bcf6c5066",
  measurementId: "G-EVEJZDJZMF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;