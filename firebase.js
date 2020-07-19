const firebase=require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyB81weo1DEyW-fsIQW8-vig8kkY14aufAY",
    authDomain: "my-app-bf141.firebaseapp.com",
    databaseURL: "https://my-app-bf141.firebaseio.com",
    projectId: "my-app-bf141",
    storageBucket: "my-app-bf141.appspot.com",
    messagingSenderId: "145964966489",
    appId: "1:145964966489:web:d867a03481b2a173a88748",
    measurementId: "G-WGKZNG82MK"
  };
  // Initialize Firebase
 const db= firebase.initializeApp(firebaseConfig).firestore();
 module.exports=db