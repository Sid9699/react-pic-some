import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3qlLBLUlxr12MZ1EZg1OD-u5Yv3LyO0g",
  authDomain: "picsome-a7a9f.firebaseapp.com",
  projectId: "picsome-a7a9f",
  storageBucket: "picsome-a7a9f.appspot.com",
  messagingSenderId: "527481958059",
  appId: "1:527481958059:web:4f1d97c6af8de5f6e711ee",
  measurementId: "G-8F8TK45KTF",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
