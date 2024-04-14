import React, { useState } from "react";

const JobDescriptionInput = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isBullet, setIsBullet] = useState(false);
  const [alignment, setAlignment] = useState("left");

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleBulletClick = () => {
    setIsBullet(!isBullet);
  };

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  };

  const handleInputChange = (e) => {
    setJobDescription(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex mb-2">
        <button
          className={`mr-2 focus:outline-none ${
            isBold ? "bg-gray-200" : ""
          }`}
          onClick={handleBoldClick}
        >
          B
        </button>
        <button
          className={`mr-2 focus:outline-none ${
            isItalic ? "bg-gray-200" : ""
          }`}
          onClick={handleItalicClick}
        >
          I
        </button>
        <button
          className={`mr-2 focus:outline-none ${
            isUnderline ? "bg-gray-200" : ""
          }`}
          onClick={handleUnderlineClick}
        >
          U
        </button>
        <button
          className={`mr-2 focus:outline-none ${
            isBullet ? "bg-gray-200" : ""
          }`}
          onClick={handleBulletClick}
        >
          Bullet
        </button>
        <select
          className="mr-2 p-1 border border-gray-300 focus:outline-none"
          value={alignment}
          onChange={handleAlignmentChange}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 focus:outline-none"
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
          listStyleType: isBullet ? "disc" : "none",
          textAlign: alignment,
        }}
        value={jobDescription}
        onChange={handleInputChange}
        placeholder="Enter job description..."
      />
      <div className="text-sm text-gray-500 mt-2">
        You can format your text using the options above.
      </div>
    </div>
  );
};

export default JobDescriptionInput;
