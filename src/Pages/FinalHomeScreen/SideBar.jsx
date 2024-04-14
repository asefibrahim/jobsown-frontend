import React from "react";
import { FaToolbox } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import balanceIcon from "../../assets/balanceIcon.png";
import reportIconBlack from "../../assets/reportIconBlack.png";
import saved from "../../assets/saved.png";
import searchIconBlack from "../../assets/searchIconBlack.png";
const Sidebar = () => {
  return (
    <div className="bg-white w-80 rounded-xl h-[700px] p-5 text-gray-800 flex flex-col my-3 mx-0 shadow-lg">
      <ul className="mb-5">
        <NavLink to={"/employee-dashboard/post-a-newjob"}>
            {({ isActive }) => (
               <li className={isActive ? "mb-2 h-12 flex items-center bg-blue-200 border-blue-600 border-l-4 pl-2 transition duration-300" : "mb-2 h-12 flex items-center hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"}>
               <FaToolbox className="mr-3 w-6 h-6" />
               <span>Post a new Job</span>
             </li>
                  )}
            </NavLink>
            <NavLink to={"/employee-dashboard/search-candidate-form"}>
            {({ isActive }) => (
               <li className={isActive ? "mb-2 h-12 flex items-center bg-blue-200 border-blue-600 border-l-4 pl-2 transition duration-300" : "mb-2 h-12 flex items-center hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"}>
               <img src={searchIconBlack} alt="Image" className="mr-3 w-6 h-6" />
               <span>Search Candidates</span>
             </li>
                  )}
            </NavLink>
        <li className="mb-2 h-12 flex items-center hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300">
          <img src={saved} alt="Image" className="mr-3 w-6 h-6" />
          <span className="ml-1">Saved Applicants</span>
        </li>
        <NavLink to={"/employee-dashboard/alljobs"}>
            {({ isActive }) => (
               <li className={isActive ? "mb-2 h-12 flex items-center bg-blue-200 border-blue-600 border-l-4 pl-2 transition duration-300" : "mb-2 h-12 flex items-center hover:bg-blue-200 hover:border-blue-600 hover:border-l-4 hover:pl-2 transition duration-300"}>
               <img src={reportIconBlack} alt="Image" className="mr-3 w-6 h-6" />
               <span>My Posted jobs</span>
             </li>
                  )}
            </NavLink>
      </ul>
      <div className="mt-auto flex flex-col items-center justify-center">
        <img src={balanceIcon} alt="Your Image" className="mb-3 h-10 w-auto" />
        <div className="mb-4 text-blue-500">Coin Balance: 200</div>
        <button className="bg-transparent text-gray-800 border border-blue-600 px-5 py-2 rounded">
          Buy More Coins
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
