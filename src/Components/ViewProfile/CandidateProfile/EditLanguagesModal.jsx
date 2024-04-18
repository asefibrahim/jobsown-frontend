import React, { useState } from "react";

const EditLanguagesModal = ({
  languagesData,
  updateLanguagesData,
  onClose,
}) => {
  const predefinedLanguages = [
    "Hindi",
    "English",
    "Tamil",
    "Urdu",
    "Arabic",
    "Bengali",
    "Gujarati",
    "Telugu",
    "Marathi",
    "Kannada",
    "Punjabi",
  ];

  const [selectedLanguages, setSelectedLanguages] = useState(() => {
    const initialSelection = {};
    languagesData?.forEach((language) => {
      initialSelection[language.language] = true;
    });
    return initialSelection;
  });

  const handleCheckboxChange = (language) => {
    setSelectedLanguages((prevSelection) => ({
      ...prevSelection,
      [language]: !prevSelection[language],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLanguages = Object.keys(selectedLanguages).filter(
      (language) => selectedLanguages[language]
    );
    const newData = updatedLanguages.map((language) => ({ language }));
    updateLanguagesData(newData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Languages</h2>
          <form onSubmit={handleSubmit}>
            {predefinedLanguages.map((language, index) => (
              <div key={index} className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLanguages[language]}
                    onChange={() => handleCheckboxChange(language)}
                    className="form-checkbox text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{language}</span>
                </label>
              </div>
            ))}
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

export default EditLanguagesModal;
