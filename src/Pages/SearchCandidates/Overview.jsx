import CandidateCard from "./CandidateCard";
import EducationCard from "./EducationCard";
import LanguageCard from "./LanguageCard";
import SkillsCard from "./SkillsCard";
import WorkExperiences from "./WorkExperiences";

const Overview = ({candidate, languages, education, skills}) => {
    return (
        <div>
            <CandidateCard 
                candidate={candidate}
                background={"#F3F3F3"}
                width={"100%"}
                viewNum={"none"}
            />
            <LanguageCard
              languages={languages}
            />
            <EducationCard education={education} />
            <SkillsCard skills={skills} />
            <WorkExperiences />
        </div>
    );
};

export default Overview;