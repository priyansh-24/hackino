import React from 'react';

import './Home.css';

function Home() {
  return (
    <>
    <div className="baap">
  <header className="header">
    <a href="#" className="logo">
      <img src="src\Photo\newlogo.png" alt="" />
    </a>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#contacts">Contacts</a>
      <a href="#blogs">Blogs</a>
    </nav>
    <div className="icons">
      <a href="/login" className="btn" id="Loginbtn">
        Login
      </a>
      <div className="fas fa-bars" id="menu-btn" />
    </div>
  </header>
  <section className="home" id="home">
    <div className="content">
      <h3>Welcome to Connexus</h3>
      <p>
        Join thousands of professionals and businesses around the campus who are
        using Connexus to build meaningful connections, discover new
        opportunities, and advance their careers.
      </p>
      <a href="/login" className="btn">
        Start Now
      </a>
    </div>
  </section>
  <section className="about" id="about">
    <h1 className="heading">
      <span>about</span> us{" "}
    </h1>
    <div className="row">
      <div className="image">
        <img src="src\Photo\NIT-rourkela1.jpg" />
      </div>
      <div className="content">
        <h3>what makes our website special</h3>
        <p>
        At Connexus, we believe in the power of connection. Our platform is dedicated to uniting professionals from every corner of the campus, enabling them to expand their networks, share knowledge, and seize opportunities that can transform their careers.
        </p>
        <p>
        We are not just a social network; we are a community where ideas ignite, collaborations flourish, and careers are built. With every connection, we empower individuals and businesses to reach new heights, fostering a world where everyone has the chance to succeed. 
        </p>
        <a href="#" className="btn">
          learn more
        </a>
      </div>
    </div>
  </section>
  </div>
</>
  );
}

export default Home;
