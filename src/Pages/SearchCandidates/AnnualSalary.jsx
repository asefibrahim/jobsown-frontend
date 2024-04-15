import React, { useState } from "react";

const AnnualSalary = ({ hireText, setAnnualMinSarlary, setAnnualMaxSarlary }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy1, setSelectedBy1] = useState("Min.Sal..");
  const [selectedBy2, setSelectedBy2] = useState("Max.Sal..");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleMinSalaryChange = (value) => {
    setSelectedOption(value);
    setSelectedBy1(value)
    setAnnualMinSarlary(value);
  };
  const handleMaxSalaryChange = (value) => {
    setSelectedOption(value);
    setSelectedBy2(value);
    setAnnualMaxSarlary(value);
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
            onChange={(e) => handleMinSalaryChange(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="Min.Sal..">Min. Sal..</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option className="text-black" value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            <option value="someone_else">Others</option>
          </select>
          <select
            value={selectedBy2}
            onChange={(e) => handleMaxSalaryChange(e.target.value)}
            className="m-1 p-1 border border-gray-300 rounded w-full"
          >
            <option value="">Max. Sal..</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option className="text-black" value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            <option value="">Others</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default AnnualSalary;
