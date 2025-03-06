//MainContent.tsx
import React, { useState } from "react";
import { usePost } from "../api/usePost";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";

import dayjs from "dayjs";
const postTimeStamp = "ddd h:mm A | MMM D, YYYY";

const MainContent: React.FC = () => {
  const [content, setContent] = useState("");

  //Image

  //const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  //imagePreview stores a Base64-encoded string of the uploaded image for display.

  //State for editing
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const { posts, isLoading, error, addPost, removePost, updatePost } =
    usePost();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //setSelectedImage(file);
      const reader = new FileReader(); //creates a new FileReader instance to read the file.
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      }; //Defining a callback function that runs when reading is complete
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (content.trim() || imagePreview) {
      addPost({
        content,
        image: imagePreview || undefined,
        createdAt: new Date().toISOString(), //store timestamp
      });
      setContent(""); //Clear input after posting
      // setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleRemove = (id: string) => {
    try {
      console.log("Removing post with the id:", id);
      removePost(id);
    } catch {
      console.log("Error deleting post:", error);
    }
  };

  const handleEdit = (id: string, currentContent: string) => {
    setEditingPostId(id);
    setEditContent(currentContent);
  };
  const handleSave = (id: string) => {
    if (editContent.trim()) {
      updatePost({ id, content: editContent });
      setEditingPostId(null);
      setEditContent("");
    }
  };

  return (
    <div className="w-[70vw] lg:w-[60vw] flex flex-col md:border border-gray-300">
      {/* Post Input Area */}
      <div className="div1 w-[85%] lg:w-[65%] bg-[#E4E4E4] flex flex-col justify-center items-center mx-auto mt-[10vh] lg:mt-[8%] p-4 rounded-sm">
        <textarea
          className="w-[95%] h-32 bg-white p-2 rounded-sm"
          placeholder="Compose New Post"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {/* Row for image upload and Post button */}
        <div className="flex w-[95%] justify-between items-center mt-2">
          <label
            htmlFor="imageUpload"
            className="cursor-pointer flex items-center gap-2"
          >
            <FaImage className="text-xl" title="Upload image" />
            {/* <span>Upload Image</span> */}
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            onClick={handlePost}
            className="bg-[#1308A8] text-white px-4 py-2 rounded-sm"
          >
            Post
          </button>
        </div>
        {/* Display image preview if available */}
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 object-contain"
            />
          </div>
        )}
      </div>

      {/* Posts List */}
      <div className="div2 mt-4 w-[85%] lg:w-[65%] mx-auto flex flex-col">
        {isLoading && <p>Loading posts...</p>}
        {error && <p>Error loading posts</p>}
        {posts &&
          [...posts].reverse().map((post, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-300 flex flex-col gap-2"
            >
              <div className="flex justify-between">
                {editingPostId === post.id ? (
                  <>
                    <input
                      className="w-full bg-white p-1"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                    <button
                      onClick={() => handleSave(post.id!)}
                      className="bg-[#1308A8] text-white px-4 py-1 cursor-pointer rounded-sm ml-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex text-justify mt-4">{post.content}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <MdModeEdit
                          className="cursor-pointer"
                          onClick={() => handleEdit(post.id!, post.content)}
                        />
                        <MdDelete
                          className="cursor-pointer"
                          onClick={() => handleRemove(post.id!)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Display the uploaded image if available */}
              <div>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Uploaded"
                    className="flex h-auto w-auto object-contain mt-2"
                  />
                )}
              </div>

              <div className="flex justify-between">
                <div className="flex">
                  <span title="Like" className="cursor-pointer">
                    <FaRegHeart />
                  </span>
                  <span title="Comment" className="cursor-pointer ml-2">
                    <LiaComment />
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-gray-500">
                    {post.createdAt
                      ? dayjs(post.createdAt).format(postTimeStamp)
                      : ""}{" "}
                    &nbsp;
                  </span>{" "}
                  <span title="Add to bookmarks" className="cursor-pointer">
                    <IoBookmarkOutline />
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainContent;
