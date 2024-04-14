import React, { useState } from "react";

const EditSkillsModal = ({ skillsData, updateSkillsData, onClose }) => {
  const [formData, setFormData] = useState(skillsData);

  const handleInputChange = (index, e) => {
    const updatedData = [...formData];
    updatedData[index] = e.target.value;
    setFormData(updatedData);
  };

  const handleAddSkill = () => {
    setFormData([...formData, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSkillsData(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Skills</h2>
          <form onSubmit={handleSubmit}>
            {formData.map((skill, index) => (
              <div key={index} className="mb-4 items-center">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full mr-2"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Add Skill
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-2"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ml-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSkillsModal;
