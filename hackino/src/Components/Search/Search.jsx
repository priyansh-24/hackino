import React, { useState, useEffect } from 'react';
import './Search.css';

const profilesData = [
    {
        name: 'Alice Johnson',
        skills: ['JavaScript', 'React', 'Node.js'],
        title: 'Frontend Developer',
      },
      {
        name: 'Bob Smith',
        skills: ['Python', 'Django', 'Machine Learning'],
        title: 'Backend Developer',
      },
      {
        name: 'Catherine Lee',
        skills: ['Java', 'Spring Boot', 'Microservices'],
        title: 'Software Engineer',
      },
      {
        name: 'David Brown',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        title: 'UI/UX Designer',
      },
      {
        name: 'Emma Davis',
        skills: ['AWS', 'Docker', 'Kubernetes'],
        title: 'DevOps Engineer',
      },
      {
        name: 'Frank Wilson',
        skills: ['C++', 'Embedded Systems', 'Robotics'],
        title: 'Robotics Engineer',
      },
      {
        name: 'Grace Martinez',
        skills: ['SQL', 'MongoDB', 'Data Analysis'],
        title: 'Data Analyst',
      },
];

function Search() {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    if (selectedSkill) {
      const filtered = profilesData.filter(profile =>
        profile.skills.includes(selectedSkill)
      );
      setFilteredProfiles(filtered);
    } else {
      setFilteredProfiles([]);
    }
  }, [selectedSkill]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const uniqueSkills = Array.from(
    new Set(profilesData.flatMap(profile => profile.skills))
  );

  return (
    <div className="community">
      <div className="sidebar">
        <h3>Select a Skill:</h3>
        <ul id="skills-list">
          {uniqueSkills.map(skill => (
            <li
              key={skill}
              onClick={() => handleSkillClick(skill)}
              className={selectedSkill === skill ? 'active' : ''}
            >
              <label>{skill}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {selectedSkill && (
          <>
            <h3>Profiles with skill: {selectedSkill}</h3>
            <ul id="profile-list">
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map(profile => (
                  <li key={profile.name}>
                    <h4>{profile.name}</h4>
                    <p>{profile.title}</p>
                    <p>Skills: {profile.skills.join(', ')}</p>
                  </li>
                ))
              ) : (
                <p>No profiles found with this skill.</p>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;

