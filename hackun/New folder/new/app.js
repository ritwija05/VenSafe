  
  // Initialize Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  
  var firebaseConfig = {
    apiKey: "AIzaSyBZM5yd2kw5C2tFYqNS2nZoe8Vur-WR3qI",
    authDomain: "signup-form-27018.firebaseapp.com",
    projectId: "signup-form-27018",
    storageBucket: "signup-form-27018.appspot.com",
    messagingSenderId: "981807494203",
    appId: "1:981807494203:web:da2eb7ac7d2ba1a869181e",
    measurementId: "G-J7LZMSYD64"
  };
  let signupBtn = document.getElementById("signupBtn");
  let signinBtn = document.getElementById("signinBtn");
  let nameField = document.getElementById("nameField");
  let title = document.getElementById("title");
  
  signinBtn.onlick=function(){
      nameField.style.maxHeight = "0";
      title.innerHTML = "Sign In";
      signupBtn.classList.add("sign-btn");
      signinBtn.classList.remove("sign-btn");
  };
  
  signupBtn.onclick=function(){
      nameField.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("sign-btn");
      signinBtn.classList.add("sign-btn");
  };
  
  // Import the functions you need from the SDKs you need
 // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  //import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  