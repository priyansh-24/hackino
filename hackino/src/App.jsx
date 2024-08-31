import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Community from './Components/Community/Community';
import Branch from './Components/Branch/Branch';
import HProfile from './Components/HProfile/HProfile';
import Home from './Home';
import Chat from './Components/Chats/Chat';
import Layout from './Layout';
import HomeSec from './HomeSec';
import LoadingScreen from './loader'; // Import the loading screen component
import './App.css'; // Import the CSS file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to change the loading state after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // If the app is loading, show the loading screen
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* Nested routes under Layout */}
        <Route path="/layout" element={<Layout />}>
          <Route index element={<HomeSec />} />
          <Route path="home" element={<HomeSec />} />
          <Route path="community" element={<Community />} />
          <Route path="chat" element={<Chat />} />
          <Route path="hprofile" element={<HProfile />} />
          <Route path="branch" element={<Branch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
