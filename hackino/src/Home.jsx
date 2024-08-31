import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-baap">
        <header className="home-header">
          <a href="#" className="home-logo">
            <img src="src\\Photo\\newlogo.png" alt="Logo" />
          </a>
          <nav className="home-navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
          </nav>
          <div className="home-icons">
            <a href="/login" className="home-btn" id="home-loginbtn">
              Login
            </a>
            <div className="home-fas home-fa-bars" id="home-menu-btn" />
          </div>
        </header>
        
        <section className="home-section" id="home">
          <div className="home-content">
            <h3>Welcome to Connexus</h3>
            <p>
              Join thousands of professionals and businesses around the campus who are
              using Connexus to build meaningful connections, discover new
              opportunities, and advance their careers.
            </p>
            <a href="/login" className="home-btn">
              Start Now
            </a>
          </div>
        </section>
        
        <section className="home-about" id="about">
          <h1 className="home-heading">
            <span>about</span> us
          </h1>
          <div className="home-row">
            <div className="home-image">
              <img src="src\\Photo\\NIT-rourkela1.jpg" alt="About Us" />
            </div>
            <div className="home-content">
              <h3>what makes our website special</h3>
              <p>
                At Connexus, we believe in the power of connection. Our platform is dedicated to uniting professionals from every corner of the campus, enabling them to expand their networks, share knowledge, and seize opportunities that can transform their careers.
              </p>
              <p>
                We are not just a social network; we are a community where ideas ignite, collaborations flourish, and careers are built. With every connection, we empower individuals and businesses to reach new heights, fostering a world where everyone has the chance to succeed.
              </p>
              <a href="#" className="home-btn">
                learn more
              </a>
            </div>
          </div>
        </section>

        <section className="home-contact" id="contacts">
          <h1 className="home-heading">
            <span>Contact</span> Us
          </h1>
          <div className="home-contact-form">
            <form>
              <div className="home-input-box">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="home-input-box">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="home-input-box">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <div className="home-input-box">
                <input type="submit" value="Send Message" className="home-btn" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
