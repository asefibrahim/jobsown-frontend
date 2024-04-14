import React, { useState, useEffect } from "react";
import profileImg from "../../assets/profileImg.png";
import playBtn from "../../assets/playButton.png";
import Saved from "../../assets/saved.png";
import NotSaved from "../../assets/notsaved.png";
import SearchBar from "../../assets/searchbar.png";
import JobList from "./JobList/JobList";
import "./index.css";
import Dropdown from "../../Components/SavedJobs/DropDown";

const SavedJobs = () => {
  const jobsData = [
    {
      id: 1,
      profileImg: profileImg,
      name: "Raymond Galario",
      skill: "Driving",
      jobRole: "Driver",
      jobType: "Permanant",
      experience: "5+",
      expectedSalary: "10000",
      date: "15-01-2024",
    },
    {
      id: 1,
      profileImg: profileImg,
      name: "Harshit Vaish",
      skill: "Driving",
      jobRole: "Driver",
      jobType: "Permanant",
      experience: "5+",
      expectedSalary: "10000",
      date: "15-01-2024",
    },
    {
      id: 1,
      profileImg: profileImg,
      name: "Raymond Galario",
      skill: "Driving",
      jobRole: "Driver",
      jobType: "Permanant",
      experience: "5+",
      expectedSalary: "10000",
      date: "15-01-2024",
    },
    {
      id: 1,
      profileImg: profileImg,
      name: "Raymond Galario",
      skill: "Driving",
      jobRole: "Driver",
      jobType: "Permanant",
      experience: "5+",
      expectedSalary: "10000",
      date: "15-01-2024",
    },
    {
      id: 1,
      profileImg: profileImg,
      name: "Raymond Galario",
      skill: "Driving",
      jobRole: "Driver",
      jobType: "Permanant",
      experience: "5+",
      expectedSalary: "10000",
      date: "15-01-2024",
    },
  ];
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const sortOptions = [
    { id: "default", label: "Experience" },
    { id: "option1", label: "Newest First" },
    { id: "option2", label: "Oldest First" },
  ];

  const handleSearch = (query) => {
    const filtered = jobsData.filter((job) =>
      job.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex w-full my-6 justify-between flex-col lg:flex-row">
        <div className="lg:w-1/4 text-3xl font-semibold text-blue-700 p-2">
          Saved Applicant
        </div>

        <div className="flex lg:w-3/4 p-2 gap-2">
          <div className="flex-1 flex rounded-full border border-solid border-blue-700">
            <div className="lg:w-4/5 m-auto p-2">
              <input
                className="w-full p-2 focus:outline-none"
                placeholder="Search Job By Name"
              ></input>
            </div>

            <div className="lg:w-1/5 flex justify-end items-center p-2">
              <img className="w-1/3" src={SearchBar} alt="/" />
            </div>
          </div>
          <button
            className="focus:outline-none"
            onClick={() => setDropdownVisible(!isDropdownVisible)}
          >
            <div className="lg:w-3/20  flex align-middle p-5 rounded-full lg:border border-solid border-blue-700 m-auto gap-2">
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
      <div className="my-2 w-full">
        <JobList filteredJobs={filteredJobs} />
      </div>
    </div>
  );
};

export default SavedJobs;
