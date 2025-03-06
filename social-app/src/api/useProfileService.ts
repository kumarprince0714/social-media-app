//useProfileService.ts
import axios from "axios";
import { ProfileProps } from "./useProfile";

const BASE_URL = "http://localhost:4000/profile";

export const getProfileDetails = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addProfileDetails = async (profile: ProfileProps) => {
  const response = await axios.post(BASE_URL, profile);
  return response.data;
};

export const updateProfile = async (profile: ProfileProps) => {
  if (!profile.id) {
    throw new Error("Error updating profile details");
  }

  const response = await axios.patch(`${BASE_URL}/${profile.id}`, {
    about: profile.about,
    name: profile.name,
    username: profile.username,
    email: profile.email,
    password: profile.password,
    location: profile.location,
    website: profile.website,
    social: profile.social,
    uniqueURL: profile.uniqueURL,
    activityStatus: profile.activityStatus,
    subscriptionStatus: profile.subscriptionStatus,
  });
  return response.data;
};
export const deleteProfile = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting profile:", error);
    throw error;
  }
};
