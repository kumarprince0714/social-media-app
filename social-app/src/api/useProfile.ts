//useProfile.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProfileDetails,
  addProfileDetails,
  updateProfile,
  deleteProfile,
} from "./useProfileService";
export interface ProfileProps {
  id?: string;
  about?: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  location: string;
  website?: string;
  social: string;
  uniqueURL: string;
  activityStatus: boolean;
  subscriptionStatus: boolean;
}

export const useProfile = () => {
  const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading,
    error,
    //refetch
  } = useQuery<ProfileProps[]>({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  const addMutation = useMutation({
    mutationFn: addProfileDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
  return {
    profile,
    isLoading,
    error,
    addMutation: addMutation.mutate,
    updateMutation: updateMutation.mutate,
  };
};
