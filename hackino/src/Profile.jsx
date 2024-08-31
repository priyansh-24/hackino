import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";


function Profile() {
  const [profilePicture, setProfilePicture] = useState();
  const [userName, setUserName] = useState('John Doe');
  const [userContact, setUserContact] = useState('94371XXXXX');
  const [userTitle, setUserTitle] = useState('Full Stack Developer');
  const [userSkills, setUserSkills] = useState('HTML, CSS, JavaScript, React, Node.js');

  const navigate = useNavigate();

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Profile Updated:\nName: ${userName} \nContact: ${userContact}\nTitle: ${userTitle}\nSkills: ${userSkills}`);
    navigate('/layout');
  };

  return (
      <div className="container">
        <div className="profile-card">
          <form id="profileForm" onSubmit={handleFormSubmit}>
            <div className="profile-header">
              <h1 className="profile-tag">Profile</h1>
              <img src={profilePicture} alt="" className="profile-picture" />
              <input type="file" id="changePictureInput" style={{ display: 'none' }} onChange={handlePictureChange} />
              <button type="button" id="changePictureBtn" onClick={() => document.getElementById('changePictureInput').click()}>Change Picture</button>
            </div>

            <div className="profile-details">
              <h3>Details</h3>
              <label htmlFor="userName">Name:</label>
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

              <label htmlFor="userTitle">Title:</label>
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
  );
}

export default Profile;
