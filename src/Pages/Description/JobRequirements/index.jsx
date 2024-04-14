import React from "react";
import "./index.css";
import radioBtnChecked from "../../../assets/radioBtnChecked.png";

const jobRequirement = [
  {
    title: "UX Thinking",
  },
  {
    title: "Digital Art illustration",
  },
  {
    title: "Figma and other softwares",
  },
  {
    title: "Character making",
  },
  {
    title: "Adobe after effects",
  },
  {
    title: "User centric design",
  },
  {
    title: "Graphic designing",
  },
  {
    title: "Stop motion Animation",
  },
];

const JobReq = () => {
  return (
    <div class="custom-bg-about p-6 m-4">
      <div class="text-2xl text-gray-800 custom-col-blue p-2">
        Job Requirements
      </div>
      <div className="grid-container pt-12 pb-20 ">
        {jobRequirement.map((item, index) => (
          <div key={index} className="grid-item flex gap-4">
            {/* Your content for each item goes here */}
            <div class="flex justify-center items-center">
              <input
                type="radio"
                className="h-6 w-6 text-blue-500 border-blue-500"
              />
            </div>
            <div class="text-xl text-gray-800 flex justify-center items-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobReq;
