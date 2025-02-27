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
  // const postResponse = await axios.get(`${BASE_URL}?id=${id}`);

  // if (postResponse.data.length > 0) {
  //   const postToRemove = postResponse.data[0];
  //   return await axios.delete(`${BASE_URL}/${postToRemove.id}`);
  // }
  return await axios.delete(`${BASE_URL}/${id}`);
};

//Edit
export const updatePost = async (post: PostProps) => {
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  const response = await axios.put(`${BASE_URL}/${post.id}`, {
    content: post.content,
  });
  return response.data;
};
