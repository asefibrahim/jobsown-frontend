import React, { useState } from "react";

const Gender = ({ optionTexts, hireText, setGender }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value, index) => {
    setSelectedOption(`option${index + 1}`);
    setGender(value)
    // Additional logic if needed
    console.log("I am checking from edufcation option", value);
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
          {optionTexts.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={`option${index + 1}`}
                checked={selectedOption === `option${index + 1}`}
                onChange={() => handleChange(option, index)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gender;
