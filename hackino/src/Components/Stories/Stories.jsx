import React, { useState } from 'react';
import './Stories.css'; // Import the custom CSS


const storiesData = [
  { id: 1, username: 'Piyush',  seen: false },
  { id: 2, username: 'Meena',  seen: false },
  { id: 4, username: 'Meena',  seen: false },
  { id: 5, username: 'Meena',  seen: false },
  { id: 6, username: 'Meena',  seen: false },
  { id: 7, username: 'Meena',  seen: false },
  { id: 8, username: 'Meena',  seen: false },
  { id: 9, username: 'Meena',  seen: false },
  { id: 10, username: 'Meena',  seen: false },
  { id: 11, username: 'Meena',  seen: false },
  { id: 12, username: 'Meena', seen: false },
  { id: 13, username: 'Meena', seen: false },
  { id: 14, username: 'Meena',  seen: false },
  { id: 15, username: 'Meena',  seen: false },
  { id: 16, username: 'Meena',  seen: false },
  { id: 17, username: 'Meena',  seen: false },
  { id: 18, username: 'Meena',  seen: false },


];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    // Mark story as seen
    story.seen = true;
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="stories-container">
      {storiesData.map((story) => (
        <div
          key={story.id}
          className={`story-item ${story.seen ? 'seen' : ''}`}
          onClick={() => handleStoryClick(story)}
        >
          <div className="story-image">
            <img  src={story.img} alt="" />
          </div>
          <span className="story-username">{story.username}</span>
        </div>
      ))}

      {selectedStory && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img  src={selectedStory.img} alt="" />
            <p>{selectedStory.username}'s Story</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
