import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import EditSkillsModal from "./EditSkillsModal";

const Skills = ({setSkills, skills}) => {
  const initialSkillsData = [];

  const [skillsData, setSkillsData] = useState(initialSkillsData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateSkillsData = (newData) => {
    setSkillsData(newData);
    setSkills(newData);
    closeEditModal();
  };

  return (
    <div className="mb-12">
      <div className="bg-gray-100 rounded-lg py-6 px-8">
        <div>
          <div className="flex items-center justify-between gap-8">
            <div>
              <h1 className="text-lg font-medium tracking-wide text-gray-800">
                Skills
              </h1>
              <p className="text-gray-400 text-sm font-medium pt-2">
                {`${skills?.length} skills medals earned`}
              </p>
            </div>

            <button
              className="flex items-center  text-blue-700 gap-3"
              onClick={openEditModal}
            >
              <FaRegEdit className="text-xl font-medium" />{" "}
              <span className="font-medium">Edit</span>
            </button>
          </div>

          <div className="pt-6 lg:w-[55%] grid-cols-2  grid lg:grid-cols-4 gap-4">
            {skills?.map((skill, index) => (
              <div
                key={index}
                className="px-3 flex items-center justify-center py-2 text-sm bg-white text-blue-500 border border-blue-500 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="flex items-center text-gray-400 font-medium gap-3 text-sm pt-8">
            <RiErrorWarningLine className="text-lg" />
            <span>
              Skills with the check mark have been verified by JobsOwn
            </span>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditSkillsModal
          skillsData={skills}
          updateSkillsData={updateSkillsData}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default Skills;
