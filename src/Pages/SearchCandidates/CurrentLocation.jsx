import React, { useState } from "react";

const CurrentLocation = ({  hireText }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy, setSelectedBy] = useState("Search current city/area");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="p-4 custom-border-bottom cursor-pointer ">
      <div
        className="font-semibold text-blue-800 py-2 flex justify-between"
        onClick={toggleOptions}
      >
        {hireText} <span className="ml-2">{isOptionsVisible ? "▲" : "▼"}</span>
      </div>
      {isOptionsVisible && (
        <div>
          <select
            value={selectedBy}
            onChange={(e) => setSelectedBy(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="Search current city/area">
              Search current city/area
            </option>
            <option value="someone_else">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CurrentLocation;
