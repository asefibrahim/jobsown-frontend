import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UploadModal from "../ViewProfile/CandidateProfile/UploadModal";
const StepOneForm = ({ nextStep, handleFormData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [gender, setGender] = useState("");
  const [jobType, setJobType] = useState("");
  const [payType, setPayType] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };
  // const [additionalPerks, setAdditionalPerks] = useState([]);

  const handleJobTypeSelection = (type) => {
    setJobType((prevJobType) => (prevJobType === type ? "" : type));
  };

  const handlePayTypeSelection = (type) => {
    setPayType((prevPayType) => (prevPayType === type ? "" : type));
  };

  // const handlePerksSelection = (type) => {
  //   setAdditionalPerks((prevPerk) => {
  //     if (prevPerk.includes(type)) {
  //       return prevPerk.filter((perk) => perk !== type);
  //     } else {
  //       return [...prevPerk, type];
  //     }
  //   });
  // };
  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      jobRole,
      jobType,
      payType,
      gender,
    };
    handleFormData(formData);
    nextStep();
  };

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-gray-100  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block text-gray-700 font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-gray-100  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="job Role"
          className="block text-gray-700 font-bold mb-2"
        >
          Job Role
        </label>
        <input
          type="text"
          id="jobRole"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="bg-gray-100  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Job Role"
        />
      </div>

      <div className="my-4">
        <label className="text-lg font-semibold ps-2   ">
          <p className="pb-2">Gender</p>
        </label>
        <select
          className="border bg-gray-100  rounded-lg px-3 py-2 w-full"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Type of Job <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <button
              onClick={() => handleJobTypeSelection("Full Time")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                jobType === "Full Time"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Full Time
            </button>
            <button
              onClick={() => handleJobTypeSelection("Part Time")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                jobType === "Part Time"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Part Time
            </button>
            <button
              onClick={() =>
                handleJobTypeSelection("Both(Full Time and Part Time)")
              }
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                jobType === "Both(Full Time and Part Time)"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Both(Full Time and Part Time)
            </button>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            What is the pay type? <span className="text-red-500">*</span>
          </div>
          <div className="flex mb-2">
            <button
              onClick={() => handlePayTypeSelection("Fixed Only")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                payType === "Fixed Only"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Fixed Only
            </button>
            <button
              onClick={() => handlePayTypeSelection("Fixed + Incentive")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                payType === "Fixed + Incentive"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Fixed + Incentive
            </button>
            <button
              onClick={() => handlePayTypeSelection("Incentive only")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                payType === "Incentive only"
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Incentive only
            </button>
          </div>
        </div>

        <div className="mt-6 mb-2">
          <div className="font-medium py-1 px-4 mb-2">Add Company Images</div>
          <button
            className="flex items-center gap-2 justify-center px-6 lg:w-1/5 py-2 mx-3 bg-white border rounded-lg text-blue-600 border-blue-500"
            onClick={openUploadModal}
          >
            <IoMdAdd className="text-lg" />
            <span className="font-medium ">Upload</span>
          </button>
          {isUploadModalOpen && <UploadModal onClose={closeUploadModal} />}
          {/* <div className="font-medium py-1 px-4 mb-2">
            Any additional perks? <span className="text-red-500">*</span>
          </div> */}
          {/* <div className="flex">
            <button
              onClick={() => handlePerksSelection("Flexible working hours")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                additionalPerks.includes("Flexible working hours")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Flexible working hours
            </button>
            <button
              onClick={() => handlePerksSelection("Weekly Payout")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                additionalPerks.includes("Weekly Payout")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Weekly Payout
            </button>
            <button
              onClick={() => handlePerksSelection("Overtime Pay")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                additionalPerks.includes("Overtime Pay")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Overtime Pay
            </button>
            <button
              onClick={() => handlePerksSelection("Joining Bonus")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                additionalPerks.includes("Joining Bonus")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
             Joining Bonus
            </button>
            <button
              onClick={() => handlePerksSelection("Travel Allowance")}
              className={`mx-2 bg-transparent text-gray-600 border-gray-400 border rounded-3xl px-4 py-1 hover:bg-gray-100 transition duration-300 ease-in-out ${
                additionalPerks.includes("Travel Allowance")
                  ? "text-blue-300 border-blue-300 font-semibold"
                  : ""
              }`}
            >
              Travel Allowance
            </button>
          </div> */}
        </div>
        {/* <div className="font-semibold text-blue-800 mx-4">+ Add your perks</div> */}
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2"
      >
        Continue
      </button>
    </div>
  );
};

export default StepOneForm;
