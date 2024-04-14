import React from "react";
import CardImg from "../../../assets/Card_visa.png";
import ReportIcon from "../../../assets/ReportIcon.png";

const Card = () => {
  return (
    <div className="custom-shadow-wallet p-4">
      <div className="p-2 pb-8 flex justify-center items-center w-4/5 mx-auto custom-border-bottom-balance">
        <img src={CardImg} alt="/" />
      </div>
      <div className="flex py-2 w-4/5 mx-auto items-center">
        <div className="py-2">
          <img src={ReportIcon} alt="/" />
        </div>
        <div className="p-2 flex items-center	text-2xl">Billing details</div>
      </div>
      <div className="flex justify-between py-2 w-4/5 mx-auto">
        <div class="flex 	items-center p-2 text-xl">Kanishk Singh</div>
        <div className="flex items-center">
          <div className="text-2xl font-bold custom-text-wallet items-center p-2 ">
            +
          </div>
          <div className=" font-light pt-1">Add remaining details</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
