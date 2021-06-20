import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDlgmzYXEKwpGZSV3jJyQBNHQTVT7xE9VM",
    authDomain: "reactfinal-27b75.firebaseapp.com",
    projectId: "reactfinal-27b75",
    storageBucket: "reactfinal-27b75.appspot.com",
    messagingSenderId: "313147306557",
    appId: "1:313147306557:web:6444701003ce528dbff054"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;