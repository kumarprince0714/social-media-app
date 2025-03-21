//BookmarkComponent.tsx

import React from "react";
import { useBookmark } from "../../api/useBookmark";
import { FaRegBookmark } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const BookmarkComponent: React.FC = () => {
  const { bookmarks, removeFromBookmarks } = useBookmark();

  const handleRemoveBookmark = (id: string | undefined) => {
    if (!id) {
      console.log("Invalid ID: Cannot remove bookmark");
      return;
    }

    try {
      console.log("Removing post with id", id);
      removeFromBookmarks(id);
    } catch (error) {
      console.log("Error removing post: ", error);
    }
  };

  return (
    <>
      <div className="w-full  h-auto flex flex-col border border-gray-300 ml-[11vw] lg:ml-[2vw] flex-grow">
        <div className=" border-b border-gray-300 h-16 flex items-center font-bold">
          <span className="text-2xl flex items-center ml-2">
            <Link to={"/"}>
              <GoArrowLeft />
            </Link>
          </span>
          <span className="flex ml-4  text-[#150AA1] text-xl font-bold">
            Bookmarks
          </span>
        </div>
        <div className="flex h-full">
          <div className="border-r border-gray-300">
            <div className=" border-b border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#150AA1] font-bold">
              All Bookmarks
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Photos
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Videos
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Audio
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Posts
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Messages
            </div>
            <div className=" border-y border-gray-300  w-48 h-[5vh] flex-shrink-0 text-left px-2 flex items-center text-[#686868] font-bold">
              Locked
            </div>
          </div>
          <div className="mt-2 flex flex-grow">
            {bookmarks?.length === 0 ? (
              <p className="flex text-xl text-gray-400  ">
                You haven't bookmarked any of the post as of now.
              </p>
            ) : (
              <div className="mt-4 w-[85%] lg:w-[65%] mx-auto flex flex-col ">
                {[...(bookmarks ?? [])].reverse().map((post) => (
                  <div key={post.id} className="w-full">
                    <div className="div1 text-justify mt-4 w-full">
                      {post.content}
                    </div>
                    <div className="w-full">
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Uploaded"
                          className="h-auto w-auto object-contain mt-2"
                        />
                      )}
                    </div>
                    <div className=" div2 flex justify-end w-full border-b border-gray-300 mt-2">
                      <button
                        onClick={() => handleRemoveBookmark(post.id)}
                        title="Remove from bookmarks"
                        className="my-2 p-1 font-bold bg-gray-500 hover:bg-gray-600 transition-all duration-300 text-white rounded-md  "
                      >
                        <FaRegBookmark />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookmarkComponent;
