const firebase=require('firebase')
var firebaseConfig = {
  //  provide your firebaseConfig
  };
  // Initialize Firebase
 const db= firebase.initializeApp(firebaseConfig).firestore();
 module.exports=db