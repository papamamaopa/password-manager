import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDblQ_9fUpjpOKhWcyJHJW8UUBDUhX7LyE",
    authDomain: "pwmanager-7447c.firebaseapp.com",
    databaseURL: "https://pwmanager-7447c.firebaseio.com",
    projectId: "pwmanager-7447c",
    storageBucket: "pwmanager-7447c.appspot.com",
    messagingSenderId: "914119518643",
    appId: "1:914119518643:web:32ab8d3e6ef4a5b5afc3c6",
    measurementId: "G-P75ETXPY78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();

export default firebaseApp
