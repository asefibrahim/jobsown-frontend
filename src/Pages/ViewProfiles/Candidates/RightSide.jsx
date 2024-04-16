import React, { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExperienceCard from "../../../Components/ViewProfile/CandidateProfile/ExperienceCard";
import Skills from "../../../Components/ViewProfile/CandidateProfile/Skills";
import Languages from "../../../Components/ViewProfile/CandidateProfile/Languages";
import Resume from "../../../Components/ViewProfile/CandidateProfile/Resume";
import OtherDetails from "../../../Components/ViewProfile/CandidateProfile/OtherDetails";
import Documents from "../../../Components/ViewProfile/CandidateProfile/Documents";
import AddExperienceModal from "../../../Components/ViewProfile/CandidateProfile/AddExperienceModal";
import { AuthContext } from "../../../Provider/AuthProvider";
import JobPreference from "../../../Components/ViewProfile/CandidateProfile/JobPreference";
const eduationArry = ["10th Pass", "12th Pass", "Diploma", "ITI", "Graduate", "Post Graduate"];
const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [hasCv, setHasCv] = useState(null);
  const [experienceYear, setExperienceYear] = useState(0);
  const [location, setLocation] = useState("");
  const [currentSalary, setCurrentSalary] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [highestEducation, setHightestEducation] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [preferredJobTitle, setPreferredJobTitle] = useState("");
  const [jobPreferences, setJobPerferences] = useState({});
  const [experiences, setExperiences] = useState([]); 

  const initialFormData = {
    title: "",
    company: "",
    department: "", 
    industry: "",
    job_role: "",
    job_city: "",
    start_date: "",
    end_date: "",
    job_type: "",
    pay_type: "",
  };

  const deleteExperience = (indexToDelete) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]); // Add the new experience to the experiences array
    handleCloseModal();
  };


// handle submit info button
const handleSubmitInformation = () => {
  const newCandidate = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    experience_years: parseInt(experienceYear),
    location: location,
    current_salary: parseInt(currentSalary),
    experience: experiences,
    skills: skills,
    languages: languages,
    cv_link: hasCv,
    job_preferences: jobPreferences,
    preferred_job_title: [preferredJobTitle],
    phone_number: phoneNum,
    education: highestEducation,
    gender: gender,
    age: parseInt(age),
  }
  console.log("New Candidates is", newCandidate);
}


  return (
    <div className="lg:px-0 px-6">
      <div>
        {/* work experience */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-wide text-gray-600">
            Work Experience
          </h1>
          <div
            className="flex items-center  text-blue-700 gap-3"
            onClick={handleOpenModal}
            style={{ cursor: "pointer" }}
          >
            <IoMdAdd className="text-xl font-medium" />{" "}
            <span className="font-medium">Add</span>
          </div>
        </div>

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            totalCards={experiences.length}
            onDelete={deleteExperience}
            initialData={experience}
          />
        ))}

        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Experience Years</h5>
          <input onChange={(e) => setExperienceYear(e.target.value)} className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm" type="number" placeholder="Enter your experience years" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Current Salary <span className="text-base">(Yearly Lakh)</span></h5>
          <input onChange={(e) => setCurrentSalary(e.target.value)} className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm" type="number" placeholder="Enter Current Salary" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Preferred Job Title</h5>
          <input onChange={(e) => setPreferredJobTitle(e.target.value)} className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm" type="text" placeholder="Enter preferred job title" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Location</h5>
          <input onChange={(e) => setLocation(e.target.value)} className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm" type="text" placeholder="Enter your location" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Phone</h5>
          <input onChange={(e) => setPhoneNum(e.target.value)} className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm" type="number" placeholder="Enter your phone" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Age</h5>
          <input onChange={(e) => setAge(e.target.value)} className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm" type="number" placeholder="Enter your age" />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Gender</h5>
          <select onChange={(e) => setGender(e.target.value)} className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm" name="" id="">
            <option value="">Set Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
          <h5 className="text-lg font-medium text-gray-800">Highest Education</h5>
          <select onChange={(e) => setHightestEducation(e.target.value)} className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm" name="" id="">
            <option value="">Hightest Education</option>
            {
              eduationArry?.map(edu => (
                <option value={edu}>{edu}</option>
              ))
            }
          </select>
          </div>
        </div>

        <div className="pt-6">
          {/* Other content */}
          <Skills 
            setSkills={setSkills}
          />
          <Languages 
            setLanguages={setLanguages}
          />
          <Resume setHasCv={setHasCv} />
          <OtherDetails />
          <JobPreference
            setJobPerferences={setJobPerferences}
          />
          <Documents />
        </div>
        {isModalOpen && (
          <AddExperienceModal
            initialFormData={initialFormData}
            addExperience={handleAddExperience}
            onClose={handleCloseModal}
          />
        )}
      </div>
      <button onClick={handleSubmitInformation} className="btn mb-8 bg-[#004EA8] text-white">Submit Information</button>
    </div>
  );
};

export default RightSide;
