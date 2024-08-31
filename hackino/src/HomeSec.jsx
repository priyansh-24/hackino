import React from 'react'
import Stories from './Components/Stories/Stories.jsx';
import PostContainer from './Components/FP/Fp.jsx';
function HomeSec() {
  return (
    <>
     <div className="story">
      <Stories/>
      </div>
      <div className="post-section">
    <PostContainer/>
      </div>
      </>
  )
}

export default HomeSec