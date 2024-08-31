import React, { useState } from 'react';
import './Branch.css';

const branches = {
  "Computer Science": ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  "Electrical Engineering": ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  "Mechanical Engineering": ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  "Mining Engineering": ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  // Add more branches and years as needed
};

const students = {
  "Computer Science": {
    "1st Year": ["Alice", "Bob", "Charlie"],
    "2nd Year": ["David", "Eva", "Frank"],
    "3rd Year": ["Grace", "Hannah", "Ivy"],
    "4th Year": ["Jack", "Kevin", "Liam"],
  },
  "Electrical Engineering": {
    "1st Year": ["Aaryan", "Bhumi", "Chetan"],
    "2nd Year": ["Diya", "Esha", "Faizal"],
    "3rd Year": ["Gagan", "Harsh", "Isha"],
    "4th Year": ["Jai", "Karan", "Lavanya"],
  },
  // Add more students for other branches and years
};

function Branch() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setSelectedYear(null); // Reset year selection when a branch is selected
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="branch-container">
      <h1>Select a Branch</h1>
      <div className="branch-list">
        {Object.keys(branches).map((branch) => (
          <div
            key={branch}
            className="branch-item"
            onClick={() => handleBranchClick(branch)}
          >
            {branch}
          </div>
        ))}
      </div>
      
      {selectedBranch && (
        <div className="year-container">
          <h2>{selectedBranch} - Select a Year</h2>
          <div className="year-list">
            {branches[selectedBranch].map((year) => (
              <div
                key={year}
                className="year-item"
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {selectedYear && (
        <div className="students-container">
          <h3>{selectedBranch} - {selectedYear} Students</h3>
          <ul>
            {students[selectedBranch][selectedYear].map((student) => (
              <li key={student}>{student}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Branch;
