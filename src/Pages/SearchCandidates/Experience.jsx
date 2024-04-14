import React, { useState } from "react";

const Experience = ({ hireText }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy1, setSelectedBy1] = useState("Min.Exp");
  const [selectedBy2, setSelectedBy2] = useState("Max.Exp");
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
          <div className="flex justify-between px-2">
            <div>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={() => handleChange("option1")}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 font-semibold text-gray-700 ">Any</span>
            </div>
            <div>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={() => handleChange("option2")}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 font-semibold text-gray-700">
                Freshers only
              </span>
            </div>
          </div>
          <div className="flex justify-between ">
            <select
              value={selectedBy1}
              onChange={(e) => setSelectedBy1(e.target.value)}
              className="m-1 p-1 border border-gray-300 rounded w-full"
            >
              <option value="Min.Exp">Min.Exp</option>
              <option value="someone_else">Others</option>
            </select>
            <select
              value={selectedBy2}
              onChange={(e) => setSelectedBy2(e.target.value)}
              className="m-1 p-1 border border-gray-300 rounded w-full"
            >
              <option value="Max.Exp">Max.Exp</option>
              <option value="someone_else">Others</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
