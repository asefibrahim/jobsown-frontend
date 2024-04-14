import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-full shadow-md border border-gray-300 w-80">
      <input
        type="text"
        placeholder="Search Posted Jobs"
        className="py-2 px-4 rounded-l-full w-full focus:outline-none"
      />
      <button className="bg-blue-800 hover:bg-blue-600 text-white rounded-full p-1.5 mx-2">
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.71 20.29l-5.27-5.27a8 8 0 1 0-1.42 1.42l5.27 5.27a1 1 0 1 0 1.42-1.42zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
