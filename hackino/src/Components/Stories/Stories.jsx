import React, { useState,useEffect } from 'react';
import './Stories.css'; // Import the custom CSS


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set,get, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";





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


const Stories = () => {
  const [users,setUsers] =  useState([]);

  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    // Mark story as seen
    story.seen = true;
  };
  useEffect( ()=>{
    const uref= ref(db,'stories');
    get(uref).then((snapshot)=>{
      if(snapshot.exists()){
        const uarry = Object.entries(snapshot.val()).map(([id,data])=>({
          id,
          ...data,
        }));
        setUsers(uarry);
      }else{
        console.log('no story fetch ');
      }
    }).catch((error)=>{
      console.error(error);
    });
  })

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="stories-container">
      {users.map((story) => (
        <div
          key={story.id}
          className={`story-item ${story.seen ? 'seen' : ''}`}
          onClick={() => handleStoryClick(story)}
        >
          <div className="story-image">
            <img  src={story.img} alt="" />
          </div>
          <span className="story-username">{story.name}</span>
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
