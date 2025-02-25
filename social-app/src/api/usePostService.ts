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
