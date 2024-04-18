import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Stepper from "../../Components/JobDetails/Stepper";
import StepOneForm from "../../Components/JobDetails/StepOneForm";
import StepTwoForm from "../../Components/JobDetails/StepTwoForm";
import StepThreeForm from "../../Components/JobDetails/StepThreeForm";
import StepFourForm from "../../Components/JobDetails/StepFourForm";
import StepFiveForm from "../../Components/JobDetails/StepFiveForm";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Form = () => {
  const { user } = useContext(AuthContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    employeeEmail: user?.email,
  });
  const navigate = useNavigate();
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleFormData = (step, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: data,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Data to be sent in the POST request

    // Making a POST request using axios
    axios
      .post("/jobs", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.message) {
          Swal.fire(response.data.message);
          navigate("/employee-dashboard/post-a-newjob");
        }
        // Handle the response here. For example, you can set state or redirect the user.
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // Handle errors here. For example, displaying an error message to the user.
      });
  };

  const renderStepComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <StepOneForm
            nextStep={nextStep}
            handleFormData={(data) => handleFormData("step1", data)}
          />
        );
      case 2:
        return (
          <StepTwoForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={(data) => handleFormData("step2", data)}
          />
        );
      case 3:
        return (
          <StepThreeForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={(data) => handleFormData("step3", data)}
          />
        );
      case 4:
        return (
          <StepFourForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={(data) => handleFormData("step4", data)}
          />
        );
      case 5:
        return (
          <StepFiveForm
            prevStep={prevStep}
            handleFormData={(data) => handleFormData("step5", data)}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <Stepper
          currentStep={currentStep}
          steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}
        />
        {renderStepComponent(currentStep)}
      </div>
    </>
  );
};

export default Form;
