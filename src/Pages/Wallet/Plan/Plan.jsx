import React from "react";
import "./Plan.css";
import PlanIcon from "../../../assets/PlanIcon.png";
import PlanCard from "./PlanCard/PlanCard.jsx";

const Plan = () => {
  return (
    <div className="my-4 p-2">
      <div className="flex my-2 items-center gap-1 mb-6">
        <div className="py-2">
          <img src={PlanIcon} alt="/" />
        </div>
        <div className=" p-2 text-2xl">Choose your plan</div>
      </div>

      <div className="flex gap-8">
        <PlanCard
          packageName="Gold Package"
          cost1="20000"
          cost2="Rs.17600"
        ></PlanCard>
        <PlanCard
          packageName="Silver Package"
          cost1="10000"
          cost2="Rs.17600"
        ></PlanCard>
        <PlanCard
          packageName="Gold Package"
          cost1="20000"
          cost2="Rs.17600"
        ></PlanCard>
      </div>
    </div>
  );
};

export default Plan;
