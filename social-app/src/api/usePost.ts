//usePost.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getPosts, addPost, deletePost, updatePost } from "./usePostService";

export interface PostProps {
  id?: string;
  content: string;
  image?: string;
  createdAt?: string;
}

export const usePost = () => {
  const queryClient = useQueryClient();

  //Get posts
  const {
    data: posts,
    isLoading,
    error,
    //refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  //Add post
  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  //Delete post
  const removeMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  //Edit post
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    posts,
    isLoading,
    error,
    addPost: addMutation.mutate,
    removePost: removeMutation.mutate,
    updatePost: updateMutation.mutate,
  };
};
