//useBookmarkService.ts
import axios from "axios";
import { PostProps } from "./usePost";

const BASE_URL = "http://localhost:4000/bookmarks";

export const getBookmarksList = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addToBookmarks = async (post: PostProps) => {
  //
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  const existingPostResponse = await axios.get(`${BASE_URL}?id=${post.id}`);

  if (existingPostResponse.data.length === 0) {
    return await axios.post(BASE_URL, post);
  }
  throw new Error(`Post already exists in bookmarks`);
};

export const removeFromBookmarks = async (id: string) => {
  console.log(`Remove post with ID: `, id);

  const bookmarkResponse = await axios.get(`${BASE_URL}?id=${id}`);

  if (bookmarkResponse.data.length > 0) {
    const itemToRemove = bookmarkResponse.data[0];
    return await axios.delete(`${BASE_URL}/${itemToRemove.id}`);
  }
  throw new Error(`Error removing post with ${id} from bookmarks`);
};
