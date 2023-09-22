import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../../../context/ThemeContext";

export default function SearchBar({ onSearch }) {
  //expand
  const [expanded, setExpanded] = useState(false);

  const toggleWidth = () => {
    setExpanded(!expanded);
  };
  //theme
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const textColor = theme === "dark" ? "black" : "white";

  //search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div onSubmit={handleSearch}>
      <div
        className={`relative mt-2 rounded-md shadow-sm   ${
          expanded ? "" : " "
        }`}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"></span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className={`transition-all duration-300  block  rounded-[1rem] bg-${backgroundColor} border border-gray-700 py-1.5 pl-7 pr-20 text-${textColor}  placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
            expanded ? "w-72" : " border-none w-0"
          }`}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center ">
          <button
            className="p-2 text-gray-400 hover:text-gray-500"
            onClick={toggleWidth}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
