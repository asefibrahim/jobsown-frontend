import React, { useState } from "react";

const Experience = ({ hireText, setSearchMinExperience, setSearchMaxExperience }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy1, setSelectedBy1] = useState("Min.Exp");
  const [selectedBy2, setSelectedBy2] = useState("Max.Exp");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleAnyExperience = (value) => {
    setSelectedOption(value);
    setSearchMinExperience(null)
    setSearchMaxExperience(null)
    setSelectedBy1("");
    setSelectedBy2("");
  };

  const handleFresherExperience = (value) => {
    setSelectedOption(value);
    setSearchMinExperience(0);
    setSearchMaxExperience(1);
    setSelectedBy1("");
    setSelectedBy2("");
  };

  const handleMinExperience = (value) => {
    setSelectedBy1(value);
    setSearchMinExperience(value)
  };
  const handleMaxExperience = (value) => {
    setSelectedBy2(value);
    setSearchMaxExperience(value)
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
                value=""
                checked={selectedOption === "option1"}
                onChange={() => handleAnyExperience("option1")}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 font-semibold text-gray-700 ">Any</span>
            </div>
            <div>
              <input
                type="radio"
                value={0}
                checked={selectedOption === "option2"}
                onChange={() => handleFresherExperience("option2")}
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
              onChange={(e) => handleMinExperience(e.target.value)}
              className="m-1 p-1 border border-gray-300 rounded w-full"
            >
              <option value="">Min.Exp</option>
              <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
              <option value="">Others</option>
            </select>
            <select
              value={selectedBy2}
              onChange={(e) => handleMaxExperience(e.target.value)}
              className="m-1 p-1 border border-gray-300 rounded w-full"
            >
              <option value="">Max.Exp</option>
              <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
              <option value="">Others</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
