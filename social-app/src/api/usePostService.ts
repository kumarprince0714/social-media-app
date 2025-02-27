import axios from "axios";
import { PostProps } from "./usePost";

const BASE_URL = "http://localhost:4000/posts";

export const getPosts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//Add
export const addPost = async (post: PostProps) => {
  const response = await axios.post(BASE_URL, post);
  return response.data;
};

//Delete
export const deletePost = async (id: string) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

//Edit
export const updatePost = async (post: PostProps) => {
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  const response = await axios.patch(`${BASE_URL}/${post.id}`, {
    content: post.content,
  });
  return response.data;
};
