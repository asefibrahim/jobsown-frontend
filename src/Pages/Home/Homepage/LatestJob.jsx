import React from "react";
import "./LatestJob.css";
import LT from "../Images/LT.png";
import star from "../Images/star.svg";
import {
  CiBookmark,
  CiLocationArrow1,
  CiLocationOn,
  CiTimer,
} from "react-icons/ci";

function LatestJob() {
  return (
    <div className=" pt-10 ">
      <div className="lg:py-20 ">
        <div class="flex w-full px-4  justify-between">
          <div class="lg:text-[40px] text-xl lg:leading-[60px] custom-heading-plate p-2">
            Latest Job Openings
          </div>
          <div class="lg:text-[24px] flex items-center seeAllCustom p-2">
            See All Jobs&#8594;
          </div>
        </div>
        <div class="text-[24px] md:block hidden custom-subheading-plate p-2">
          Know your value and choose jobs that make your life better
        </div>
      </div>
      <div className="flex  px-4  justify-between  items-center">
        <div className="flex overflow-x-auto whitespace-nowrap py-4 space-x-4 md:space-x-0 md:flex-wrap">
          {LatestJobdata.map((L, index) => (
            <div
              className=" flex pr-8 ps-4 justify-between lg:px-8 border-b-2 border-l border-r border- mb-4 lg:bg-white bg-[#F5F5F5] py-8  rounded-xl lg:rounded-lg md:w-full "
              key={index}
            >
              {/* Flex container for the card */}
              <div className="flex lg:items-center gap-1 lg:gap-3 space-x-4">
                {/* Left section for the company logo */}
                <div className="flex-shrink-0 lg:pt-0 pt-2">
                  <img
                    src={L.companyLogo}
                    className="lg:w-16 lg:h-16 w-14 h-14"
                    alt="Company Logo"
                  />
                </div>

                {/* Right section for job details */}
                <div className="flex-grow">
                  <div className="font-medium text-gray-800 tracking-wide lg:text-2xl text-lg pb-2">
                    {L.Position}
                  </div>
                  <div className="text-sm tracking-wide font-medium lg:flex items-center gap-5 text-gray-700 pb-1">
                    <span> Larsen & Toubro</span>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-sm text-yellow-400">
                        <i className="fa-solid fa-star mr-1"></i>{" "}
                        <p className="text-gray-700">{L.Rating}</p>
                      </div>
                      <div className="text-sm tracking-wide text-gray-700 ml-2">
                        {L.NumbersOfReview} Reviews
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 grid lg:grid-cols-4 grid-cols-2 gap-3">
                    <div className="lg:text-sm text-xs flex text-gray-500 font-medium items-center gap-1  lg:bg-gray-100 bg-gray-200 px-2 py-1 rounded-lg">
                      <span>
                        <CiLocationOn className="font-bold" />
                      </span>
                      <p className="tracking-wide">{L.JobLocation}</p>
                    </div>
                    <div className="lg:text-sm text-xs flex text-gray-500 font-medium items-center gap-1  lg:bg-gray-100 bg-gray-200 ps-1 lg:px-2 py-1 rounded-lg">
                      <span>
                        <CiTimer className="font-bold" />
                      </span>
                      <p className="lg:tracking-wide">8 Hours</p>
                    </div>
                    <div className="lg:text-sm text-xs flex text-gray-500 font-medium items-center gap-1 lg:bg-gray-100 bg-gray-200 ps-2 lg:px-2 py-1 rounded-lg">
                      <p className="lg:tracking-wide">5000AED</p>
                    </div>
                    <div className="lg:text-sm text-xs flex text-gray-500 font-medium items-center gap-1 lg:bg-gray-100  bg-gray-200 px-2 py-1 rounded-lg">
                      <p className="lg:tracking-wide">{L.TypeOfJob}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2  ps-8 lg:-mt-[70px] -mt-[60px]  ">
                <CiBookmark />
                <span className="text-sm font-medium md:block hidden text-gray-700">
                  Save
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const LatestJobdata = [
  {
    id: "1",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
  {
    id: "2",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
  {
    id: "3",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
  {
    id: "4",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
  {
    id: "5",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
  {
    id: "6",
    companyLogo: LT,
    Position: " Heavy Equipment",
    Rating: "4.6",
    NumbersOfReview: "50",
    JobLocation: "Kuwait",
    JobTiming: "8",
    JobAed: "5000",
    TypeOfJob: "Full time",
  },
];
export default LatestJob;
