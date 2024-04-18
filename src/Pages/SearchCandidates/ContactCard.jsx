import jobDetails from "../../assets/JobDetails.png"
import phone from "../../assets/phone.png"
import emailImg from "../../assets/email.png"

const ContactCard = ({phoneNumber, email}) => {
    return (
        <div className="w-full">
            <div className="bg-[#F3F3F3] my-5 p-9 rounded-lg">
            <div className="flex items-start gap-10">
                <img className="w-14 h-14" src={jobDetails} alt="" />
                <div>
                    <h5 className="text-lg font-semibold">Contact</h5>
                    <div className="flex items-center gap-16 mt-4">
                        <div>
                        <img src={phone} alt="" />
                        <p className="text-base font-medium mt-3">{phoneNumber}</p>
                        </div>
                        <div>
                        <img src={emailImg} alt="" />
                        <p className="text-base font-medium mt-3" >{email || 'demo@gmail.com'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactCard;