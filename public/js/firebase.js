let firebaseConfig = {
    apiKey: "AIzaSyAuHJmJvQ52d80NCV4SHusHuda90xB8y0U",
    authDomain: "faceblog-7268a.firebaseapp.com",
    projectId: "faceblog-7268a",
    storageBucket: "faceblog-7268a.appspot.com",
    messagingSenderId: "526473747537",
    appId: "1:526473747537:web:efb8ef1c8d6516820c6c70",
    measurementId: "G-P04W0R2S1Z"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();