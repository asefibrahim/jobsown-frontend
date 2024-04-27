import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../api/axios";

const Job = ({ job, setJobs, jobs }) => {
  console.log(job._id);
  const { jobRole } = job.step1;

  const deleteJob = async (jobId) => {
    Swal.fire({
      title: "Are you sure to delete the job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/savedJobsFromEmployee/${jobId}`);
          // Filter out the deleted job from the jobs state
          setJobs(jobs.filter((job) => job._id !== jobId));
        } catch (error) {
          console.error("Failed to delete job:", error);
          // Handle error (e.g., show an error message)
        }
      }
    });
  };

  return (
    <div
      className="border border-gray-300 rounded p-4 mx-0 my-2 shadow-lg"
      style={{ width: "auto", height: "132px", borderRadius: "12px" }}
    >
      <div className="flex justify-between">
        <div className="mt-4 mb-4">
          <div className="flex flex-row items-center mb-4">
            <div className="flex flex-col items-center text-lg font-bold mr-4">
              {jobRole}
            </div>
            <div className="select-plate-button text-red-500 bg-gray-100 px-2 py-1 rounded text-xs">
              Select Plan
            </div>
          </div>
          <div className="flex">
            <div className="select-plate-button text-blue-500 bg-gray-100 px-2 py-1 rounded text-xs mr-2">
              Job Role: <span className="text-black">{jobRole}</span>
            </div>
            <div className="select-plate-button text-blue-500 bg-gray-100 px-2 py-1 rounded text-xs">
              Posted on: <span className="text-black">15 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Link to={`/employee-dashboard/applied-candidates/${job?._id}`}>
            <button className="border border-blue-800 rounded px-4 py-2">
              View Applied Candidates
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => deleteJob(job._id)}
            className="border border-blue-800 rounded px-4 py-2"
          >
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
