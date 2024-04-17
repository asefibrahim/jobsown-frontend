import jobDetails from "../../assets/JobDetails.png"
const EducationCard = ({education}) => {
    return (
        <div className="w-full">
            <div className="bg-[#F3F3F3] my-5 p-9 rounded-lg">
            <div className="flex items-start gap-10">
                <img className="w-14 h-14" src={jobDetails} alt="" />
                <div>
                    <h5 className="text-lg font-semibold">Education</h5>
                    <div className="flex items-center gap-10 mt-4">
                        <p className="text-base font-medium">{education}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default EducationCard;