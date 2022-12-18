// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyNxAMQhEdLDEUulaVYhvoa06HQuDjzks",
    authDomain: "flajooapp.firebaseapp.com",
    projectId: "flajooapp",
    storageBucket: "flajooapp.appspot.com",
    messagingSenderId: "836642125504",
    appId: "1:836642125504:web:fd1df98a4cdb4dabc8df25",
    measurementId: "G-LQKYQW4N3V"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();


export { auth };