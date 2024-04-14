import React, { useContext, useEffect, useState } from "react";

import SearchBar from "../../../assets/searchbar.png";

import { CircularProgress } from "@mui/material";
import JobList from "../../MyJobs/JobList/Joblist.jsx";
import Dropdown from "../../../Components/SavedJobs/DropDown.jsx";
import { AuthContext } from "../../../Provider/AuthProvider.jsx";
import axios from "../../../api/axios.js";

const SavedJobs = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const fetchFilteredJobs = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(`/filteredJobs?email=${user?.email}`);
      setFilteredJobs(response.data);
      setIsLoading(false); // Stop loading after data is fetched
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
      setIsLoading(false); // Stop loading on error
    }
  };

  useEffect(() => {
    fetchFilteredJobs();
  }, [user]);
  console.log(filteredJobs);
  const sortOptions = [
    { id: "default", label: "Experience" },
    { id: "option1", label: "Newest First" },
    { id: "option2", label: "Oldest First" },
  ];
  return (
    <div>
      <div className="flex max-w-5xl mx-auto mt-20  w-full  my-6 justify-between flex-col lg:flex-row">
        <div className="lg:w-1/4 text-3xl font-semibold text-blue-700 p-2 ps-6">
          My Jobs
        </div>
        <div className="flex lg:w-3/4 p-2 gap-2">
          <div className="flex-1 flex rounded-full border border-solid border-blue-700">
            <div className="lg:w-4/5 m-auto  px-4">
              <input
                className="w-full text-lg ps-2  focus:outline-none "
                placeholder="Search Job By Name"
              ></input>
            </div>
            <div className="lg:w-1/5 flex justify-end items-center p-2">
              <div className="flex items-center bg-blue-800 rounded-full ">
                <img className="w-1/3" src={SearchBar} alt="/" />
                <div className="mx-auto text-lg text-white">Search</div>
              </div>
            </div>
          </div>
          <button
            className="focus:outline-none"
            onClick={() => setDropdownVisible(!isDropdownVisible)}
          >
            <div className="lg:w-3/20  flex align-middle px-5 py-4 rounded-full lg:border border-solid border-blue-700 m-auto gap-2">
              <span className="font-semibold hidden lg:inline">Sort By</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden lg:inline w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:hidden w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      {isDropdownVisible && (
        <Dropdown
          options={sortOptions}
          selectedOption={selectedSortOption}
          onSelect={(optionId) => {
            setSelectedSortOption(optionId);
            setDropdownVisible(false);
          }}
        />
      )}

      <div>
        {isLoading ? (
          <div className="flex items-center mt-32 justify-center ">
            <CircularProgress />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <JobList filteredJobs={filteredJobs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
