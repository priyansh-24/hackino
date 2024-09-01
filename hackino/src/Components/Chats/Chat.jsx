import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [activeSection, setActiveSection] = useState('projects');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });

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
    // Log the form data to the console
    console.log('Project Title:', formData.title);
    console.log('Project Description:', formData.description);
    if (formData.file) {
      console.log('Uploaded File:', formData.file.name);
    } else {
      console.log('No file uploaded');
    }
    alert('Project submitted successfully!');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  return (
    <div className="conainer">
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button  onClick={() => handleToggle('projects')} className={activeSection === 'projects' ? 'active' : ''}>
          View Projects
        </button>
        <button  onClick={() => handleToggle('create')} className={activeSection === 'create' ? 'active' : ''}>
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
                  <button className="project-btn">Apply</button>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div id="submit-project">
            <h2 className="sub-name">Submit Your Own Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Project Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="file">Upload Files:</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                />
              </div>
              <button type="submit" className="project-btn">Submit Project</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default Chat;
