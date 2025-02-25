//usePost.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getPosts, addPost } from "./usePostService";

export interface PostProps {
  content: string;
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
  return {
    posts,
    isLoading,
    error,
    addPost: addMutation.mutate,
  };
};
