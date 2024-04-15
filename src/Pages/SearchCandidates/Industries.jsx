import React, { useState } from "react";
const industriesArry = ["Design", "Development", "Engineering"];
const Industries = ({ hireText, setSearchIndustries, setSearchKeyword }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy, setSelectedBy] = useState("Search industries");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value) => {
    setSelectedBy(value);
    setSearchIndustries(value);
    setSearchKeyword("");

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
            <option value="">Search industries</option>
            {
              industriesArry?.map(indus => (
                <option value={indus}>{indus}</option>
              ))
            }
            <option value="">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Industries;
