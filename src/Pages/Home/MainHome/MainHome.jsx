import React from "react";
import FirstPage from "../Homepage/FirstPage";
import JobsbyLocation from "../Homepage/JobsbyLocation";
import TrendingJobs from "../Homepage/TrendingJobs";
import LatestJob from "../Homepage/LatestJob";
import JobRecruiters from "../Homepage/JobRecruiters";
import Jobspecialty from "../Homepage/Jobspecialty";
import TopCompany from "../Homepage/TopCompany";
import TestimonialsHome from "../Homepage/TestimonialsHome";
import HomeContactUs from "../Homepage/HomeContactUs";


const MainHome = () => {
  return (
    <div>
      <div>

        <FirstPage />
        <div className="max-w-7xl mx-auto">
          <JobsbyLocation />

          <TrendingJobs />
          <LatestJob />

          <JobRecruiters />
          <Jobspecialty />

          <TestimonialsHome />
          <HomeContactUs />
        </div>
      </div>
    </div>
  );
};

export default MainHome;
