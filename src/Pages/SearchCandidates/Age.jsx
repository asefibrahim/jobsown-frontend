import React, { useState } from "react";
const ageArry = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
const Age = ({ hireText, setMinAge, setMaxAge }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy1, setSelectedBy1] = useState("Min.Sal..");
  const [selectedBy2, setSelectedBy2] = useState("Max.Sal..");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleMinAgeChange = (value) => {
    setSelectedOption(value);
    setSelectedBy1(value)
    setMinAge(value);
  };
  const handleMaxAgeChange = (value) => {
    setSelectedOption(value);
    setSelectedBy2(value);
    setMaxAge(value);
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
            onChange={(e) => handleMinAgeChange(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="">Min. Age</option>
                {
                    ageArry?.map(ag => (
                       <option value={ag}>{ag}</option>
                    ))
                }
            <option value="someone_else">Others</option>
          </select>
          <select
            value={selectedBy2}
            onChange={(e) => handleMaxAgeChange(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="">Max. Age</option>
                {
                    ageArry?.map(ag => (
                       <option value={ag}>{ag}</option>
                    ))
                }
            <option value="">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Age;
