//usePostService.ts
import axios from "axios";
import { NewPostProps, PostProps } from "./usePost";

// const BASE_URL = `http://localhost:4000`;

export const getPosts = async (username: string) => {
  // Get the entire data structure first
  const response = await axios.get(
    `http://localhost:4000/posts?user=${username}`
  );

  console.log("Full response data:", response.data);
  console.log("Attempting to access user:", username);

  if (!response.data) {
    throw new Error(`User ${username} not found in the database`);
  }

  return response.data;
};

// Add a post for a specific user
export const addPost = async (username: string, post: NewPostProps) => {
  const newPost = { ...post, user: username };

  const response = await axios.post(`http://localhost:4000/posts`, newPost);
  return response.data;
};

// Delete a post for a specific user
export const deletePost = async (id: string) => {
  return await axios.delete(`http://localhost:4000/posts/${id}`);
};

// Edit a post for a specific user
export const updatePost = async (post: PostProps) => {
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  const response = await axios.patch(`http://localhost:4000/posts/${post.id}`, {
    content: post.content,
  });
  return response.data;
};

// Toggle like for a specific user
export const toggleLike = async (post: PostProps) => {
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  const updatedLiked = !post.liked;
  const updatedLikes = updatedLiked
    ? (post.likes || 0) + 1
    : (post.likes || 0) - 1;
  const response = await axios.patch(`http://localhost:4000/posts/${post.id}`, {
    liked: updatedLiked,
    likes: updatedLikes,
  });
  return response.data;
};
