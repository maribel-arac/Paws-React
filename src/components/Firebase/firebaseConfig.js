import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDxLGG753ZzAjG38sbhBl-xPhjsg-Q2wQM",
    authDomain: "social-network-react-c98ba.firebaseapp.com",
    databaseURL: "https://social-network-react-c98ba.firebaseio.com",
    projectId: "social-network-react-c98ba",
    storageBucket: "",
    messagingSenderId: "833472413436",
    appId: "1:833472413436:web:d0bc1c6f744ada01"
  };

firebase.initializeApp(config);

export default firebase;