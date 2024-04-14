import React from "react";
import "./JobsbyLocation.css";
import kuwait from "../Images/Kuwait.png";
import qatar from "../Images/Qatar.png";
import saudiarab from "../Images/SaudiArabia.png";

function JobsbyLocation() {
  // custom-heading-plate
  //
  return (
    <div className="lg:pt-20 pt-10 lg:px-0 px-6 ">
      <div className="">
        <div className="flex items-center justify-between pb-10 lg:pb-20 ">
          <h1 className="custom-heading-plate lg:leading-[60px] lg:text-[40px] text-xl">
            Jobs by Location
          </h1>
          <a href="/" className="seeAllCustom lg:text-[24px]">
            View all Location&#8594;
          </a>
        </div>
        <div className=" lg:px-0 px-4">
          <div className="countrysBoxIn">
            {JobsbyLocationdata.map((J) => (
              <div className="FlagBox">
                <img src={J.countryFlag} alt="saudiarab" className="Flag" />
                <div className="countrysText">
                  <strong>{J.countryName}</strong> | {J.NumbersOfJob} jobs
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const JobsbyLocationdata = [
  {
    id: "1",
    countryName: "Saudi Arabia",
    NumbersOfJob: "13,500",
    countryFlag: saudiarab,
  },
  {
    id: "2",
    countryName: "Qatar",
    NumbersOfJob: "13,500",
    countryFlag: qatar,
  },
  {
    id: "3",
    countryName: "Kuwait",
    NumbersOfJob: "13,500",
    countryFlag: kuwait,
  },
];
export default JobsbyLocation;
