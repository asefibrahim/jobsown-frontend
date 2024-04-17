import React, { useState } from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import EditExperienceModal from "./EditExperienceModal";

const ExperienceCard = ({ index, totalCards, onDelete, initialData }) => {
  const [experienceData, setExperienceData] = useState(initialData);
  console.log("does experience card found", initialData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateExperienceData = (newData) => {
    setExperienceData(newData);
    closeEditModal();
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <section className="mt-8 mb-8">
      <div className="bg-gray-100 px-4 rounded-lg py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 lg:gap-8">
            <MdOutlineMapsHomeWork className="text-4xl mt-2" />
            <div>
              <h1 className="text-lg font-medium tracking-wide text-gray-800">
                {experienceData?.title}
              </h1>
              <p className="text-sm font-medium text-gray-800">
                {experienceData?.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button
              className="flex items-center  text-blue-700 gap-3"
              onClick={openEditModal}
            >
              <FaRegEdit className="text-xl font-medium" />
              <span className="font-medium">Edit</span>
            </button>
            {totalCards > 1 &&
              index === totalCards - 1 && ( // Render delete button for the last card if there are multiple cards
                <button
                  className="flex items-center  text-blue-700 gap-3"
                  onClick={handleDelete}
                >
                  <FaRegTrashAlt className="text-xl font-medium" />
                  <span className="font-medium">Delete</span>
                </button>
              )}
          </div>
        </div>
        <div className="lg:ps-[68px]">
          <div className="pt-6">
            <h3 className="text-sm text-gray-400 font-medium">Department</h3>
            <p className="text-sm font-medium text-gray-800">{experienceData?.department}</p>
          </div>
          <div className="pt-6">
            <h3 className="text-sm text-gray-400 font-medium">Industry</h3>
            <p className="text-sm font-medium text-gray-800">{experienceData?.industry}</p>
          </div>
          <div className="pt-6 flex items-center gap-4">
            <div className="px-3 py-2 text-sm bg-white border border-blue-500 text-blue-700 rounded-lg">
              {experienceData?.start_date} - {experienceData?.end_date}
            </div>

            <div className="px-3 py-2 text-sm bg-white border border-blue-500 text-blue-700 rounded-lg">
              {experienceData?.job_type}
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditExperienceModal
          experienceData={experienceData}
          updateExperienceData={updateExperienceData}
          onClose={closeEditModal}
        />
      )}
    </section>
  );
};

export default ExperienceCard;
