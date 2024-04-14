import React from "react";
import "./index.css";

const Jobs = [
  {
    title: "2D animator",
    salary: "50,000 -1,49,999/Per month",
    datePosted: "Posted  1  month ago",
  },
  {
    title: "2D animator",
    salary: "50,000 -1,49,999/Per month",
    datePosted: "Posted  1  month ago",
  },
  {
    title: "2D animator",
    salary: "50,000 -1,49,999/Per month",
    datePosted: "Posted  1  month ago",
  },
  {
    title: "2D animator",
    salary: "50,000 -1,49,999/Per month",
    datePosted: "Posted  1  month ago",
  },
];

const MoreJobs = () => {
  return (
    <div class="custom-bg-about p-6 m-4">
      <div class="text-2xl text-gray-800 custom-col-blue p-2">
        More like this
      </div>
      <div>
        {Jobs.map((job) => (
          <div class="flex justify-between p-4 custom-border-morejobs">
            <div>
              <div class="text-xl p-1">{job.title}</div>
              <div class="p-1">{job.salary}</div>
              <div class="p-1">{job.datePosted}</div>
            </div>
            <div>
              <button class="custom-button-morejobs w-28 text-sm  py-2">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreJobs;
