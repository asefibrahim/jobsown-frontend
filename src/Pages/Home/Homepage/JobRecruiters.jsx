import React from "react";
import "./JobRecruiters.css";
import OLA from "../Images/OlaLogo.png";
import star from "../Images/star.svg";
import LTLOGO from "../Images/LT-LOGO.png";
import Zomato from "../Images/ZomatoLogo.png";
// import LTLOGO from '../Images/LT-LOGO.png'

function JobRecruiters() {
  return (
    <div className="lg:px-0 px-6 pt-16 pb-10">
      <div class="flex w-full   justify-between">
        <div class="lg:text-[40px] text-xl lg:leading-[60px] custom-heading-plate">
          Verified International Job Recruiters
        </div>
        <div class="lg:text-[24px] flex items-center seeAllCustom p-2">
          View All &#8594;
        </div>
      </div>
      <div className="">
        <div className="grid lg:px-2 px-8 lg:pt-16 pt-8 lg:grid-cols-4 gap-8 grid-cols-1 ">
          {JobRecruitersdata.map((R) => (
            <div className="border-2 rounded-2xl">
              <div className="RecruitCompanyImg">
                <img src={R.RecruitCompanyLogo} className="h-16" />
              </div>
              <div className="RecruitCompanyName">{R.RecruitCompanyName}</div>
              <div className="RecruitCompanyDetail p-2">
                <div class="flex justify-center text-center p-1">
                  <div className="">
                    <img className="" src={star} />
                  </div>
                  <div class="flex items-center">{R.Rating}</div>
                </div>
                <div class="w-full text-center p-1">{R.Reviews} Reviews</div>
              </div>
              <div className="CompanyDiscription">{R.CompanyDiscription}</div>
              <div className="pt-1 lg:pb-0 pb-2 text-center">
                <button className="ViewjobsBtn">View jobs</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const JobRecruitersdata = [
  {
    id: "1",
    RecruitCompanyLogo: OLA,
    RecruitCompanyName: "Ola",
    Reviews: "250",
    Rating: "4.5",
    CompanyDiscription:
      "Transport platform of choice for immediate and spontaneous city travel needs",
  },
  {
    id: "2",
    RecruitCompanyLogo: LTLOGO,
    RecruitCompanyName: "Larsen & Turbo",
    Reviews: "250",
    Rating: "4.5",
    CompanyDiscription:
      "Transport platform of choice for immediate and spontaneous city travel needs",
  },
  {
    id: "3",
    RecruitCompanyLogo: Zomato,
    RecruitCompanyName: "Zomato",
    Reviews: "250",
    Rating: "4.5",
    CompanyDiscription:
      "Transport platform of choice for immediate and spontaneous city travel needs",
  },
  {
    id: "4",
    RecruitCompanyLogo: OLA,
    RecruitCompanyName: "Ola",
    Reviews: "250",
    Rating: "4.5",
    CompanyDiscription:
      "Transport platform of choice for immediate and spontaneous city travel needs",
  },
];

export default JobRecruiters;
