import React, { useState } from "react";

const AnnualSalary = ({ hireText }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy1, setSelectedBy1] = useState("Min.Sal..");
  const [selectedBy2, setSelectedBy2] = useState("Max.Sal..");
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
        <div className="flex justify-between ">
          <select
            value={selectedBy1}
            onChange={(e) => setSelectedBy1(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="Min.Sal..">Min. Sal..</option>
            <option value="someone_else">Others</option>
          </select>
          <select
            value={selectedBy2}
            onChange={(e) => setSelectedBy2(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="Max.Sal..">Max. Sal..</option>
            <option value="someone_else">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default AnnualSalary;
