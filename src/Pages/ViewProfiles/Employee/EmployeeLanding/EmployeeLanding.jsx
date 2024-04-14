import React from "react";
import FirstPage from "../../../Home/Homepage/FirstPage";
import StepCards from "../../../../Components/ViewProfile/EmployeeLanding/StepCards";
import PricingCards from "../../../../Components/ViewProfile/EmployeeLanding/PricingCards";
import HomeContactUs from "../../../Home/Homepage/HomeContactUs";
import TopCompany from "../../../Home/Homepage/TopCompany";
import JobsOwnCard from "../../../../Components/ViewProfile/EmployeeLanding/JobsOwnCard";

const EmployeeLanding = () => {
  return (
    <div>
      <div>
        <FirstPage />
      </div>
      <div className="max-w-7xl mx-auto">
        <StepCards />
      </div>
      <PricingCards />
      <div className="max-w-7xl mx-auto">
        <JobsOwnCard />
        <TopCompany />
        <HomeContactUs />
      </div>
    </div>
  );
};

export default EmployeeLanding;
