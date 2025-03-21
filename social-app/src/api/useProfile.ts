//useProfile.ts
import { useQuery, useMutation } from "@tanstack/react-query";
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
  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useQuery<ProfileProps[]>({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  const addMutation = useMutation({
    mutationFn: addProfileDetails,
    onSuccess: () => refetch(),
  });

  const updateMutation = useMutation({
    mutationFn: updateProfile,
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
