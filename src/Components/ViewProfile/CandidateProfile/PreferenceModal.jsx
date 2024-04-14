import React, { useState } from "react";

const JobPreferenceModal = ({
  preferences,
  predefinedPreferences,
  onSaveChanges,
  onClose,
}) => {
  const [selectedPreferences, setSelectedPreferences] = useState(preferences);

  const handleCheckboxChange = (preference) => {
    const updatedPreferences = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((p) => p !== preference)
      : [...selectedPreferences, preference];
    setSelectedPreferences(updatedPreferences);
  };

  const handleSaveChanges = () => {
    onSaveChanges(selectedPreferences);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Job Preferences</h2>
        <div className="mb-4">
          <h3 className="text-base text-blue-700 font-semibold mb-2">
            Preferred employment type
          </h3>
          <ul className="list-inside list-none">
            {predefinedPreferences
              .filter((p) => p.category === "employment_type")
              .map((preference, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between text-sm font-medium cursor-pointer m-2 rounded-lg py-2 px-4 border ${
                    selectedPreferences.includes(preference.value)
                      ? "border-blue-500" // Apply blue border if checked
                      : "border-gray-300" // Apply gray border if not checked
                  }`}
                >
                  <span>{preference.name}</span>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={preference.value}
                      checked={selectedPreferences.includes(preference.value)}
                      onChange={() => handleCheckboxChange(preference.value)}
                      className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-base text-blue-700 font-semibold mb-2">
            Preferred workplace
          </h3>
          <ul className="list-inside list-none">
            {predefinedPreferences
              .filter((p) => p.category === "workplace")
              .map((preference, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between text-sm font-medium cursor-pointer m-2 rounded-lg py-2 px-4 border ${
                    selectedPreferences.includes(preference.value)
                      ? "border-blue-500" // Apply blue border if checked
                      : "border-gray-300" // Apply gray border if not checked
                  }`}
                >
                  <span>{preference.name}</span>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={preference.value}
                      checked={selectedPreferences.includes(preference.value)}
                      onChange={() => handleCheckboxChange(preference.value)}
                      className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base text-blue-700 font-semibold mb-2">
            Preferred shift
          </h3>
          <ul className="list-inside list-none">
            {predefinedPreferences
              .filter((p) => p.category === "shift")
              .map((preference, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between text-sm font-medium cursor-pointer m-2 rounded-lg py-2 px-4 border ${
                    selectedPreferences.includes(preference.value)
                      ? "border-blue-500" // Apply blue border if checked
                      : "border-gray-300" // Apply gray border if not checked
                  }`}
                >
                  <span>{preference.name}</span>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={preference.value}
                      checked={selectedPreferences.includes(preference.value)}
                      onChange={() => handleCheckboxChange(preference.value)}
                      className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPreferenceModal;
