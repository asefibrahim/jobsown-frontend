import jobDetails from "../../assets/JobDetails.png"
const SkillsCard = ({education, skills}) => {
    return (
        <div>
            <div className="bg-[#F3F3F3] my-5 p-9 rounded-lg w-full">
            <div className="flex items-start gap-10">
                <img className="w-14 h-14" src={jobDetails} alt="" />
                <div>
                    <h5 className="text-lg font-semibold">Skills</h5>
                    <div className="flex items-center gap-8 mt-4">
                        {
                            skills?.map(skill => (
                              <p className="text-base font-medium bg-[#6750A414] text-[#000099] px-3 py-1 rounded-lg">{skill}</p>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SkillsCard;