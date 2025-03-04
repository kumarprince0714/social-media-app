import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ProfileDetails: React.FC = () => {
  const [activityStatus, setActivityStatus] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  return (
    <>
      <div className="w-[70vw] lg:w-[60vw] h-auto flex flex-col md:border border-gray-300">
        <div className="w-[90%] lg:w-[88%] border border-white bg-white flex flex-col justify-center mx-auto mt-[8%] p-4 rounded-sm">
          <span className="top-0 left-0 flex font-bold text-[#1308A8]">
            Add Bio/About
          </span>
          <textarea
            className="w-full h-32 mx-0 bg-[#E4E4E4] p-6 rounded-sm "
            placeholder="Write here..."
            value={""}
            //onChange={}
          />
          <span className="mt-2 flex justify-end">
            <button className="bg-[#1308A8] text-white px-4 py-2 rounded w-[12vw] lg:w-[8vw]">
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
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-3 py-1 rounded-3xl ml-2 h-9 mr-2">
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Username
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-3 py-1 h-9 ml-2 rounded-3xl mr-2">
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
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-3 py-1 rounded-3xl ml-2 h-9 mr-2">
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Change Password
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-3 py-1 h-9 ml-2 rounded-3xl mr-2">
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
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-7 py-1 rounded-3xl ml-2 h-9 mr-2">
                Set
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              Website
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center">
              <input className="flex-grow bg-transparent outline-none w-[16vw]" />

              <button className="bg-[#1308A8] text-white px-7 py-1 h-9 ml-2 rounded-3xl mr-2">
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
              />

              <button className="bg-[#1308A8] text-white px-7 py-1 rounded-3xl ml-2 h-9 mr-2">
                Add
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <span className="top-0 left-0 flex font-bold text-[#1308A8] mb-6">
              My Creator Unique URL:
            </span>
            <div className="border border-[#E4E4E4] flex h-13 items-center rounded-3xl bg-[#E4E4E4]">
              <input className="flex-grow bg-transparent outline-none w-[16vw] px-2" />
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
          <span
            className="text-3xl cursor-pointer"
            onClick={() => setActivityStatus(!activityStatus)}
          >
            {activityStatus ? <FaToggleOn /> : <FaToggleOff />}
          </span>
        </div>
        <div className="flex w-[85%] mx-auto justify-between mb-2 items-center">
          <span className="flex flex-col">
            <span className="left-0 flex font-bold  mb-6 text-[#1308A8]">
              Show Subscription Status
            </span>
          </span>
          <span
            className="text-3xl cursor-pointer"
            onClick={() => setSubscriptionStatus(!subscriptionStatus)}
          >
            {subscriptionStatus ? <FaToggleOn /> : <FaToggleOff />}
          </span>
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
