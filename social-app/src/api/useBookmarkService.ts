//useBookmarkService.ts
import axios from "axios";
import { PostProps } from "./usePost";

const BASE_URL = "http://localhost:4000";

// Get the list of bookmarks for a specific user
export const getBookmarksList = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/bookmarks?user=${username}`);
  return response.data;
};

// Add a bookmark for a specific user
export const addToBookmarks = async (username: string, post: PostProps) => {
  if (!post.id) {
    throw new Error("Post id is missing");
  }
  // Check if the bookmark already exists for this user
  const existingResponse = await axios.get(
    `${BASE_URL}/bookmarks?user=${username}&id=${post.id}`
  );

  if (existingResponse.data.length === 0) {
    // Add the user property to the post object before saving
    const newBookmark = { ...post, user: username };
    const response = await axios.post(`${BASE_URL}/bookmarks`, newBookmark);
    return response.data;
  }
  throw new Error(`Post already exists in bookmarks`);
};

// Remove a bookmark for a specific user
export const removeFromBookmarks = async (username: string, id: string) => {
  // First, fetch the bookmark item for this user with the given id
  const response = await axios.get(
    `${BASE_URL}/bookmarks?user=${username}&id=${id}`
  );

  if (response.data.length > 0) {
    const bookmarkItem = response.data[0];
    return await axios.delete(`${BASE_URL}/bookmarks/${bookmarkItem.id}`);
  }
  throw new Error(`Error removing post with ${id} from bookmarks`);
};
