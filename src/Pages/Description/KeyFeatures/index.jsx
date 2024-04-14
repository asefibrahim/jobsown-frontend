import React from "react";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineSchool } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { FaRegCalendarMinus } from "react-icons/fa";

import "./index.css";

const KeyFeatures = () => {
  return (
    <div class=" flex custom-box-3 p-4 ml-9 mr-8 mt-4 mb-4 justify-between">
      <div class="flex">
        <div class="flex justify-center items-center p-2">
          <TfiBag className="text-2xl" />
        </div>
        <div class="flex justify-center items-center p-2 custom-col-blue text-xl">
          Full Time
        </div>
      </div>
      <div class="flex">
        <div class="flex justify-center items-center p-2">
          <CiLocationOn className="text-3xl" />
        </div>
        <div class="flex justify-center items-center p-2 custom-col-blue text-xl">
          Pune
        </div>
      </div>
      <div class="flex">
        <div class="flex justify-center items-center p-2">
          <MdOutlineSchool className="text-4xl" />
        </div>
        <div class="flex justify-center items-center p-2 custom-col-blue text-xl">
          Beginner level
        </div>
      </div>
      <div class="flex">
        <div class="flex justify-center items-center p-2">
          <RxAvatar className="text-3xl" />
        </div>
        <div class="flex justify-center items-center p-2 custom-col-blue text-xl">
          5 openings
        </div>
      </div>
      <div class="flex">
        <div class="flex justify-center items-center p-2">
          <FaRegCalendarMinus className="text-2xl" />
        </div>
        <div class="flex justify-center items-center p-2 custom-col-blue text-xl">
          Posted 1 month ago
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
