//useBookmark.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBookmarksList,
  addToBookmarks,
  removeFromBookmarks,
} from "./useBookmarkService";

import { PostProps } from "./usePost";

export const useBookmark = () => {
  const queryClient = useQueryClient();

  const {
    data: bookmarks,
    isLoading,
    error,
    //refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["bookmarks"],
    queryFn: getBookmarksList,
  });

  const addMutation = useMutation({
    mutationFn: addToBookmarks,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmarks"] }),
  });

  const removeMutation = useMutation({
    mutationFn: removeFromBookmarks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  return {
    bookmarks,
    isLoading,
    error,
    addToBookmarks: addMutation.mutate,
    removeFromBookmarks: removeMutation.mutate,
  };
};
