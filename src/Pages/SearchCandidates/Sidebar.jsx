import React, { useState } from "react";
import searchIconBlack from "../../assets/searchIconBlack.png";
import saved from "../../assets/saved.png";
import reportIconBlack from "../../assets/reportIconBlack.png";
import CoinsIcon from "../../assets/CoinsIcon.png";
import referIcon from "../../assets/referIcon.png";
import balanceIcon from "../../assets/balanceIcon.png";
import { HiOutlineMenu } from "react-icons/hi";

const Sidebar = () => {
  const [showText, setShowText] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleTextVisibility = () => {
    setShowText(!showText);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const sidebarWidth = showText ? "w-64" : "w-16";

  return (
    <div
      className={`fixed top-0 h-screen bg-white ${sidebarWidth} h-screen p-5 text-gray-800 flex flex-col my-3 mx-0 shadow-lg transition-all duration-300`}
    >
      <button
        className="mb-2 h-12 flex items-center focus:outline-none"
        onClick={toggleTextVisibility}
      >
        <HiOutlineMenu size={30} />
      </button>
      <ul className="mb-5">
        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "TopJobs"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("TopJobs")}
        >
          <img src="path_to_your_image" alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Top Jobs</span>}
        </li>
        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "SearchCandidates"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("SearchCandidates")}
        >
          <img src={searchIconBlack} alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Search Candidates</span>}
        </li>

        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "SavedApplicants"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("SavedApplicants")}
        >
          <img src={saved} alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Saved Applicants</span>}
        </li>

        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "Reports"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("Reports")}
        >
          <img src={reportIconBlack} alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Reports</span>}
        </li>

        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "Coins"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("Coins")}
        >
          <img src={CoinsIcon} alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Coins</span>}
        </li>
        <li
          className={`mb-2 h-12 flex items-center ${
            selectedItem === "ReferandEarn"
              ? "hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"
              : ""
          }`}
          onClick={() => handleItemClick("ReferandEarn")}
        >
          <img src={referIcon} alt="Image" className="mr-3 w-6 h-6" />
          {showText && <span className="ml-1">Refer and Earn</span>}
        </li>
      </ul>
      {showText && (
        <div className="mt-auto flex flex-col items-center justify-center">
          <img
            src={balanceIcon}
            alt="Your Image"
            className="mb-3 h-10 w-auto"
          />
          <div className="mb-4 text-blue-500">Coin Balance: 200</div>
          <button className="bg-transparent text-gray-800 border border-blue-600 px-5 py-2 rounded">
            Buy More Coins
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
