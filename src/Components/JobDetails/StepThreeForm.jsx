import React, { useState } from "react";
import RoundedButton from "./RoundedButton";
const StepThreeForm = ({ prevStep, nextStep, handleFormData }) => {
  const [jobLocation, setJobLocation] = useState("");
  const [jobOpenings, setJobOpenings] = useState("");
  const [salary, setSalary] = useState("");
  const [interviewMethod, setInterviewMethod] = useState("");
  const [address, setAddress] = useState("");
  const handleInterviewSelection = (type) => {
    setInterviewMethod((prevSelectedMethod) =>
      prevSelectedMethod === type ? "" : type
    );
  };
  const handleContinue = () => {
    // Construct the object containing all the form data
    const formData = {
      jobLocation: jobLocation,
      jobOpenings: jobOpenings,
      salary: salary,
      interviewMethod: interviewMethod,
    };

    // Pass the form data to the parent component
    handleFormData(formData);

    // Proceed to the next step
    nextStep();
  };
  return (
    <>
      <div className="font-semibold  text-xl py-2 px-3">
        Interview information
      </div>
      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3 text-blue-700">
        Leads information will be accessible on Jobsown and can be{" "}
        <b>downloaded in excel</b> format.
      </div>
      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="px-3 py-3">
          {/* Job Location */}
          <div className="my-4">
            <label className="text-lg font-semibold  mt-2 py-2 px-3">
              Job Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="Enter job location..."
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>

          {/* Job Openings */}
          <div className="my-4">
            <label className="text-lg font-semibold  mt-2 py-2 px-3">
              Job Openings <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="Enter number of job openings..."
              value={jobOpenings}
              onChange={(e) => setJobOpenings(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="my-4">
        <label className="text-lg font-semibold mt-2 py-2 px-3">
          Salary <span className="text-red-500">*</span>
        </label>
        <select
          className="border rounded-lg px-3 py-2 w-full"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="">Select salary range...</option>
          <option value="AED 60,000-AED 80,000">AED 60,000-AED 80,000</option>
          <option value="AED 80,000-AED 100,000">AED 80,000-AED 100,000</option>
          <option value="AED 100,000-AED 120,000">
            AED 100,000-AED 120,000
          </option>
          <option value="AED 120,000-AED 140,000">
            AED 120,000-AED 140,000
          </option>
        </select>
      </div>

      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <label className="text-lg font-semibold  mt-2 py-2 px-3">
          Job Location <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <button
            onClick={() => handleInterviewSelection("Inperson interview")}
            className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
              interviewMethod === "Inperson interview"
                ? "text-blue-300 border-blue-300 font-semibold"
                : ""
            }`}
          >
            Inperson interview
          </button>

          <button
            onClick={() => handleInterviewSelection("Online interview")}
            className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
              interviewMethod === "Online interview"
                ? "text-blue-300 border-blue-300 font-semibold"
                : ""
            }`}
          >
            Online interview
          </button>
        </div>
        <div className="text-lg font-semibold  mt-2 py-2 px-3">
          Company Address
        </div>
        <input
          type="text"
          className="appearance-none border rounded-lg w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="New Delhi, India"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
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
        onClick={handleContinue}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2"
      >
        Continue
      </button>
    </>
  );
};

export default StepThreeForm;
