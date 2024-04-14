import React, { useContext, useState, useEffect } from "react"; // Import useEffect // Ensure axios is imported
import Sidebar from "../FinalHomeScreen/SideBar";
import NewJobButton from "./NewJobButton";
import Job from "./Job";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "../../api/axios";

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
          `/savedJobsFromEmployee?email=${user?.email}`
        );
        setJobs(response.data);
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
      <div className="w-full">

        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold ml-6">All Jobs</div>
            <div className="ml-auto mx-6 my-6">
              <Link to={"/post-a-newjob"}>
                <NewJobButton />
              </Link>
            </div>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
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
