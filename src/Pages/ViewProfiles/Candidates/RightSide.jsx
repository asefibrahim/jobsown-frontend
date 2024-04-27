import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";
import AddExperienceModal from "../../../Components/ViewProfile/CandidateProfile/AddExperienceModal";
import Documents from "../../../Components/ViewProfile/CandidateProfile/Documents";
import ExperienceCard from "../../../Components/ViewProfile/CandidateProfile/ExperienceCard";
import JobPreference from "../../../Components/ViewProfile/CandidateProfile/JobPreference";
import Languages from "../../../Components/ViewProfile/CandidateProfile/Languages";
import OtherDetails from "../../../Components/ViewProfile/CandidateProfile/OtherDetails";
import Resume from "../../../Components/ViewProfile/CandidateProfile/Resume";
import Skills from "../../../Components/ViewProfile/CandidateProfile/Skills";
import { AuthContext } from "../../../Provider/AuthProvider";
const eduationArry = [
  "10th Pass",
  "12th Pass",
  "Diploma",
  "ITI",
  "Graduate",
  "Post Graduate",
];
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
  const [userInfo, setUserInfo] = useState({});
  const [storeLanguages, setStoreLanguages] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/candidate-info/${user?.email}`)
      .then((res) => {
        setExperiences(res.data?.experience || []);
        setSkills(res.data?.skills || []);
        setUserInfo(res.data);
        const getLanguages = res.data?.languages?.map((langu) => ({
          language: langu,
        }));
        setLanguages(getLanguages);
        setJobPerferences(res.data?.job_preferences);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  console.log("new skills data", skills);

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
    console.log(experiences);
    setExperiences([...experiences, newExperience]); // Add the new experience to the experiences array
    handleCloseModal();
  };
  const defaultAvater = "https://i.ibb.co/Rb6NvrY/avater.png";
  // handle submit info button
  const handleSubmitInformation = () => {
    const newCandidate = {
      name: user?.displayName || userInfo?.name,
      email: user?.email || userInfo?.email,
      image: defaultAvater,
      experience_years: parseInt(experienceYear) || userInfo?.experience_years,
      location: location || userInfo?.location,
      current_salary: parseInt(currentSalary) || userInfo?.current_salary,
      experience: experiences || userInfo?.experience,
      skills: skills,
      languages: storeLanguages || userInfo?.languages,
      cv_link: hasCv || userInfo?.cv_link,
      job_preferences: jobPreferences || userInfo?.job_preferences,
      preferred_job_title: preferredJobTitle || userInfo?.preferred_job_title,
      phone_number: phoneNum || userInfo?.phone_number,
      education: highestEducation || userInfo?.education,
      gender: gender || userInfo?.gender,
      age: parseInt(age) || userInfo?.age,
    };
    console.log("New Candidates is", newCandidate);
    axios
      .post("http://localhost:5000/api/addcandidate", newCandidate)
      .then((res) => {
        console.log("Save candidates info result is", res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your information saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

        {experiences?.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            totalCards={experiences?.length}
            onDelete={deleteExperience}
            initialData={experience}
          />
        ))}

        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
            <h5 className="text-lg font-medium text-gray-800">
              Experience Years
            </h5>
            <input
              onChange={(e) => setExperienceYear(e.target.value)}
              className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm"
              defaultValue={userInfo?.experience_years || null}
              type="number"
              placeholder="Enter your experience years"
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
            <h5 className="text-lg font-medium text-gray-800">
              Current Salary <span className="text-base">(Yearly Lakh)</span>
            </h5>
            <input
              onChange={(e) => setCurrentSalary(e.target.value)}
              className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm"
              type="number"
              defaultValue={userInfo?.current_salary || null}
              placeholder="Enter Current Salary"
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
            <h5 className="text-lg font-medium text-gray-800">
              Preferred Job Title
            </h5>
            <input
              onChange={(e) => setPreferredJobTitle(e.target.value)}
              className="w-60 p-2 text-lg font-semibold outline-none placeholder:text-sm"
              type="text"
              defaultValue={userInfo?.preferred_job_title || ""}
              placeholder="Enter preferred job title"
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
            <h5 className="text-lg font-medium text-gray-800">Location</h5>
            <input
              onChange={(e) => setLocation(e.target.value)}
              className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm"
              type="text"
              defaultValue={userInfo?.location || ""}
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div className="pt-6">
          {/* Other content */}
          <Skills skills={skills} setSkills={setSkills} />
          <div className="pt-8">
            <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
              <h5 className="text-lg font-medium text-gray-800">Phone</h5>
              <input
                onChange={(e) => setPhoneNum(e.target.value)}
                className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm"
                type="number"
                defaultValue={userInfo?.phone_number || null}
                placeholder="Enter your phone"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
              <h5 className="text-lg font-medium text-gray-800">Age</h5>
              <input
                onChange={(e) => setAge(e.target.value)}
                className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm"
                type="number"
                defaultValue={userInfo?.age || null}
                placeholder="Enter your age"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
              <h5 className="text-lg font-medium text-gray-800">Gender</h5>
              <select
                onChange={(e) => setGender(e.target.value)}
                defaultValue={userInfo?.gender || ""}
                className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm"
                name=""
                id=""
              >
                <option value="">Set Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <div className="bg-gray-100 px-8 py-8 flex justify-between items-center rounded-md">
              <h5 className="text-lg font-medium text-gray-800">
                Highest Education
              </h5>
              <select
                onChange={(e) => setHightestEducation(e.target.value)}
                defaultValue={userInfo?.education || ""}
                className="w-60 p-2 text-base font-semibold outline-none placeholder:text-sm"
                name=""
                id=""
              >
                <option value="">Hightest Education</option>
                {eduationArry?.map((edu) => (
                  <option value={edu}>{edu}</option>
                ))}
              </select>
            </div>
          </div>
          <Languages
            languages={languages}
            setStoreLanguages={setStoreLanguages}
            setLanguages={setLanguages}
          />
          <Resume setHasCv={setHasCv} />
          <OtherDetails />
          <JobPreference
            setJobPerferences={setJobPerferences}
            jobPreferences={jobPreferences}
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
      <button
        onClick={handleSubmitInformation}
        className="btn mb-8 bg-[#004EA8] text-white"
      >
        Submit Information
      </button>
    </div>
  );
};

export default RightSide;
