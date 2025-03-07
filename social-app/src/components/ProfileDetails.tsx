//ProfileDetails.tsx
import React, { useState, useEffect } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

import { ProfileProps, useProfile } from "../api/useProfile";

const ProfileDetails: React.FC = () => {
  const { profile, isLoading, error, updateMutation } = useProfile();

  const [profileData, setProfileData] = useState<ProfileProps>({
    about: "",
    name: "",
    username: "",
    email: "",
    password: "",
    location: "",
    website: "",
    social: "",
    uniqueURL: "",
    activityStatus: false,
    subscriptionStatus: false,
  });

  useEffect(() => {
    if (profile && profile.length > 0) {
      setProfileData(profile[0]); //Since we only have 1 profile
    }
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleToggleChange = (
    field: "activityStatus" | "subscriptionStatus"
  ) => {
    setProfileData((prev) => {
      const updatedProfile = { ...prev, [field]: !prev[field] };
      updateMutation(updatedProfile);
      return updatedProfile;
    });
  };

  const handleSave = () => {
    updateMutation(profileData);
  };

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>Error loading profile</p>;

  return (
    <>
      <div className="w-[70vw] lg:w-[60vw] h-auto flex flex-col md:border border-gray-300">
        <div className="w-full h-80 bg-[#F1F1FF] relative">
          <span className=" left-[5vw] absolute bottom-0 mb-2 text-2xl font-serif">
            {profileData.name}
          </span>
        </div>
        <div>
          <span className="flex mt-2 ml-[5vw] font-bold text-gray-500">
            @{profileData.username}
          </span>
        </div>
        <div className="w-[90%] lg:w-[88%] border border-white bg-white flex flex-col justify-center mx-auto mt-[8%] p-4 rounded-sm">
          <span className="top-0 left-0 flex font-bold text-[#1308A8]">
            Add Bio/About
          </span>
          <textarea
            className="w-full h-32 mx-0 bg-[#E4E4E4] p-6 rounded-sm "
            placeholder="Write here..."
            name="about"
            value={profileData.about}
            onChange={handleChange}
          />
          <span className="mt-2 flex justify-end">
            <button
              className="bg-[#1308A8] text-white px-4 py-2 rounded w-[12vw] lg:w-[8vw] cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
          </span>
        </div>
        <span className=" border-[#F2F2F2] border-t w-full mb-4" />
        <div className="flex w-auto lg:w-[85%] mx-auto justify-between my-4 ">
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Display Name
            </span>
            <div className="border border-[#E4E4E4] flex items-center h-13 mr-4 lg:mr-auto">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-3 py-1 rounded-3xl ml-2 h-9 mr-2 cursor-pointer"
                onClick={handleSave}
              >
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Username
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                name="username"
                value={profileData.username}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-3 py-1 h-9 ml-2 rounded-3xl mr-2 cursor-pointer"
                onClick={handleSave}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-auto lg:w-[85%] mx-auto justify-between my-4 ">
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Email
            </span>
            <div className="border border-[#E4E4E4] flex items-center h-13 mr-4 lg:mr-auto">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                value={profileData.email}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-3 py-1 rounded-3xl ml-2 h-9 mr-2 cursor-pointer"
                onClick={handleSave}
              >
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Password
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                type="password"
                value={profileData.password}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-3 py-1 h-9 ml-2 rounded-3xl mr-2 cursor-pointer"
                onClick={handleSave}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <span className=" border-[#F2F2F2] border-t w-full my-6"></span>
        <div className="flex w-auto lg:w-[85%] mx-auto justify-between my-4 ">
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Location
            </span>
            <div className="border border-[#E4E4E4] flex items-center h-13 mr-4 lg:mr-auto">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                value={profileData.location}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-7 py-1 rounded-3xl ml-2 h-9 mr-2"
                onClick={handleSave}
              >
                Set
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Website
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw]"
                value={profileData.website}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-7 py-1 h-9 ml-2 rounded-3xl mr-2"
                onClick={handleSave}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <span className=" border-[#F2F2F2] border-t w-full my-6"></span>
        <div className="flex w-auto lg:w-[85%] mx-auto justify-between my-4 ">
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Social Media
            </span>
            <span className="flex text-[#686868]">
              Add social media network:
            </span>
            <div className="border border-[#E4E4E4] flex items-center h-13 mr-4 lg:mr-auto">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw] px-1"
                placeholder="Insert Link here..."
                value={profileData.social}
                onChange={handleChange}
              />

              <button
                className="bg-[#1308A8] text-white px-7 py-1 rounded-3xl ml-2 h-9 mr-2"
                onClick={handleSave}
              >
                Add
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              My Creator Unique URL:
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center rounded-3xl bg-[#E4E4E4]">
              <input
                className="flex-grow bg-transparent outline-none w-[16vw] px-2"
                value={profileData.uniqueURL}
                name="url"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <span className=" border-[#F2F2F2] border-t w-full my-6"></span>
        <div className="flex w-[85%] mx-auto justify-between mb-8 items-center">
          <span className="flex flex-col">
            <span className="left-0 flex font-bold  mb-6 text-[#1308A8]">
              Show Activity Status
            </span>
          </span>
          <button
            onClick={() => handleToggleChange("activityStatus")}
            className="text-3xl"
          >
            {profileData.activityStatus ? (
              <FaToggleOn className="text-blue-600" />
            ) : (
              <FaToggleOff className="text-gray-400" />
            )}
          </button>
        </div>
        <div className="flex w-[85%] mx-auto justify-between mb-2 items-center">
          <span className="flex flex-col">
            <span className="left-0 flex font-bold  mb-6 text-[#1308A8]">
              Show Subscription Status
            </span>
          </span>
          <button
            onClick={() => handleToggleChange("subscriptionStatus")}
            className="text-3xl"
          >
            {profileData.subscriptionStatus ? (
              <FaToggleOn className="text-blue-600" />
            ) : (
              <FaToggleOff className="text-gray-400" />
            )}
          </button>
        </div>
        <span className=" border-[#F2F2F2] border-t w-full my-6"></span>
        <div className="flex w-[85%] mx-auto justify-between mb-8 items-center">
          <span className="flex flex-col">
            <span className="left-0 flex font-bold text-[#F52B1E] mb-6">
              Delete Account
            </span>
          </span>
          <span className="flex flex-col">
            <button className=" h-11 border border-[#F52B1E] rounded-3xl w-[12vw] lg:w-[8vw]">
              <span className="text-[#F52B1E]">Delete</span>
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
