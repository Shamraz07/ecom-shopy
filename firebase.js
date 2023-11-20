import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


const firebaseConfig = { 
  apiKey: "AIzaSyAiRG6dDJD8f9lH9KCGYVe1Q8gUm4nHF1Y",
authDomain: "mern-18.firebaseapp.com",
projectId: "mern-18",
storageBucket: "mern-18.appspot.com",
messagingSenderId: "744145326955",
appId: "1:744145326955:web:e28d217098e2383abdb22e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//export auth and google provider

export const auth = firebase.auth()
export const googleAuthProvider= new firebase.auth.GoogleAuthProvider()