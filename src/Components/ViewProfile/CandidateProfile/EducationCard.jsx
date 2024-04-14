import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditEducationModal from "./EditEducationModal";

const EducationCard = () => {
  const initialEducationData = {
    degree: "B.Tech in Civil Technology",
    institute: "Indian Insitute of Technology, Roorkee",
    startDate: "Dec 2022",
    endDate: "Present",
    duration: "Full-time",
    highestEducation: "Graduate",
  };

  const [educationData, setEducationData] = useState(initialEducationData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateEducationData = (newData) => {
    setEducationData(newData);
    closeEditModal();
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-wide text-gray-600">
          Education
        </h1>
        <div className="flex items-center  text-blue-700 gap-3">
          <IoMdAdd className="text-xl font-medium" />{" "}
          <span className="font-medium">Add</span>
        </div>
      </div>
      <div className="flex mt-8 mb-4 items-center justify-between px-6 py-3 rounded-lg bg-gray-100">
        <p className="text-sm font-medium text-gray-400">Highest Education</p>
        <div className="flex items-center  text-blue-700 gap-3">
          <span className="font-medium text-sm">{educationData.highestEducation}</span>
          <MdKeyboardArrowRight className=" font-medium" />{" "}
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg py-6 px-4 lg:px-8">
        <div className="flex items-center  justify-between">
          <div className="flex gap-4 items-center lg:gap-8">
            <RiGraduationCapLine className="text-4xl mt-2" />
            <div>
              <h1 className="text-lg font-medium tracking-wide text-gray-800">
                {educationData.degree}
              </h1>
            </div>
          </div>
          <div className="flex items-center  text-blue-700 gap-3" onClick={openEditModal}>
            <FaRegEdit className="text-xl font-medium" />{" "}
            <span className="font-medium">Edit</span>
          </div>
        </div>
        <p className="text-sm lg:pt-0 pt-6 lg:ps-[68px] font-medium text-gray-800">
          {educationData.institute}
        </p>
        <div className="pt-6 lg:ps-[68px] flex items-center gap-4">
          <div className="px-3 py-2 text-sm bg-white text-gray-300 border rounded-lg">
            {educationData.startDate} - {educationData.endDate}
          </div>
          <div className="px-3 py-2 text-sm bg-white text-gray-300 border rounded-lg">
            {educationData.duration}
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditEducationModal
          educationData={educationData}
          updateEducationData={updateEducationData}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default EducationCard;
