import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const OtherDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    setIsPhoneNumberValid(number.length === 10 && !isNaN(number));
  };

  const handleGetOTP = () => {
    // Add logic to get OTP here
    console.log("Get OTP button clicked");
    // For demo purposes, setting a message indicating OTP sent successfully
    setOtpMessage("OTP sent successfully!");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col bg-gray-100 rounded-lg py-6 px-8 mt-8 gap-2">
        <div className="space-y-2 mb-6">
          <h1 className="text-xl font-medium text-gray-800">
            Verify your phone number
          </h1>
        </div>
        <input
          type="text"
          placeholder="Enter mobile number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border border-gray-300 rounded-lg py-2 px-4 w-64"
        />
        <div className="flex bg-gray-100 rounded-lg py-2 px-8 mt-2 gap-4">
          <button
            onClick={handleGetOTP}
            disabled={!isPhoneNumberValid}
            className={`flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded-lg ${
              isPhoneNumberValid
                ? "text-blue-600 border-blue-500"
                : "text-gray-400 border-gray-300"
            }`}
          >
            <IoMdAdd className="text-lg" />
            <span className="font-medium">Get OTP</span>
          </button>

          <button className="flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded-lg text-blue-600 border-blue-500">
            <IoMdAdd className="text-lg" />
            <span className="font-medium">Verify</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-xl font-medium text-gray-800">{otpMessage}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherDetails;
