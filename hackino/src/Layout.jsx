import React from 'react'
import Header from './Components/Header/Header.jsx';
import './Layout.css'
import Data from './Components/Data/Data.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Calendar from './Components/Calendar/Calendar.jsx';
import Noti from './Components/noti/noti.jsx';
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <> 
    <div className="window">
    <Header/>
   <div className="Main-Container centre">
    <div className="left-sidebar">
      <div className="data-details">
    <Data/>
    </div>
    <div className="menu-details">
    <Menu/>
    </div>
   
    </div>
    <div className="In-container">
    <Outlet/>
    
    </div>
    <div className="right-sidebar">
      <div className="cali">
        <Calendar/>
      </div>
      <div className="noti">
        <Noti/>
      </div>
    </div>
    </div>
    </div>

    </>

  )
}

export default Layout