import React, { useState } from "react";

const EditExperienceModal = ({
  experienceData,
  updateExperienceData,
  onClose,
}) => {
  const [formData, setFormData] = useState(experienceData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // If the field being updated is department or industry, convert the value to an array
    const newValue =
      name === "department" || name === "industry" ? [value] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExperienceData(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Experience</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-1"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter your title"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-medium mb-1"
              >
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="department"
                className="block text-gray-700 font-medium mb-1"
              >
                Department:
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter department(s)"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="industry"
                className="block text-gray-700 font-medium mb-1"
              >
                Industry:
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter industry"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-gray-700 font-medium mb-1"
              >
                Start Date:
              </label>
              <input
                type="text"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter start date"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-gray-700 font-medium mb-1"
              >
                End Date:
              </label>
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter end date"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="employmentType"
                className="block text-gray-700 font-medium mb-1"
              >
                Employment Type:
              </label>
              <input
                type="text"
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter employment type"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
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

export default EditExperienceModal;
