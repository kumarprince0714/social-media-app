//useProfile.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getProfileDetails,
  addProfileDetails,
  updateProfile,
  //deleteProfile,
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

export const useProfile = (username: string) => {
  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useQuery<ProfileProps | null>({
    queryKey: ["profile", username],
    queryFn: () => getProfileDetails(username),
  });
  const addMutation = useMutation({
    mutationFn: (profile: ProfileProps) => addProfileDetails(username, profile),
    onSuccess: () => refetch(),
  });

  const updateMutation = useMutation({
    mutationFn: (profile: ProfileProps) => updateProfile(username, profile),
    onSuccess: () => refetch(),
  });
  return {
    profile,
    isLoading,
    error,
    addMutation: addMutation.mutate,
    updateMutation: updateMutation.mutate,
  };
};
