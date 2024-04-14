import React, { useState } from "react";

const LanguageModal = ({ languages, onSaveChanges, onClose }) => {
  const [newLanguage, setNewLanguage] = useState("");

  const handleInputChange = (e) => {
    setNewLanguage(e.target.value);
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim() !== "") {
      onSaveChanges([...languages, newLanguage]);
      setNewLanguage("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    onSaveChanges(updatedLanguages);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Languages</h2>
        <div className="mb-4">
          <input type="text" value={newLanguage} onChange={handleInputChange} placeholder="Enter a new language" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <button onClick={handleAddLanguage} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-2">Add Language</button>
        <ul className="list-inside list-none">
          {languages.map((language, index) => (
            <li key={index} className="text-base text-gray-800 flex items-center justify-between py-2 border-b border-gray-200">
              <span>{language}</span>
              <button onClick={() => handleRemoveLanguage(index)} className="text-red-500 font-medium focus:outline-none">Remove</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
