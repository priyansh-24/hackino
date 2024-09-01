import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

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
const storage = getStorage(app);

function Profile() {
  const [profilePicture, setProfilePicture] = useState('Background.jpg');
  const [userName, setUserName] = useState('123XX346');
  const [userContact, setUserContact] = useState('94371XXXXX');
  const [userTitle, setUserTitle] = useState('Full Stack Developer');
  const [userSkills, setUserSkills] = useState('HTML, CSS, JavaScript, React, Node.js');

  const navigate = useNavigate();

  const handleSignup = () => {
    const item = localStorage.getItem('uid');
    const userRef = ref(db, 'users/' + item);
    update(userRef, {
      username: userName,
      userContact: userContact,
      bio: userTitle,
    })
    .then(() => {
      console.log("Data successfully written to firebase!");
      navigate('/layout');
    })
    .catch((error) => {
      console.error("Error writing data: ", error);
    });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageReference = storageRef(storage, `profile_pictures/${file.name}`);
      uploadBytes(storageReference, file)
        .then((snapshot) => {
          console.log('Uploaded a blob or file!', snapshot);
          return getDownloadURL(snapshot.ref);
        })
        .then((downloadURL) => {
          console.log('File available at', downloadURL);
          setProfilePicture(downloadURL);

          const item = localStorage.getItem('uid');
          const userRef = ref(db, 'users/' + item);
          return update(userRef, { profilePicture: downloadURL });
        })
        .then(() => {
          console.log('Profile picture updated in Firebase Database');
         
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSignup();

  };

  return (
    <div className="mani-content">
      <div className="container">
        <div className="profile-card">
          <form id="profileForm" onSubmit={handleFormSubmit}>
            <div className="profile-header">
              <h1 className="profile-tag">Profile</h1>
              <img src={profilePicture} alt="Profile" className="profile-picture" />
              <input type="file" id="changePictureInput" style={{ display: 'none' }} onChange={handlePictureChange} />
              <button type="button" id="changePictureBtn" onClick={() => document.getElementById('changePictureInput').click()}>Change Picture</button>
            </div>

            <div className="profile-details">
              <h3>Details</h3>
              <label htmlFor="userName">Roll No</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <label htmlFor="userContact">Contact:</label>
              <input
                type="text"
                id="userContact"
                name="userContact"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
              />

              <label htmlFor="userTitle">Bio:</label>
              <input
                type="text"
                id="userTitle"
                name="userTitle"
                value={userTitle}
                onChange={(e) => setUserTitle(e.target.value)}
              />
            </div>

            <div className="profile-skills">
              <h3>Skills</h3>
              <input
                type="text"
                id="userSkills"
                name="userSkills"
                placeholder="e.g., HTML, CSS, JavaScript"
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
              />
            </div>

            <div className="profile-actions">
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
