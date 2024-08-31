import React, { useState } from 'react';
import './Chat.css';

function Chat() {
    const [activeSection, setActiveSection] = useState('projects');
  
    const handleToggle = (section) => {
      setActiveSection(section);
    };
  
    const projects = [
        {
            id: '1',
            title: 'Web Development Bootcamp',
            date: 'August 28, 2024',
            description: 'Kickstart your career in web development with our comprehensive bootcamp covering HTML, CSS, and JavaScript.',
            image: 'path/to/web-development-bootcamp.jpg'
        },
        {
            id:'2',
            title: 'CSS Animation Tricks',
            date: 'September 6, 2024',
            description: 'Learn how to create eye-catching animations with CSS in this interactive session.',
            image: 'path/to/css-animation-tricks.jpg'
        }
      // Add more projects as needed
    ];
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic
      alert('Project submitted successfully!');
    };
  
    return (
      <div className="conainer">
        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <button onClick={() => handleToggle('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            View Projects
          </button>
          <button onClick={() => handleToggle('create')} className={activeSection === 'create' ? 'active' : ''}>
            Create a Project
          </button>
        </div>
  
        {/* Section Content */}
        <section id="content">
          {activeSection === 'projects' ? (
            <div id="projects">
              {projects.map((project) => (
                <div key={project.id} className="project-tab">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a
                    href={`https://wa.me/7008544921?text=I%20would%20like%20to%20apply%20for%20${encodeURIComponent(
                      project.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Apply</button>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div id="submit-project">
              <h2>Submit Your Own Project</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Project Title:</label>
                  <input type="text" id="title" name="title" required />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea id="description" name="description" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="file">Upload Files:</label>
                  <input type="file" id="file" name="file" />
                </div>
                <button type="submit">Submit Project</button>
              </form>
            </div>
          )}
        </section>
      </div>
    );
  }
  

export default Chat;
