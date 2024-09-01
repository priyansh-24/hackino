import React from 'react'
import './Menu.css'
import {Link,NavLink} from 'react-router-dom'
 
function Menu() {
  return (
    <>

    <div className="Menu-container">
        <div className="a-tags">
      <Link to='home'  className="Home-btn">Home </Link> 
        <Link to='community' className="Community-btn">Clubs</Link>
        <Link to='chat' className="Chat-btn">Projects</Link>
        <Link to='search' className="Search-btn">Search</Link>
        <Link to='hprofile' className="HProfile-btn">Profile</Link>
        </div>
        <div className="Post-btn">
            <button className="P-btn">Logout</button>
        </div>
    </div>

    </>
  )
}

export default Menu