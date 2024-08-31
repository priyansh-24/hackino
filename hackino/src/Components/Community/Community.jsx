// Community.jsx
import React, { useState, useEffect } from 'react';
import './Community.css';

const clubsData = [
  {
    name: 'Ml4E',
    posts: [
        {
            title: 'AI Hackathon',
            date: 'August 25, 2024',
            description: 'Participate in our AI Hackathon and showcase your skills in building machine learning models!',
            image: './Photo/Bg3.webp'
        },
        {
            title: 'Deep Learning Workshop',
            date: 'September 3, 2024',
            description: 'Join our hands-on workshop on deep learning techniques. Open to all skill levels.',
            image: 'path/to/deep-learning-workshop.jpg'
        }
    ]
},
{
    name: 'OpenCode',
    posts: [
        {
            title: 'Open Source Contribution Drive',
            date: 'September 5, 2024',
            description: 'Contribute to open-source projects and learn from experienced developers in the community.',
            image: 'path/to/open-source-contribution.jpg'
        },
        {
            title: 'Git & GitHub Essentials',
            date: 'September 10, 2024',
            description: 'Master the basics of Git and GitHub with our interactive workshop.',
            image: 'path/to/git-github-essentials.jpg'
        }
    ]
},
{
    name: 'Cyborg',
    posts: [
        {
            title: 'Robotics Competition',
            date: 'August 30, 2024',
            description: 'Get ready to compete in our annual robotics competition. Bring your bots and your best ideas!',
            image: 'path/to/robotics-competition.jpg'
        },
        {
            title: 'Arduino Workshop',
            date: 'September 8, 2024',
            description: 'Learn to build and program Arduino projects from scratch in this beginner-friendly workshop.',
            image: 'path/to/arduino-workshop.jpg'
        }
    ]
},
{
    name: 'APS',
    posts: [
        {
            title: 'Physics Quiz',
            date: 'September 2, 2024',
            description: 'Test your knowledge of physics in our challenging and fun quiz competition.',
            image: 'path/to/physics-quiz.jpg'
        },
        {
            title: 'Astrophotography Session',
            date: 'September 12, 2024',
            description: 'Capture stunning images of the night sky in our astrophotography session. No experience required!',
            image: 'path/to/astrophotography-session.jpg'
        }
    ]
},
{
    name: 'Webwiz',
    posts: [
        {
            title: 'Web Development Bootcamp',
            date: 'August 28, 2024',
            description: 'Kickstart your career in web development with our comprehensive bootcamp covering HTML, CSS, and JavaScript.',
            image: 'path/to/web-development-bootcamp.jpg'
        },
        {
            title: 'CSS Animation Tricks',
            date: 'September 6, 2024',
            description: 'Learn how to create eye-catching animations with CSS in this interactive session.',
            image: 'path/to/css-animation-tricks.jpg'
        }
    ]
},
{
    name: 'GTA',
    posts: [
        {
            title: 'Gaming Tournament',
            date: 'September 3, 2024',
            description: 'Compete in our gaming tournament featuring popular titles like FIFA, COD, and more. Prizes for winners!',
            image: 'path/to/gaming-tournament.jpg'
        },
        {
            title: 'Virtual Reality Experience',
            date: 'September 15, 2024',
            description: 'Dive into immersive virtual worlds with our VR experience event.',
            image: 'path/to/vr-experience.jpg'
        }
    ]
},
{
    name: 'GDSE',
    posts: [
        {
            title: 'App Development Challenge',
            date: 'August 29, 2024',
            description: 'Showcase your app development skills in our challenge. Winners get a chance to work with startups!',
            image: 'path/to/app-development-challenge.jpg'
        },
        {
            title: 'Design Sprint Workshop',
            date: 'September 9, 2024',
            description: 'Join us for a design sprint workshop where you’ll learn to rapidly prototype and test ideas.',
            image: 'path/to/design-sprint-workshop.jpg'
        }
    ]
}
];
function Community() {
  const [clubs, setClubs] = useState(clubsData);
  const [filteredClubs, setFilteredClubs] = useState(clubsData);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = clubs.filter(club =>
      club.name.toLowerCase().includes(searchTerm)
    );
    setFilteredClubs(filtered);
  };

  const handleClubClick = (club) => {
    setSelectedClub(club);
    setSelectedPosts(club.posts);
    setChatMessages([]); // Clear chat messages when switching clubs
    setActiveTab('posts'); // Reset to posts tab when selecting a new club
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChatInput = (event) => {
    setChatInput(event.target.value);
  };

  const handleSendChat = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { sender: 'You', message: chatInput }]);
      setChatInput(''); // Clear the input field after sending
    }
  };

  useEffect(() => {
    setFilteredClubs(clubs);
  }, [clubs]);

  return (
    <div className="club">
      <div className="sidebar">
        <input type="text" id="search" placeholder="Search clubs..." onInput={handleSearch} />
        <ul id="club-list">
          {filteredClubs.map(club => (
            <li key={club.name} onClick={() => handleClubClick(club)}>
              {club.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {selectedClub && (
          <>
            <div className="tab-bar">
              <button
                className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => handleTabClick('posts')}
              >
                Posts
              </button>
              <button
                className={`tab-button ${activeTab === 'chats' ? 'active' : ''}`}
                onClick={() => handleTabClick('chats')}
              >
                Chats
              </button>
            </div>

            {activeTab === 'posts' && (
              <div id="club-posts">
                {selectedPosts.map(post => (
                  <div className="post-card" key={post.title}>
                    <img src={post.image} alt={post.title} />
                    <div className="post-content">
                      <div className="post-title">{post.title}</div>
                      <div className="post-date">{post.date}</div>
                      <div className="post-description">{post.description}</div>
                      <div className="post-actions">
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'chats' && (
              <div id="club-chats">
                <div className="chat-window">
                  <div className="chat-messages">
                    {chatMessages.map((chat, index) => (
                      <div key={index} className="chat-message">
                        <strong>{chat.sender}: </strong>{chat.message}
                      </div>
                    ))}
                  </div>
                  <div className="chat-input">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={handleChatInput}
                      placeholder="Type a message..."
                    />
                    <button onClick={handleSendChat}>Send</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Community;