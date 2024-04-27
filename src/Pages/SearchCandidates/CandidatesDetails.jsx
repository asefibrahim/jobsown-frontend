import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import resume from "../../assets/resume.mp4";
import ContactCard from "./ContactCard";
import EducationCard from "./EducationCard";
import Overview from "./Overview";
import SkillsCard from "./SkillsCard";
import WorkExperiences from "./WorkExperiences";
const tabsItems = ["overview", "education", "skills", "experiences", "contact"];
const CandidatesDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [currentTab, setCurrentTab] = useState("overview");
  console.log("The params id is", id);
  useEffect(() => {
    axios
      .get(`https://jobsown-server.vercel.app/api/candidate-details/${id}`)
      .then((res) => {
        console.log("candidates details is", res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("Mr user data is", userDetails?.email);
  return (
    <div className="max-w-5xl mx-auto min-h-80">
      <div>
        <video src={resume} controls></video>
      </div>
      <div className="mt-5 mb-2 rounded-lg">
        <ul className="flex justify-between px-20 py-4 bg-[#F3F3F3] text-[#000099] font-semibold rounded-lg">
          {tabsItems?.map((item) => (
            <label htmlFor={item}>
              <li
                onClick={() => setCurrentTab(item)}
                className={`uppercase ${
                  currentTab === item && "border-b-2 border-[#000099]"
                }`}
              >
                {item}
              </li>
            </label>
          ))}
        </ul>
      </div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          id="overview"
          name="my_tabs_1"
          role="tab"
          className="tab hidden"
          aria-label="OVERVIEW"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <Overview
            candidate={userDetails}
            languages={userDetails?.languages}
            education={userDetails?.education}
            skills={userDetails?.skills}
            experiences={userDetails?.experience}
            phoneNumber={userDetails?.phone_number}
            email={userDetails?.email}
          />
        </div>

        <input
          type="radio"
          id="education"
          name="my_tabs_1"
          role="tab"
          className="tab hidden"
          aria-label="EDUCATION"
        />
        <div role="tabpanel" className="tab-content">
          <EducationCard education={userDetails?.education} />
        </div>

        <input
          type="radio"
          id="skills"
          name="my_tabs_1"
          role="tab"
          className="tab hidden"
          aria-label="SKILL"
        />
        <div role="tabpanel" className="tab-content">
          <SkillsCard skills={userDetails?.skills} />
        </div>
        <input
          type="radio"
          id="experiences"
          name="my_tabs_1"
          role="tab"
          className="tab hidden"
          aria-label="EXPERIENCE"
        />
        <div role="tabpanel" className="tab-content">
          <WorkExperiences experiences={userDetails?.experience} />
        </div>
        <input
          type="radio"
          id="contact"
          name="my_tabs_1"
          role="tab"
          className="tab hidden"
          aria-label="CONTACT"
        />
        <div role="tabpanel" className="tab-content">
          <ContactCard
            phoneNumber={userDetails?.phone_number}
            email={userDetails?.email}
          />
        </div>
      </div>
    </div>
  );
};

export default CandidatesDetails;
