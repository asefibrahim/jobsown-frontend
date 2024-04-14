import React from "react";
import radioBtnIcon from "../../../assets/radioBtnIcon.png";
import "./index.css";

const Pros = () => {
  return (
    <div class=" custom-bg-pros custom-box-3 p-4 ml-8 mr-8 mt-4 mb-4">
      <div class="text-3xl p-2">Pros of Joining this Job</div>
      <div class="flex justify-between p-2">
        <div class="flex">
          <div class="flex justify-center items-center p-2">
            <img src={radioBtnIcon} alt="/" />
          </div>
          <div class="flex justify-center items-center p-2 text-2xl">
            Good working culture
          </div>
        </div>
        <div class="flex">
          <div class="flex justify-center items-center p-2 ">
            <img src={radioBtnIcon} alt="/" />
          </div>
          <div class="flex justify-center items-center p-2 text-2xl">
            Mentorship
          </div>
        </div>
        <div class="flex">
          <div class="flex justify-center items-center p-2">
            <img src={radioBtnIcon} alt="/" />
          </div>
          <div class="flex justify-center items-center p-2 text-2xl">
            Excellent Pay
          </div>
        </div>
        <div class="flex">
          <div class="flex justify-center items-center p-2">
            <img src={radioBtnIcon} alt="/" />
          </div>
          <div class="flex justify-center items-center p-2 text-2xl">
            Learning atmosphere
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pros;
