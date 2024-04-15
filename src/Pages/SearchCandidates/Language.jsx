import React, { useState } from "react";
const languagesArry = ["English", "French", "Spanish", "Hindi", "German", "Mandarin"];
const Language = ({ hireText, setSearchLanguage }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedBy, setSelectedBy] = useState("Language");
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleChange = (value) => {
    setSelectedBy(value);
    setSearchLanguage(value);
    console.log("does I got values ", value);
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
            <option value="">Languages</option>
            {
              languagesArry?.map(indus => (
                <option value={indus}>{indus}</option>
              ))
            }
          </select>
        </div>
      )}
    </div>
  );
};

export default Language;
