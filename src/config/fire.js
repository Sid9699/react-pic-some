import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2eIbxLu5KC2zL_7JFem33PXnt3FRbO5o",
    authDomain: "pic-some.firebaseapp.com",
    databaseURL: "https://pic-some.firebaseio.com",
    projectId: "pic-some",
    storageBucket: "pic-some.appspot.com",
    messagingSenderId: "557719856117",
    appId: "1:557719856117:web:aa9b88f6e8eafde0e076bc"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire