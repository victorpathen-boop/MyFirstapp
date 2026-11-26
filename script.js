firebaseConfig = {
  apiKey: "AIzaSyCTRAAbxkxPSuF9U7kAvB3-ip8QOWpjen4",
  authDomain: "clev-1bbb1.firebaseapp.com",
  projectId: "clev-1bbb1",
  storageBucket: "clev-1bbb1.firebasestorage.app",
  messagingSenderId: "146166400489",
  appId: "1:146166400489:web:1572319dd138876847b778",
  measurementId: "G-Q8CQM8ZKP3"
};function login() {

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email && password){

document.getElementById("message").innerHTML =
"Login successful";

}else{

document.getElementById("message").innerHTML =
"Enter your details";

}

}
