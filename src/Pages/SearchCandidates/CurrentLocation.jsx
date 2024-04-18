import React, { useState } from "react";
const cityArry = ["London", "Los Angeles", "New York", "Chicago", "Sydney", "Berlin", "Toronto", "Madrid", "Singapore", "New Delhi", "Paris", "Miami", "San Francisco"];
const CurrentLocation = ({  hireText, setCityOrLocation }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy, setSelectedBy] = useState("Search current city/area");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value) => {
    setSelectedBy(value);
    setCityOrLocation(value);
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
            onChange={(e) => handleChange(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="">
              Search current city/area
            </option>
            {
              cityArry?.map(city => (
                <option value={city}>{city}</option>
              ))
            }
            <option value="">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CurrentLocation;
