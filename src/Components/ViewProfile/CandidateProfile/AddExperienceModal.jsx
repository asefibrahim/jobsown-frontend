import React, { useState } from "react";

const AddExperienceModal = ({ addExperience, onClose }) => {
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

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add Experience</h2>
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
                placeholder="Example: UX/UI design"
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
                placeholder="Example: Development"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="industry"
                className="block text-gray-700 font-medium mb-1"
              >
                Job Role:
              </label>
              <input
                type="text"
                id="job_role"
                name="job_role"
                value={formData.job_role}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Example: Junior Developer"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="industry"
                className="block text-gray-700 font-medium mb-1"
              >
                Job City:
              </label>
              <input
                type="text"
                id="job_city"
                name="job_city"
                value={formData.job_city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter city"
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
                name="start_date"
                value={formData.start_date}
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
                name="end_date"
                value={formData.end_date}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter end date or present"
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
                name="job_type"
                value={formData.job_type}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter employment type"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="payType"
                className="block text-gray-700 font-medium mb-1"
              >
                Pay Type: per year (Fixed only)
              </label>
              <input
                type="text"
                id="payType"
                name="pay_type"
                value={formData.pay_type}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter pay type"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Add Experience
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

export default AddExperienceModal;
