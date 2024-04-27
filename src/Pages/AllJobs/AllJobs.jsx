import React, { useContext, useEffect, useState } from "react"; // Import useEffect // Ensure axios is imported
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "../../api/axios";
import Job from "./Job";
import NewJobButton from "./NewJobButton";

const AllJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://jobsown-server.vercel.app/api/savedJobsFromEmployee?email=${user?.email}`
        );
        setJobs(response.data);
        console.log("Lets match", response.data);
      } catch (err) {
        console.error("Error fetching jobs: ", err);
        setError("Failed to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchJobs();
    }
  }, [user?.email]); // Dependency array, fetchJobs will run when `user.email` changes

  return (
    <>
      <div className="w-full ml-12">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">All Jobs</div>
            <div className="ml-auto mx-0 my-6">
              <Link to={"/employee-dashboard/post-a-newjob"}>
                <NewJobButton />
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="w-full h-56 flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : jobs?.length === 0 ? (
            <div className="min-h-60 flex justify-center items-center text-lg font-medium border rounded-lg">
              You don't have posted any jobs yet!
            </div>
          ) : (
            <div>
              {jobs?.map((job, index) => (
                // Ensure to pass a key prop to Job, ideally job's unique identifier
                <Job key={index} job={job} jobs={jobs} setJobs={setJobs} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllJobs;
