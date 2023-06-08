  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZM5yd2kw5C2tFYqNS2nZoe8Vur-WR3qI",
    authDomain: "signup-form-27018.firebaseapp.com",
    projectId: "signup-form-27018",
    storageBucket: "signup-form-27018.appspot.com",
    messagingSenderId: "981807494203",
    appId: "1:981807494203:web:da2eb7ac7d2ba1a869181e",
    measurementId: "G-J7LZMSYD64"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth()

  //getting all the objects of html
  var firstname=document.getElementById("firstname")
  var lastname=document.getElementById("firstname")
  var email=document.getElementById("Email")
  var passwords=document.getElementById("password")
  
  windows.signup=function(e){
     e.preventDefault();
     var obj={
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
     }
     createUserWithEmailAndPassword(auth, obj.email,obj.password)
       .then(function(success){
        alert("Signup Successfully")
       })
       .catch(function(err){
        alert("error" + err)
       })
       console.log(obj)

  }
  const analytics = getAnalytics(app);