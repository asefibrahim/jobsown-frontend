import React, { useState } from "react";

const EditEducationModal = ({ educationData, updateEducationData, onClose }) => {
  const [formData, setFormData] = useState(educationData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducationData(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Education</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="degree" className="block text-gray-700 font-medium mb-1">Degree:</label>
              <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="institute" className="block text-gray-700 font-medium mb-1">Institute:</label>
              <input type="text" id="institute" name="institute" value={formData.institute} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-gray-700 font-medium mb-1">Start Date:</label>
              <input type="text" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="endDate" className="block text-gray-700 font-medium mb-1">End Date:</label>
              <input type="text" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="duration" className="block text-gray-700 font-medium mb-1">Duration:</label>
              <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="highestEducation" className="block text-gray-700 font-medium mb-1">Highest Education:</label>
              <input type="text" id="highestEducation" name="highestEducation" value={formData.highestEducation} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Save Changes</button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ml-2">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEducationModal;
