//useBookmark.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getBookmarksList,
  addToBookmarks,
  removeFromBookmarks,
} from "./useBookmarkService";

import { PostProps } from "./usePost";

export const useBookmark = (username: string) => {
  const {
    data: bookmarks,
    isLoading,
    error,
    refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["bookmarks", username],
    queryFn: () => getBookmarksList(username),
  });

  const addMutation = useMutation({
    mutationFn: (post: PostProps) => addToBookmarks(username, post),
    onSuccess: () => refetch(),
  });

  const removeMutation = useMutation({
    mutationFn: (id: string) => removeFromBookmarks(username, id),
    onSuccess: () => refetch(),
  });

  return {
    bookmarks,
    isLoading,
    error,
    addToBookmarks: addMutation.mutate,
    removeFromBookmarks: removeMutation.mutate,
  };
};
