import React, { useState } from "react";

const DropRecords = ({ optionTexts, hireText }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value) => {
    setSelectedOption(value);
    // Additional logic if needed
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
                onChange={() => handleChange(`option${index + 1}`)}
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

export default DropRecords;
