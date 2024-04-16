import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import JobPreferenceModal from "./PreferenceModal";

const JobPreference = ({setJobPerferences}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    employment_type: [], //for default you can use value like ["Full time", "Part Time"];
    preferred_workplace: [],
    preferred_shift: []
  },);


  const predefinedPreferences = [
    { category: "employment_type", name: "Full Time", value: "Full Time" },
    { category: "employment_type", name: "Part Time", value: "Part Time" },
    { category: "workplace", name: "Work from Office", value: "Work from Office" },
    { category: "workplace", name: "Work from Home", value: "Work from Home" },
    { category: "shift", name: "Day Shift", value: "Day Shift" },
    { category: "shift", name: "Night Shift", value: "Night Shift" },
  ];


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = (updatedPreferences) => {
    setPreferences(updatedPreferences);
    setJobPerferences(updatedPreferences)
    handleCloseModal();
  };

  return (
    <>
      <div className="bg-gray-100 mt-12 mb-12 rounded-lg py-6 px-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <h1 className="text-lg font-medium tracking-wide text-gray-800">
              Job preferences
            </h1>
          </div>
          <div
            className="flex items-center text-blue-700 gap-3 cursor-pointer"
            onClick={handleOpenModal}
          >
            <FaArrowRight className="text-xl font-medium" />
          </div>
        </div>
        <ul className="lg:flex pt-5 gap-3 list-inside list-none">
          {preferences?.employment_type.map((preference, index) => (
            <li
              key={index}
              className="text-sm font-medium text-blue-500 border border-blue-500 rounded-lg px-3 py-2"
            >
              {preference}
            </li>
          ))}
          {preferences?.preferred_workplace.map((preference, index) => (
            <li
              key={index}
              className="text-sm font-medium text-blue-500 border border-blue-500 rounded-lg px-3 py-2"
            >
              {preference}
            </li>
          ))}
          {preferences?.preferred_shift.map((preference, index) => (
            <li
              key={index}
              className="text-sm font-medium text-blue-500 border border-blue-500 rounded-lg px-3 py-2"
            >
              {preference}
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <JobPreferenceModal
          preferences={preferences}
          predefinedPreferences={predefinedPreferences}
          onSaveChanges={handleSaveChanges}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default JobPreference;
