import React from 'react';
import './Post.css';

const Post = ({ profileImg, name, jobTitle, content }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-image">
          <img src={profileImg} alt={`${name}'s profile`} className="profile-img" />
        </div>
        <div className="post-info">
          <h2 className="post-name">{name}</h2>
          <p className="post-jobTitle">{jobTitle}</p>
        </div>
      </div>
      <div className="post-content">
        {content}
      </div>
      <div className="post-suggestions">
        Suggestions:
      </div>
    </div>
  );
};

export default Post;
