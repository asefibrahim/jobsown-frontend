import React, { useContext, useEffect, useState } from "react";

import DropDown from "../../Components/JobSearch/DropDown";
import JobList from "../MyJobs/JobList/Joblist";
import { AuthContext, useData } from "../../Provider/AuthProvider";
import axios from "../../api/axios";
import Header from "../FinalHomeScreen/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination, Stack } from "@mui/material";
const JobSearch = () => {
  const { data } = useData();
  const { user } = useContext(AuthContext);
  const [totalJobs, setTotalJobs] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [salaryQuery, setSalaryQuery] = useState("");
  const [workTypeQuery, setWorkTypeQuery] = useState("");
  const [genderTypeQuery, setGenderTypeQuery] = useState("");
  const { setData } = useData([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState(""); // State for storing input value

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update state with input value
  };
  console.log(salaryQuery);
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  const MonthlySalary = [
    "AED 60,000-AED 80,000",
    "AED 80,000-AED 100,000",
    "AED 100,000-AED 120,000",
    "AED 120,000-AED 140,000",
  ];
  const WorkType = ["Fresher", "Internship", "Full-Time"];
  const Gender = ["Men", "Female"];
  const handleSearch = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/jobs`, {
        params: {
          query: searchQuery || searchTerm,
          location: locationQuery,
          salaryRange: salaryQuery,
          workType: workTypeQuery,
          genderType: genderTypeQuery,
          page,
          limit: 5,
        },
      });
      setData(response.data.jobs);
      setTotalJobs(response.data.totalJobs);
      console.log(response.data);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
      setLoading(false);
    } catch (error) {
      console.error("Error searching for jobs:", error);
      setLoading(false);
    }
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    handleSearch(value);
  };

  useEffect(() => {
    handleSearch();
  }, [
    searchQuery,
    locationQuery,
    salaryQuery,
    searchTerm,
    workTypeQuery,
    genderTypeQuery,
  ]);

  console.log('I got data found',data);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto ">
        <div className="flex mt-20 flex-col md:flex-row items-center border border-blue-500 rounded-md px-4 py-2   my-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md md:rounded-l-md py-2 px-4 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Location..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="rounded-md md:rounded-r-md py-2 px-4 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded-md md:ml-auto"
          >
            Update Search
          </button>
        </div>

        <div className="lg:grid grid-cols-4 mt-12 mb-20">
          <div className=" h-[1000px]  bg-white border border-gray-200 rounded p-4 flex flex-col  mx-10">
            <div className="flex">
              <div>
                <h1 className="text-blue-500 text-xl font-bold mb-4">
                  Filters
                </h1>
              </div>
              <div className="text-black text-gray-500 font-semibold ml-auto">
                Clear
              </div>
            </div>
            <hr className="my-4" />

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search by job title"
                value={searchTerm} // Controlled input
                onChange={handleInputChange} // Handle input change
                className="border border-gray-300 rounded-md py-2 ps-3 mx-3 pr-4 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-2 gap-1">
              <div className="text-sm flex items-center justify-center border border-blue-500 rounded-lg  my-1 px-1 py-1">
                UI/UX designer
              </div>
              <div className="text-sm border flex items-center justify-center border-blue-500 rounded-lg  my-1 px-1 py-1">
                Product designer
              </div>
            </div>
            <div className="text-sm border flex items-center justify-center border-blue-500 rounded-lg my-1 px-1 py-1">
              Graphic designer
            </div>

            <DropDown setSalaryQuery={setSalaryQuery} options={MonthlySalary}>
              <div
                className={`font-semibold text-blue-800 py-2 ${
                  !isOptionsVisible ? "pb-16" : ""
                }pb-16 flex justify-between`}
                onClick={toggleOptions}
              >
                Monthly Salary
                <span className="ml-2">{isOptionsVisible ? "▲" : "▼"}</span>
              </div>
            </DropDown>
            <DropDown setWorkTypeQuery={setWorkTypeQuery} options={WorkType}>
              <div
                className="font-semibold text-blue-800 py-2 pb-1 flex justify-between"
                onClick={toggleOptions}
              >
                Work Type
                <span className="ml-2">{isOptionsVisible ? "▲" : "▼"}</span>
              </div>
            </DropDown>
            <DropDown setGenderTypeQuery={setGenderTypeQuery} options={Gender}>
              <div
                className="font-semibold text-blue-800 py-2 pb-1 flex justify-between"
                onClick={toggleOptions}
              >
                Gender
                <span className="ml-2">{isOptionsVisible ? "▲" : "▼"}</span>
              </div>
            </DropDown>
          </div>

          <div className="col-span-3">
            <div className="flex justify-between">
              <div class="font-medium text-gray-800 text-xl">
                {totalJobs || 0} Results
              </div>
            </div>
            <div>
              {isLoading ? (
                <div className="flex mt-36   items-center justify-center">
                  <CircularProgress />
                </div> // Display a loading indicator
              ) : (
                <div>
                  <JobList filteredJobs={data} />
                  <div className="flex items-center justify-center pt-12">
                    <Stack spacing={2}>
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                      />
                    </Stack>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
