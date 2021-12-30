// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDbO6E0_l2N-A2PnIxbeg9mWSL3LItwL-A",
  authDomain: "kwitter-project-c4277.firebaseapp.com",
  databaseURL: "https://kwitter-project-c4277-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-c4277",
  storageBucket: "kwitter-project-c4277.appspot.com",
  messagingSenderId: "1059963976143",
  appId: "1:1059963976143:web:39b0bc663df12cceb2faba",
  measurementId: "G-8Y70Q7XJEF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Name");
room_name = localStorage.getItem("addroomname");
function send() {
    Message = document.getElementById("send_input").value ;
    firebase.database().ref(Room_name).push({
        name:Username, 
        message:Message,
        likes:0});
    document.getElementById("send_input").value="";
    }