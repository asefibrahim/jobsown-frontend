import React from "react";
import "./TrendingJobs.css";
import Driver from "../Images/Driver.png";
import Receptionist from "../Images/Receptionist.png";
import Plumber from "../Images/Plumber.png";
import { IoIosArrowForward } from "react-icons/io";
function TrendingJobs() {
  return (
    <div className="lg:px-0 px-6">
      <h1 className="custom-heading-plate text-center font-bold lg:text-4xl text-2xl py-20">
        Popular Searches On Jobsown
      </h1>
      <div className="grid lg:grid-cols-3 gap-6  ">
        {TrendingJobsdata.map((T) => (
          <div className="pt-4 px-4 border rounded-2xl h-80">
            <h2 className="text-gray-400 text-xl tracking-wide">
              #Trending Jobs
            </h2>
            <p className="text-2xl font-medium pt-6">{T.fildName}</p>

            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded-xl gap-2">
                <button className="text-sm font-medium">View All</button>
                <IoIosArrowForward className="text-blue-600" />
              </div>
              <img className="h-48 w-[60%]" src={T.jobImg} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button type="submit" className="trendingSeeAllBtn">
          See all
        </button>
      </div>
    </div>
  );
}
const TrendingJobsdata = [
  {
    id: "1",
    fildName: "In the Driver's Seat",
    jobImg: Driver,
  },
  {
    id: "2",
    fildName: "The Receptionist's Guide",
    jobImg: Receptionist,
  },
  {
    id: "3",
    fildName: "Plumbing Prowess",
    jobImg: Plumber,
  },
];

export default TrendingJobs;
