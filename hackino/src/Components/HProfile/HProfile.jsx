import React, { useState } from 'react';
import './HProfile.css';

const HProfile = () => {
  const [hederImage, setHeaderImage] = useState();
  const [profileImage, setProfileImage] = useState();
  const [posts, setPosts] = useState([
    'First post!',
    'Loving the new React features.',
    'Check out my latest blog post.',
  ]);

  const handleHeaderChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setHeaderImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="heder">
        <img
          src={hederImage}
          alt=""
          className="heder-image"
          onClick={() => document.getElementById('heder-upload').click()}
        />
        <input
          type="file"
          id="heder-upload"
          className="heder-upload"
          onChange={handleHeaderChange}
          accept="image/*"
        />
      </div>

      {/* Profile Info Section */}
      <div className="profile-info">
        <div className="profile-top">
          <img
            src={profileImage}
            alt=""
            className="profile-pic"
            onClick={() => document.getElementById('profile-upload').click()}
          />
          <div className="profile-details">
            <div className="name">Hirdesh Meena</div>
            <div className="email">Hirdesh@1234</div>
          </div>
        </div>
        <input
          type="file"
          id="profile-upload"
          className="profile-upload"
          onChange={handleProfileChange}
          accept="image/*"
        />
        <div className="skills">App Development</div>
        <div className="clubs">noo Club</div>
        <div className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odio!</div>
      </div>

      {/* Post Section */}
      <div className="post-section">
        <div className="posts">Posts</div>
        <div className="post-header">
        <div className="post-image">
          <img src="\src\Components\HProfile\img.jpg" alt={`${name}'s profile`} className="profile-img" />
        </div>
        <div className="post-info">
          <h2 className="post-name">meena</h2>
          <p className="post-jobTitle">app developer</p>
        </div>
      </div>
      <div className="post-content">
        {content}
      </div>
      <div className="post-suggestions">
        Suggestions:
      </div>
      </div>
    </div>
  );
};

export default HProfile;