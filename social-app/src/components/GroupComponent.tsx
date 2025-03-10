import React from "react";
import { MdOutlineGroups } from "react-icons/md";

import { TbCameraPlus } from "react-icons/tb";

const GroupComponent = () => {
  return (
    <>
      <div className="w-[70vw] lg:w-[60vw] flex flex-col md:border border-gray-300 bg-[#E4E4E4] rounded">
        <div className="w-full h-48 bg-[#F1F1FF] relative flex flex-col justify-center">
          <span className=" flex justify-center text-2xl text-[#150AA1]">
            <TbCameraPlus />
          </span>
          <span className="text-[#5858FA]">Add Cover Photo</span>
        </div>

        <div className="flex mt-8">
          <div className="w-[20vw] flex justify-center">
            <div className=" w-28 h-28 border border-[#E9E9E9] rounded-full flex justify-center items-center bg-[#F1F1FF] flex-col text-[#5858FA]">
              <span>
                <TbCameraPlus />
              </span>
              <span className="text-sm">Add Profile Photo</span>
            </div>
          </div>
          <div className=" w-[75vw] flex flex-col mr-2">
            <div className=" px-1">
              <div className="flex text-[#150AA1]">
                <span className="text-xl mr-2">
                  <MdOutlineGroups />
                </span>
                <span className="font-bold flex mb-2">Add Group Name</span>
              </div>
              <div className="border border-[#9A9A9A] w-full h-12 rounded">
                <textarea
                  className="w-full h-full bg-white rounded p-2"
                  placeholder="Write here..."
                ></textarea>
              </div>
            </div>
            <div className=" px-1">
              <div className="flex text-[#150AA1]">
                <span className="font-bold flex mb-2">Add Group Details</span>
              </div>
              <div className="border border-[#9A9A9A] w-full h-48 rounded">
                <textarea
                  className="w-full h-full bg-white rounded p-2"
                  placeholder="Write here..."
                ></textarea>
              </div>
            </div>
            <div className=" px-1">
              <div className="flex text-[#150AA1]">
                <span className="font-bold flex mb-2">Add Group Rules</span>
              </div>
              <span className="flex">Rule 1</span>

              <div className="border border-[#9A9A9A] w-full h-13 rounded">
                <textarea
                  className="w-full h-full bg-white rounded p-2"
                  placeholder="Write here..."
                ></textarea>
              </div>
              <div className="flex mt-4 py-2">
                <button className="cursor-pointer border border-[#150AA1] text-[#150AA1] w-auto px-2 h-9 rounded">
                  + Add another rule
                </button>
              </div>
              <div className="flex mt-4 py-2">
                <button className="cursor-pointer bg-[#5858FA] text-white font-bold w-32 h-9 rounded">
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupComponent;
