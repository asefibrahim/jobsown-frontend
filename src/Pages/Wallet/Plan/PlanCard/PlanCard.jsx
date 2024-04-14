import React from "react";
import "./PlanCard.css";
import BalanceIcon from "../../../../assets/balanceIcon.png";
import ForIcon from "../../../../assets/ForIcon.png";
const PlanCard = ({ packageName, cost1, cost2, link }) => {
  return (
    <div className="p-4 my-2 custom-bg-plan w-1/5">
      <div className="text-2xl font-semibold custom-col-blue-purchase px-2 pb-4">
        {packageName}
      </div>

      <div className="flex items-center pb-4">
        <div className="p-1">
          <img className="w-4/5" src={BalanceIcon} alt="/" />
        </div>
        <div class=" flex items-center justify-center text-3xl font-medium">
          {cost1}
        </div>
      </div>

      <div className=" flex items-end pb-4">
        <div className="p-2 ">
          <img src={ForIcon} alt="/" />
        </div>
        <div className=" flex items-center justify-center text-3xl font-medium">
          {cost2}
        </div>
      </div>
      <button class="w-full p-2 custom-bg-plan-btn">Buy Now</button>
    </div>
  );
};

export default PlanCard;
