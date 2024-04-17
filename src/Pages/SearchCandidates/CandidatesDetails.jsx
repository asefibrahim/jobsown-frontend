import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import resume from "../../assets/resume.mp4";
import CandidateCard from "./CandidateCard";
import Overview from "./Overview";
import LanguageCard from "./LanguageCard";
import EducationCard from "./EducationCard";
import SkillsCard from "./SkillsCard";
const CandidatesDetails = () => {
    const {id} = useParams();
    const [userDetails, setUserDetails] = useState({})
    console.log("The params id is", id);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/candidate-details/${id}`)
        .then(res => {
            console.log("candidates details is", res.data);
            setUserDetails(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="max-w-5xl mx-auto min-h-80">
            <div>
               <video src={resume} controls></video>
            </div>

            <div role="tablist" className="tabs tabs-bordered">
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="OVERVIEW" defaultChecked />
              <div role="tabpanel" className="tab-content">
              <Overview 
              candidate={userDetails} 
              languages={userDetails?.languages} 
              education={userDetails?.education}
              skills={userDetails?.skills}
              experiences={userDetails?.experience}
              />
              </div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="EDUCATION" />
              <div role="tabpanel" className="tab-content">
                <EducationCard education={userDetails?.education} />
              </div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="SKILL" />
              <div role="tabpanel" className="tab-content">
                <SkillsCard skills={userDetails?.skills} />
              </div>
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="EXPERIENCE" />
              <div role="tabpanel" className="tab-content">Tab content 3</div>
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="CONTACT" />
              <div role="tabpanel" className="tab-content">Tab content 3</div>
            </div>
            
        </div>
    );
};

export default CandidatesDetails;