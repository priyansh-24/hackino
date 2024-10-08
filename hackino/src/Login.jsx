import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set,get,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";





// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPJyvRiNf7Ad1iRrpMx0_EDog2TIFtES8",
  authDomain: "connexus-f57a6.firebaseapp.com",
  projectId: "connexus-f57a6",
  storageBucket: "connexus-f57a6.appspot.com",
  messagingSenderId: "345541602561",
  appId: "1:345541602561:web:dc3c16415450136e7c7f00",
  measurementId: "G-HM96XZ1SWC"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function Login() {
  const handleSignup = () => {

    const userRef = ref(db, 'users/' + username);
    set(userRef, {
      name: username,
      email: signupEmail,
      password: signupPassword,
    })
    .then(() => {
      console.log("Data successfully written to firebase!");
      // Set an item in Local Storage
      localStorage.setItem('uid', username);
      navigate('/profile');

    })
    .catch((error) => {
      console.error("Error writing data: ", error);
    });
  
  };
  function getData() {
    // Reference to the path from where you want to read data
    const dbRef = ref(getDatabase());

    // Get data from the database
    get(child(dbRef, 'users/'+loginEmail))
        .then((snapshot) => {
            if (snapshot.exists()) {
              if(loginPassword==snapshot.child('password').val()){
                navigate('/layout');
              }
              else {
               alert('password incorrect');
              
            }
                console.log("Data retrieved from the database:", snapshot.val());
             } 
            else {
                console.log("No data available at the specified path.");
              
            }
        })
        .catch((error) => {
            console.error("Error retrieving data from the database:", error);
            document.getElementById('output').innerText = "Error retrieving data from the database.";
        });
}

  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = (event) => {
    event.preventDefault();

    if(username!=""&&signupEmail!=""&&signupPassword!=""){
      handleSignup();
      
    }
    else{
      alert('please fill all Detail to Sign up!');
    
    }
   
    
    

    
  };

  const handleLoginClick = (event) => {
    event.preventDefault(); 
    getData()
    console.log("Login Data:");
    console.log("Username:", loginEmail);
    console.log("Password:", loginPassword);
  };

  return (
    <>
      <div className="top">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label class="login-label" htmlFor="chk" aria-hidden="true">Sign up</label>
              <input
               class="input-btn"
                type="text"
                name="username"
                placeholder="User name"
                required=""
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
              class="input-btn"
                type="email"
                name="signupEmail"
                placeholder="Email(NITRKL)"
                required=""
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
               class="input-btn"
                type="password"
                name="signupPassword"
                placeholder="Password"
                required=""
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button class="bttn" onClick={handleSignupClick}>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label class="login-label" htmlFor="chk" aria-hidden="true">Login</label>
              <input
               class="input-btn"
                type="email"
                name="loginEmail"
                placeholder="Email"
                required=""
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
               class="input-btn"
                type="password"
                name="loginPassword"
                placeholder="Password"
                required=""
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button class="bttn" onClick={handleLoginClick}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;