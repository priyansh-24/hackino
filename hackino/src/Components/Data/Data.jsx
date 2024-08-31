import React, { useEffect, useState } from 'react';
import './Data.css';

function Data() {
  // Initialize state to store the UID
  const [uid, setUid] = useState('');

  // Use useEffect to run once on component mount
  useEffect(() => {
    // Retrieve UID from local storage and update the state
    const storedUid = localStorage.getItem('uid');
    if (storedUid) {
      setUid(storedUid);
    }
  }, []); 

  return (
    <div className="user-data">
      <div className="user-photo">
        <img src="\src\Components\Data\Background.jpg" className="user-image" alt="User" />
      </div>
      <div className="user-emna">
        <h2 id="uid">{uid || 'oiuytr'}</h2> {/* Fallback if UID is not available */}
        <p>App Developer</p>
      </div>
    </div>
  );
}

export default Data;