import React, { useState } from 'react';

const RoundedButton = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${isClicked ? 'text-blue-300 border-blue-300 font-semibold' : ''}`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
