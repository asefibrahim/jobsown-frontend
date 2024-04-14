import React from "react";
import NotSaved from "../../../assets/notsaved.png";
import playBtn from "../../../assets/playButton.png";

const JobList = ({ filteredJobs }) => {
  console.log("fil is ", filteredJobs);
  return (
    <div>
      {filteredJobs.map((job) => (
        <div className="w-100 p-2 lg:p-4 flex my-5 justify-between custom-box-shadow rounded-3xl">
          <div className="w-1/3 lg:w-1/6 flex p-2 lg:p-4">
            <img src={job.profileImg} alt="/" />
          </div>

          <div className="w-2/3 lg:w-5/6 flex flex-1 flex-col justify-between">
            <div className="flex w-full justify-between p-1 lg:p-2 ">
              <div className="text-2xl font-semibold		w-2/3 lg:w-4/5 p-1">
                {job.name}
              </div>

              <div className="flex w-1/3 lg:w-1/5 p-1 justify-end items-center mt-0">
                <div className="p-1 w-1/2 lg:w-1/5 flex">
                  <img className="h-1/6 lg:h-1/3" src={NotSaved} alt="/" />
                </div>
                <div className="hidden lg:inline w-1/6 p-1">Save</div>
              </div>
            </div>

            <div className="flex w-50 p-2 justify-start mb-4">
              <div className="font-semibold p-0.5 pr-4">
                Skills: {job.skill}
              </div>
              <div className="p-0.5">{job.date}</div>
            </div>

            <div className="flex w-full justify-between">
              <div className="flex justify-start w-1/2 lg:w-4/5 mr-2 mb-4">
                <div className="flex w-auto p-0.5 lg:p-2 mr-1 lg:mr-4 bg-custom-grey rounded-2xl p-2">
                  <div className="font-semibold	text-blue-700 m-auto">
                    Job Role{" "}
                  </div>
                  <div className="m-auto">: {job.jobRole} </div>
                </div>

                <div className="hidden lg:flex p-2 bg-custom-grey rounded-2xl mr-4">
                  <div className="font-semibold	text-blue-700 m-auto">
                    Job Type
                  </div>{" "}
                  <div className="m-auto">: {job.jobType}</div>
                </div>
                <div className="hidden lg:flex p-2 bg-custom-grey rounded-2xl mr-4">
                  <div className="font-semibold	text-blue-700 m-auto">
                    Experience
                  </div>
                  <div className="m-auto"> : {job.experience} </div>
                </div>
                <div class="hidden lg:flex p-2 bg-custom-grey rounded-2xl mr-4">
                  <div className="font-semibold	text-blue-700 m-auto">
                    Expected Salary
                  </div>{" "}
                  <div className="m-auto"> : {job.expectedSalary} </div>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end bg-custom-grey rounded-2xl p-2 w-1/3 lg:w-1/6 mb-4">
                <div className="p-0.5 lg:p-1 m-auto w-1/4">
                  <img src={playBtn} alt="/" />
                </div>
                <div className="p-0.5 lg:p-1 text-xs lg:text-base m-auto w-3/4">
                  Watch Interview
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
