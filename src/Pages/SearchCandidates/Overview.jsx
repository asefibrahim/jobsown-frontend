import CandidateCard from "./CandidateCard";
import ContactCard from "./ContactCard";
import EducationCard from "./EducationCard";
import LanguageCard from "./LanguageCard";
import SkillsCard from "./SkillsCard";
import WorkExperiences from "./WorkExperiences";

const Overview = ({candidate, languages, education, skills, experiences, phoneNumber, email}) => {
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
            <WorkExperiences experiences={experiences} />
            <ContactCard phoneNumber={phoneNumber} email={email} />
        </div>
    );
};

export default Overview;