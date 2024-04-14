import React, { useState } from "react";
import RoundedButton from "./RoundedButton";
import Attach from "../../assets/Attach.png";
import Bold from "../../assets/Bold.png";
import Italic from "../../assets/Italic.png";
import Underline from "../../assets/Underline.png";
import NumberPoints from "../../assets/NumberPoints.png";
import Points from "../../assets/Points.png";

const StepTwoForm = ({ prevStep, nextStep, handleFormData }) => {
  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [prosOfJob, setProsOfJob] = useState("");
  const [jobRequirement, setJobRequirement] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleEducationSelection = (type) => {
    setSelectedEducation((prevSelectedEducation) =>
      prevSelectedEducation === type ? "" : type
    );
  };

  const handleExperienceSelection = (type) => {
    setSelectedExperience((prevSelectedExperience) =>
      prevSelectedExperience === type ? "" : type
    );
  };

  const handleLanguageSelection = (type) => {
    setSelectedLanguages((prevLangTypes) => {
      if (prevLangTypes.includes(type)) {
        return prevLangTypes.filter((langType) => langType !== type);
      } else {
        return [...prevLangTypes, type];
      }
    });
  };

  const handleNextStep = () => {
    // Collect form data
    const formData = {
      education: selectedEducation,
      experience: selectedExperience,
      languages: selectedLanguages,
      jobDescription: jobDescription,
      prosOfJob: prosOfJob,
      jobRequirement: jobRequirement,
      aboutCompany: aboutCompany,
      postingDate: postingDate,
    };

    // Pass form data to parent component
    handleFormData(formData);

    // Proceed to the next step
    nextStep();
  };

  return (
    <div>
      <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Minimum Education <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <button
              onClick={() => handleEducationSelection("10th or below 10th")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedEducation === "10th or below 10th"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              10th or below 10th
            </button>
            <button
              onClick={() => handleEducationSelection("12th pass")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedEducation === "12th pass"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              12th pass
            </button>

            <button
              onClick={() => handleEducationSelection("Diploma")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedEducation === "Diploma"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Diploma
            </button>

            <button
              onClick={() => handleEducationSelection("ITI")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedEducation === "ITI"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              ITI
            </button>

            <button
              onClick={() => handleEducationSelection("Graduate")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedEducation === "Graduate"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Graduate
            </button>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Total experience required <span className="text-red-500">*</span>
          </div>
          <div className="flex mb-2">
            <button
              onClick={() => handleExperienceSelection("Any")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedExperience === "Any"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Any
            </button>
            <button
              onClick={() => handleExperienceSelection("Beginner (0-2)")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedExperience === "Beginner (0-2)"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Beginner (0-2)
            </button>

            <button
              onClick={() => handleExperienceSelection("Intermediate (2-5)")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedExperience === "Intermediate (2-5)"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Intermediate (2-5)
            </button>

            <button
              onClick={() => handleExperienceSelection("Advanced (6+)")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedExperience === "Advanced (6+)"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Advanced (6+)
            </button>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Language <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            {/* <RoundedButton
              onClick={() => handleLanguageSelection("English")}
              isSelected={selectedLanguages.includes("English")}
            >
              English +
            </RoundedButton> */}
            <button
              onClick={() => handleLanguageSelection("English")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedLanguages.includes("English")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelection("Hindi")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedLanguages.includes("Hindi")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Hindi
            </button>
            <button
              onClick={() => handleLanguageSelection("Arabic")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                selectedLanguages.includes("Arabic")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Arabic
            </button>
          </div>
        </div>
        {/* <div className="font-semibold text-blue-800 mx-4">+ Add your perks</div> */}
      </div>
      <div>
        <h2 className="text-2xl font-medium py-3">
          Additional Requirement (Optional)
        </h2>
      </div>
      <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">Pros of Job</div>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter pros of the job..."
            value={prosOfJob}
            onChange={(e) => setProsOfJob(e.target.value)}
          />
        </div>

        {/* Job Requirement */}
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">Job Requirement</div>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter job requirement..."
            value={jobRequirement}
            onChange={(e) => setJobRequirement(e.target.value)}
          />
        </div>

        {/* About Company */}
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">About Company</div>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-3"
            placeholder="Enter about company..."
            value={aboutCompany}
            onChange={(e) => setAboutCompany(e.target.value)}
          />
        </div>

        {/* Posting Date */}
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">Posting Date</div>
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2"
            value={postingDate}
            onChange={(e) => setPostingDate(e.target.value)}
          />
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-medium py-3">Job Description </h2>
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Enter job description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows="4"
          style={{
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
          }}
        ></textarea>

        <div className="flex  bg-gray-100 border rounded-lg w-full py-2 px-3">
          <button>
            <img src={Attach} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button
            onClick={handleToggleBold}
            className={`font-medium mr-4 ${
              isBold ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <img src={Bold} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button
            onClick={handleToggleItalic}
            className={`italic ${isItalic ? "text-blue-600" : "text-gray-400"}`}
          >
            <img src={Italic} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Underline} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={NumberPoints} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Points} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Italic} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={prevStep}
        className="text-black border border-black hover:bg-gray-200 py-1 px-20 rounded mx-2"
      >
        Back
      </button>
      <button
        type="button"
        onClick={handleNextStep}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2"
      >
        Continue
      </button>
    </div>
  );
};

export default StepTwoForm;
