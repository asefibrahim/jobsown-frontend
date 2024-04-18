import jobDetails from "../../assets/JobDetails.png"

const WorkExperiences = ({experiences}) => {
    console.log("Data get from experiences",experiences);
    return (
        <div className="w-full">
            <div className="bg-[#F3F3F3] my-5 p-9 rounded-lg">
            <div className="flex items-start gap-10">
                <img className="w-14 h-14" src={jobDetails} alt="" />
                <div>
                    <h5 className="text-lg font-semibold">Experience</h5>
                    <div className="flex items-center gap-10 mt-4">
                        <p className="text-base font-medium">{experiences?.job_title}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WorkExperiences;