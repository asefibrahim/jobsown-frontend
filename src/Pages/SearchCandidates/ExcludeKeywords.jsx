import React, { useState } from "react";

const ExcludeKeywords = ({ hireText }) => {
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
          <input
            type="text"
            class="border rounded-md p-1 placeholder-gray-500 text-gray-700 pl-3 w-full"
            placeholder="Keywords"
          />
        </div>
      )}
    </div>
  );
};

export default ExcludeKeywords;
