import React from "react";

const Dropdown = ({ options, selectedOption, onSelect }) => {
  return (
    <div className=" absolute right-0 top-24 mr-8  bg-white border border-solid border-blue-700 rounded-lg shadow-md">
      <div className="p-2 font-semibold text-blue-700">Sort By</div>
      {options.map((option) => (
        <div
          key={option.id}
          className="p-2 cursor-pointer flex items-center"
          onClick={() => {
            onSelect(option.id);
          }}
        >
          {selectedOption === option.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-700"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-700"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" />
            </svg>
          )}
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
