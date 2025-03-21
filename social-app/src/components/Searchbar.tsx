//Searchbar.tsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (query: string) => void;
  matchDivWidth?: boolean;
}

const Searchbar: React.FC<SearchBarProps> = ({
  onSearch,
  matchDivWidth = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery); //Passing the search query to the parent component
  };

  return (
    // <div className="flex items-center bg-white rounded-md border border-gray-200 px-4 py-2 pr-2 ${matchDivWidth} w-auto lg:mr-[10%]">
    <div
      className={`flex items-center bg-white rounded-md border border-gray-200 px-4 py-2 pr-2 ${
        matchDivWidth ? "w-[85%]" : "w-auto lg:mr-[10%]"
      }`}
    >
      <CiSearch className="absolute left-4 text-gray-400 ml-1 mr-2 text-2xl" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full ml-2 px-2 py-1 text-black rounded-lg focus:outline-none focus"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
