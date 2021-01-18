import firebase from 'firebase';

var firebaseConfig = {
    //don't push apiKey
    
    authDomain: "sign-in-18009.firebaseapp.com",
    projectId: "sign-in-18009",
    storageBucket: "sign-in-18009.appspot.com",
    messagingSenderId: "286069440871",
    appId: "1:286069440871:web:7744211e9942f094236fc2"
  };
  // Initialize Firebase

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;