import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = (event) => {
    event.preventDefault();
    console.log("Signup Data:");
    console.log("Username:", username);
    console.log("Email:", signupEmail);
    console.log("Password:", signupPassword);

    // Navigate to the profile page after handling the sign-up
    navigate('/profile');
  };

  const handleLoginClick = (event) => {
    event.preventDefault(); 
    console.log("Login Data:");
    console.log("Email:", loginEmail);
    console.log("Password:", loginPassword);
    navigate('/layout');
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

export default Login;
