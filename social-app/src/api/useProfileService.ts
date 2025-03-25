//useProfileService.ts
import axios from "axios";
import { ProfileProps } from "./useProfile";

const BASE_URL = "http://localhost:4000";

export const getProfileDetails = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/profiles?user=${username}`);
  return response.data.length > 0 ? response.data[0] : null;
};

export const addProfileDetails = async (
  username: string,
  profile: ProfileProps
) => {
  const newProfile = { ...profile, user: username };
  const response = await axios.post(`${BASE_URL}/profiles`, newProfile);
  return response.data;
};

export const updateProfile = async (
  username: string,
  profile: ProfileProps
) => {
  if (!profile.id) {
    throw new Error("Error updating profile details");
  }

  const response = await axios.patch(`${BASE_URL}/profiles/${profile.id}`, {
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
export const deleteProfile = async (username: string, id: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/${username}/profile/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error deleting profile:", error);
    throw error;
  }
};
