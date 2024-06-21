import React, { useContext } from "react";
import {
  FaHome,
  FaBook,
  FaFileSignature,
  FaUser,
  FaStore,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import { AuthContext } from "../../../Provider/AuthProvider";
import Header from "../../../Pages/FinalHomeScreen/Header";

const CandidateDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <Header />
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col   ">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side shadow-xl">
            <label htmlFor="my-drawer-2"></label>
            <ul className="menu p-4 w-80 h-full text-lg">
              <div className=" mx-auto pt-8 ">
                <img
                  src={`https://i.ibb.co/28LLzYS/8eab480a-38ce-4a2a-8dd9-3e2e2f4a0230.jpg`}
                  alt="Profile"
                  className="h-12 w-12 rounded-full mr-4"
                />
              </div>
              <h1 className="font-medium mt-2 text-2xl text-center mb-8">
                {user?.displayName} (Candidate){" "}
              </h1>

              <li className="pt-6">
                <NavLink
                  to="/candidateDashboard/savedJobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 bg-blue-100 font-medium tracking-wide"
                      : "font-medium tracking-wide text-gray-800 "
                  }
                >
                  {" "}
                  <FaFileSignature></FaFileSignature>
                  Saved Jobs
                </NavLink>
              </li>

              <li className="pt-6">
                <NavLink
                  to="/candidateDashboard/appliedJobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 bg-blue-100 font-medium tracking-wide"
                      : "font-medium tracking-wide text-gray-800 "
                  }
                >
                  {" "}
                  <FaFileSignature></FaFileSignature>
                  Applied Jobs
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/job-search">
                  <FaUser></FaUser>Search Jobs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
