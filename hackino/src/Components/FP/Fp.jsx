import React, { useState } from "react";
import SelfPost from "../SelfPost/Sp";
import Post from "../Post/Post";
import '/src/Components/Post/Post.css';
import '/src/Components/SelfPost/Sp.css';

const PostContainer = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Meena",
      jobTitle: "App Developer",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas...",
      profileImg: "/src/Components/Header/image.png"
    },
    {
      id: 2,
      name: "Meena",
      jobTitle: "App Developer",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
      profileImg: "/src/Components/Header/image.png"
    }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
      <div className="ntainer">
        <SelfPost onAddPost={handleAddPost}  />
        <div className="posts-continer">
          {posts.map((post) => (
            <Post
              key={post.id}
              profileImg={post.profileImg}
              name={post.name}
              jobTitle={post.jobTitle}
              content={post.content}
            />
          ))}
        </div>
      </div>
  );
};

export default PostContainer;
