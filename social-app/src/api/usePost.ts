//usePost.ts
import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getPosts,
  addPost,
  deletePost,
  updatePost,
  toggleLike,
} from "./usePostService";

export interface NewPostProps {
  content: string;
  image?: string;
  createdAt: string;
}

export interface PostProps {
  id: string;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  liked: boolean;
}

export const usePost = () => {
  //Get posts
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  //Add post
  const addMutation = useMutation({
    mutationFn: (newPost: NewPostProps) => addPost(newPost),
    onSuccess: () => refetch(),
  });

  //Delete post
  const removeMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => refetch(),
  });

  //Edit post
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => refetch(),
  });

  const likeMutation = useMutation({
    mutationFn: toggleLike,
    onSuccess: () => refetch(),
  });

  return {
    posts,
    isLoading,
    error,
    addPost: addMutation.mutate,
    removePost: removeMutation.mutate,
    updatePost: updateMutation.mutate,
    toggleLike: likeMutation.mutate,
  };
};
