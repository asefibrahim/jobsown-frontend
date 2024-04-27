import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NotSaved from "../../../assets/notsaved.png";
import openingIcon from "../../../assets/openingIcon.png";
import postedIcon from "../../../assets/postedIcon.png";
import jobTypeIcon from "../../../assets/jobTypeIcon.png";
import locationIcon from "../../../assets/locationIcon.png";
import salaryIcon from "../../../assets/salaryIcon.png";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import axios from "../../../api/axios";
import { AuthContext } from "../../../Provider/AuthProvider";
const JobList = ({ filteredJobs }) => {
  const { user } = useContext(AuthContext);

  const [bookmarkedJobs, setBookmarkedJobs] = useState({});

  const handleBookmarkClick = (jobId) => {
    // Toggle the bookmark state first
    setBookmarkedJobs((prevBookmarkedJobs) => {
      const isCurrentlyBookmarked = !!prevBookmarkedJobs[jobId];
      const updatedBookmarks = {
        ...prevBookmarkedJobs,
        [jobId]: !isCurrentlyBookmarked,
      };

      // Define the data payload for the POST request
      const data = {
        userEmail: user?.email,
        jobId: jobId,
        bookmarked: !isCurrentlyBookmarked,
      };

      // Perform the POST request using Axios
      axios
        .post("/jobs/saved", data)
        .then((response) => {
          // Handle the response from the server
          console.log("Bookmark updated:", response.data);
        })
        .catch((error) => {
          // If there's an error, revert the bookmark state change
          setBookmarkedJobs(prevBookmarkedJobs);
          console.error("Error updating bookmark:", error);
        });

      // Return the updated state
      return updatedBookmarks;
    });
  };

  return (
    <div>
      {Array.isArray(filteredJobs) ? (
        filteredJobs.map((job) => (
          <div class="p-1 lg:p-5 flex my-6 justify-between custom-box-shadow m-auto rounded-lg">
            <div class="w-1/3 lg:w-1/4  flex p-1 lg:p-4">
              <img
                className="rounded-lg"
                src={
                  "https://plus.unsplash.com/premium_photo-1661270475795-2eb52758718c?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="/"
              />
            </div>
            <div class="w-2/3 flex flex-1 flex-col justify-between p-1">
              <div class="flex w-full justify-between p-1 lg:p-2">
                <div class="text-xl font-semibold w-1/2 lg:w-4/5 p-1">
                  {job.JobTitle || job?.step1?.jobRole}
                </div>
                <div
                  className={`${
                    job.status
                      ? "hidden"
                      : "flex w-1/3 lg:w-1/5 p-1 items-center gap-2"
                  }`}
                >
                  <div
                    className="p-1 flex justify-center align-middle"
                    onClick={() => handleBookmarkClick(job._id)}
                  >
                    {!bookmarkedJobs[job._id] ? (
                      <CiBookmark className="text-2xl" />
                    ) : (
                      <IoBookmark className="text-2xl" />
                    )}
                  </div>
                  <div className="p-1">Save</div>
                </div>
              </div>
              <div class="flex w-full justify-start p-1 lg:p-2">
                <div class="p-0.5 pr-2">
                  <img src={salaryIcon} alt="/" />
                </div>
                <div class="p-0.5 font-semibold">{job.SalaryRange || job?.step3?.salary}</div>
              </div>
              <div class="flex w-full justify-between p-1 lg:p-2">
                <div class="flex flex-col w-full lg:w-4/5 justify-between">
                  <div class="flex w-1/1.5 justify-between">
                    <div class="flex w-1/2 justify-start">
                      <div class="p-0.5 pr-2">
                        <img src={jobTypeIcon} alt="/" />
                      </div>
                      <div class="p-0.5">{job.JobType || job?.step1?.jobType}</div>
                    </div>
                    <div class="flex w-1/2 justify-start">
                      <div class="p-0.5 pr-2">
                        <img src={openingIcon} alt="/" />
                      </div>
                      <div class="p-0.5 ">6 openings</div>
                    </div>
                  </div>
                  <div class="flex w-1/1.5 justify-between">
                    <div class="flex w-1/2 justify-start">
                      <div class="p-0.5 pr-2">
                        <img src={locationIcon} alt="/" />
                      </div>
                      <div class="p-0.5">{job.Location || job?.step3?.jobLocation}</div>
                    </div>
                    <div class="flex w-1/2 justify-start">
                      <div class="p-0.5 pr-2">
                        <img src={postedIcon} alt="/" />
                      </div>
                      <div class="p-0.5">Posted {job.date} month ago</div>
                    </div>
                  </div>
                </div>
                <div class="hidden lg:flex flex-col w-1/5">
                  <button
                    class={`flex bg-custom-blue rounded-lg p-1 ${
                      job.status && "hidden"
                    }`}
                  >
                    {" "}
                    <Link to={`/description/${job._id}`}>
                      <div class="m-auto p-1 text-white">
                        {job.status ? (
                          <p className="text-sm">Already Applied</p>
                        ) : (
                          <p className="text-sm flex items-center ps-10 justify-center">
                            {" "}
                            Apply
                          </p>
                        )}
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" pt-48 ps-28">
          <p className="text-center text-3xl text-gray-800 font-medium">
            {filteredJobs?.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobList;
