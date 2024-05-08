import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDhVOuLjWkh4O3i5TLTa4F2aPvVeWP6X5k",
    authDomain: "movie-ee6fd.firebaseapp.com",
    projectId: "movie-ee6fd",
    storageBucket: "movie-ee6fd.appspot.com",
    messagingSenderId: "362274720925",
    appId: "1:362274720925:web:c3c72bdc2c4bef1ab39874",
    measurementId: "G-CTN7W4TECK"
  };


  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage ;