import React, { useEffect, useState } from 'react';
import './Data.css';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

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

function Data() {
  // Initialize state to store the UID, profile picture URL, and name
  const [uid, setUid] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');

  // Function to retrieve data from Firebase
  function getData() {
    const id = localStorage.getItem('uid');
    const dbRef = ref(getDatabase());

    // Get data from the database
    get(child(dbRef, 'users/' + id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const n = snapshot.child('name').val();
          const pp = snapshot.child('profilePicture').val();
          
          // Update state with the retrieved data
          setName(n);
          setProfilePicture(pp);
        }
      })
      .catch((error) => {
        console.error("Error retrieving data: ", error);
      });
  }

  // Use useEffect to run once on component mount and retrieve data
  useEffect(() => {
    const storedUid = localStorage.getItem('uid');
    if (storedUid) {
      setUid(storedUid);
      getData(); // Retrieve data after setting UID
    }
  }, []);

  return (
    <div className="user-data">
      <div className="user-photo">
        {/* Use profilePicture state for the img src */}
        <img src={profilePicture} className="user-image" alt="User" />
      </div>
      <div className="user-emna">
        <h2 id="uid">{name || 'oiuytr'}</h2> {/* Fallback if name is not available */}
        <p>App Developer</p>
      </div>
    </div>
  );
}

export default Data;
