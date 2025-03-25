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

export const usePost = (username: string) => {
  //Get posts
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery<PostProps[]>({
    queryKey: ["posts", username],
    queryFn: () => getPosts(username),
  });

  //Add post
  const addMutation = useMutation({
    mutationFn: (newPost: NewPostProps) => addPost(username, newPost),
    onSuccess: () => refetch(),
  });

  //Delete post
  const removeMutation = useMutation({
    mutationFn: (id: string) => deletePost(username, id),
    onSuccess: () => refetch(),
  });

  //Edit post
  const updateMutation = useMutation({
    mutationFn: (post: PostProps) => updatePost(username, post),
    onSuccess: () => refetch(),
  });

  const likeMutation = useMutation({
    mutationFn: (post: PostProps) => toggleLike(username, post),
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
