import React, { useState } from "react";
import "./Sp.css";

const SelfPost = ({ onAddPost }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePostSubmit = () => {
    if (postContent.trim() === "" && !selectedFile) {
      alert("Please write something or upload a file before posting.");
      return;
    }

    const newPost = {
      profileImg: selectedFile ? URL.createObjectURL(selectedFile) : "/path/to/default/profile/image.png", // Add a default image path
      name: "Meena", // Replace with dynamic data if needed
      jobTitle: "App Developer", // Replace with dynamic data if needed
      content: (
        <>
          {postContent}
          {selectedFile && (
            <div className="uploaded-media">
              {selectedFile.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded media"
                  className="image-preview"
                />
              )}
            </div>
          )}
        </>
      ),
    };

    onAddPost(newPost); // Pass the new post data to the parent component
    setPostContent(""); // Clear the input after posting
    setSelectedFile(null); // Clear the selected file after posting
  };

  return (
    <div className="self-post-container">
      <div className="post-input-wrapper">
        <div className="profile-icon">
          <img src="\src\Components\SelfPost\image.png" className="icon-img" />
        </div>
        <input
          type="text"
          className="post-input"
          placeholder="Start a post, try writing with AI"
          value={postContent}
          onChange={handleInputChange}
        />
      </div>
      <div className="post-options">
        <div className="post-option">
          <input
            type="file"
            id="file-upload"
            className="file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="post-option-label">
            <img src="\src\Components\SelfPost\fileicon.png" alt="Media" className="post-option-icon" />
            <span>Upload Media</span>
          </label>
        </div>
        <button className="add-post-button" onClick={handlePostSubmit}>
          Add Post
        </button>
      </div>
      {selectedFile && (
        <div className="file-preview">
          <p>Selected file: {selectedFile.name}</p>
          {selectedFile.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="image-preview"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SelfPost;
