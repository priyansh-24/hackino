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
        <Link to='chat' className="Chat-btn">Chats</Link>
        <Link to='branch' className="Branch-btn">Branch</Link>
        <Link to='setting' className="Setting-btn">Setting</Link>
        </div>
        <div className="Post-btn">
            <button className="P-btn">Logout</button>
        </div>
    </div>

    </>
  )
}

export default Menu