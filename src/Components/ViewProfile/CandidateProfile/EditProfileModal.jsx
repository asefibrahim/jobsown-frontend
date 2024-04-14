import React, { useState } from "react";

const EditProfileModal = ({ userData, onUpdateProfile, onClose }) => {
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-1">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-700 font-medium mb-1">Profile Image:</label>
            <input type="file" id="profileImage" name="profileImage" onChange={handleImageChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Save Changes</button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ml-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
