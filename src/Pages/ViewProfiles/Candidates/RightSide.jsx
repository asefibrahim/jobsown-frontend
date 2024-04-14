import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExperienceCard from "../../../Components/ViewProfile/CandidateProfile/ExperienceCard";
import Skills from "../../../Components/ViewProfile/CandidateProfile/Skills";
import Languages from "../../../Components/ViewProfile/CandidateProfile/Languages";
import Resume from "../../../Components/ViewProfile/CandidateProfile/Resume";
import OtherDetails from "../../../Components/ViewProfile/CandidateProfile/OtherDetails";
import Location from "../../../Components/ViewProfile/CandidateProfile/Location";
import Documents from "../../../Components/ViewProfile/CandidateProfile/Documents";
import AddExperienceModal from "../../../Components/ViewProfile/CandidateProfile/AddExperienceModal";

const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      title: "Product design intern",
      company: "Nexicorn",
      department: ["UI / UX Design", "Mobile UI design"],
      industry: ["AI tool / Development"],
      startDate: "Dec 2022",
      endDate: "Present",
      employmentType: "Full-time",
    },
  ]);

  const initialFormData = {
    title: "",
    company: "",
    department: "",
    industry: "",
    startDate: "",
    endDate: "",
    employmentType: "",
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
  console.log(experiences);
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

        <div className="pt-6">
          {/* Other content */}
          <Skills />
          <Languages />
          <Resume />
          <OtherDetails />
          <Location />
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
    </div>
  );
};

export default RightSide;
