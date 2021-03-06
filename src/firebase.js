import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDI8xAG2heGbMbo0qYQgLwWrShnKS7bFJs",
    authDomain: "slack-clone-challenge-ce421.firebaseapp.com",
    projectId: "slack-clone-challenge-ce421",
    storageBucket: "slack-clone-challenge-ce421.appspot.com",
    messagingSenderId: "326758552977",
    appId: "1:326758552977:web:72b95b6229bf294be87630"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig );

  const db = firebaseApp.firestore();

  export default db;