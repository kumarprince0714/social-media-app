//MainContent.tsx
import React, { useState } from "react";
import { usePost } from "../api/usePost";
// interface PostProps {
//   content: string;
// }

// const MainContent: React.FC<PostProps> = () => {
const MainContent: React.FC = () => {
  const [content, setContent] = useState("");
  const { posts, isLoading, error, addPost } = usePost();

  const handlePost = () => {
    if (content.trim()) {
      addPost({ content });
      setContent(""); //Clear input after posting
    }
  };

  return (
    <>
      <div className="w-auto">
        <div className="w-[738px] h-48 bg-[#E4E4E4] flex flex-col justify-center items-center">
          <input
            className="w-[680px] h-32 bg-white"
            placeholder="Write something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button
            onClick={handlePost}
            className=" bg-blue-600 text-gray-600 px-4 py-2 rounded-sm mt-1"
          >
            Post
          </button>
        </div>
        <div className="mt-4 w-[738px] mx-auto">
          {isLoading && <p>Loading posts...</p>}
          {error && <p>Error loading posts</p>}
          {posts &&
            posts.map((post, index) => (
              <div key={index} className="p-2 border-b border-gray-300">
                {post.content}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
