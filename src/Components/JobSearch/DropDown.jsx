import React, { useState } from "react";
import axios from "../../api/axios";
import { useData } from "../../Provider/AuthProvider";

const DropDown = ({
  children,
  options,
  setWorkTypeQuery,
  setGenderTypeQuery,
  setSalaryQuery,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [componentHeight, setComponentHeight] = useState(0);

  const { setData } = useData([]);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setComponentHeight(showOptions ? 0 : 150);
  };

  const handleOptionChange = async (event) => {
    const selectedValue = event.target.value;

    if (
      [
        "AED 60,000-AED 80,000",
        "AED 80,000-AED 100,000",
        "AED 100,000-AED 120,000",
        "AED 120,000-AED 140,000",
      ].includes(selectedValue)
    ) {
      setSelectedOption(selectedValue);
      setSalaryQuery(selectedValue);
    } else if (["Fresher", "Internship", "Full-Time"].includes(selectedValue)) {
      setSelectedOption(selectedValue);
      setWorkTypeQuery(selectedValue);
    } else if (["Men", "Female"].includes(selectedValue)) {
      setSelectedOption(selectedValue);
      setGenderTypeQuery(selectedValue);
    }
  };

  return (
    <div className="relative" style={{ marginBottom: componentHeight }}>
      <div
        className=" p-4 text-blue-500 text-lg font-semibold cursor-pointer"
        onClick={toggleOptions}
      >
        {children}
      </div>
      {showOptions && (
        <div
          className="absolute top-14 bg-white p-4  rounded-md"
          style={{
            height: componentHeight,
            transition: "height 0.3s ease-in-out",
          }}
        >
          {options.map((option, index) => (
            <label key={index} className="block mb-2 flex items-center">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="mr-6"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
