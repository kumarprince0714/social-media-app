//useBookmark.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getBookmarksList,
  addToBookmarks,
  removeFromBookmarks,
} from "./useBookmarkService";

import { PostProps } from "./usePost";

export const useBookmark = () => {
  const {
    data: bookmarks,
    isLoading,
    error,
    refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["bookmarks"],
    queryFn: getBookmarksList,
  });

  const addMutation = useMutation({
    mutationFn: addToBookmarks,
    onSuccess: () => refetch(),
  });

  const removeMutation = useMutation({
    mutationFn: removeFromBookmarks,
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
