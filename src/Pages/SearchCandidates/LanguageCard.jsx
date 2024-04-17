import jobDetails from "../../assets/JobDetails.png"
import star from "../../assets/star.png"
const LanguageCard = ({languages}) => {
    return (
        <div className="bg-[#F3F3F3] my-5 p-9 rounded-lg w-full">
            <div className="flex items-start gap-10">
                <img className="w-14 h-14" src={jobDetails} alt="" />
                <div>
                    <h5 className="text-lg font-semibold">Language</h5>
                    <div className="flex items-center gap-10 mt-4">
                        {
                            languages?.map(lan => (
                                <div className="flex items-center gap-3">
                                    <p>{lan}:</p>
                                    <div className="flex items-center gap-0.5">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageCard;