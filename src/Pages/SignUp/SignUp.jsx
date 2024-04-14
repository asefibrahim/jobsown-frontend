import React, { useContext, useState } from "react";
import SignUpSlider from "./SignUpSlider";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Provider/AuthProvider.jsx";
import Swal from "sweetalert2";
import axios from "../../api/axios.js";
import { getAuth, updateProfile } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showSteps, setShowSteps] = useState(false);
  const [role, setRole] = useState("candidate");
  const totalSteps = 3;
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phno: "",
    password: "",
    confirmpassword: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmpassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    createUser(values.email, values.password)
      .then((result) => {
        console.log(result.user);
        const loggedUser = result.user;
        if (loggedUser) {
          Swal.fire("Registration Successful !");
        }
        setPasswordError("");
        setError("");

        const updateUserProfile = async (
          displayName = values.fullname,
          photoURL = values.role
        ) => {
          const auth = getAuth();
          const user = auth.currentUser;

          if (user) {
            await updateProfile(user, {
              displayName: displayName,
              photoURL: photoURL,
            });
            const userData = {
              name: values.fullname,
              email: values.email,
              role: "candidate",
            };
            axios
              .post("/users", { savedUser: userData }) // Ensure to pass the data you want to send
              .then((response) => {
                const responseData = response.data;
                console.log(responseData);

                if (responseData.insertedId) {
                  navigate("/job-search");
                }
              });
          } else {
            throw new Error("No user is currently signed in.");
          }
        };
        updateUserProfile();
      })
      .catch((error) => {
        setError(error.message);
      });

    console.log(values); // Log the values to the console
  };
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleMainBack = () => {
    // Reset the form values to initial state
    setValues(initialValues);

    // Hide the steps
    setShowSteps(false);

    // Reset the role
    setRole("candidate");

    // Reset the current step
    setCurrentStep(1);
  };
  const handleBack = () => {
    if (currentStep > 1) {
      // Assuming step count starts at 1
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setShowSteps(event.target.value === "employee");
  };

  const getStepClass = (step) => {
    return `h-6 w-6 rounded-full text-center text-[10px]/6 font-bold ${
      step === currentStep ? "bg-blue-600 text-white" : "bg-gray-100"
    }`;
  };

  // for empolyee signup

  const [formData, setFormData] = useState({
    companyName: "",
    personContactNumber: "",
    password: "",
    confirmpassword: "",
    email: "",
    phno: "",
    jobAddress: "",
    logo: "",
    website: "",
    linkedin: "",
    companySector: "",
    companySize: "",
    role: "employee",
  });

  // Function to update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to log form data
  const logFormData = () => {
    if (formData.password !== formData.confirmpassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    createUser(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
        const loggedUser = result.user;
        if (loggedUser) {
          Swal.fire("Registration Successful !");
        }

        setPasswordError("");
        setError("");
        const updateUserProfile = async (
          displayName = formData.companyName,
          photoURL = formData.role
        ) => {
          const auth = getAuth();
          const user = auth.currentUser;

          if (user) {
            await updateProfile(user, {
              displayName: displayName,
              photoURL: photoURL,
            });
            const userData = {
              name: values.fullname,
              email: values.email,
              role: "employee",
            };
            axios
              .post("/users", { savedUser: userData }) // Ensure to pass the data you want to send
              .then((response) => {
                const responseData = response.data;
                console.log(responseData);

                if (responseData.insertedId) {
                  navigate("/post-a-newjob");
                }
              });
          } else {
            throw new Error("No user is currently signed in.");
          }
        };
        updateUserProfile();

        navigate("/view-employee-landing");

        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="max-w-7xl  mx-auto">
      <div class="lg:flex flex-warp w-full">
        <div class="lg:w-1/2  ">
          <div className="pt-16">
            <img
              className="lg:h-[150px] lg:ps-4 h-52 "
              src="/logo.svg"
              alt=""
            />
          </div>
          <div className="lg:ps-[60px]  ps-2 lg:text-start text-center ">
            <p className="lg:text-4xl  text-2xl  text-gray-800 font-medium">
              Turning Possibility into{" "}
              <span>
                {" "}
                <span className="font-bold lg:ps-3 ">Reality</span>
              </span>
            </p>

            <p className="text-3xl py-6 pb-6 font-medium tracking-wide text-[#3030db]">
              Success Stories
            </p>
          </div>
          <div className="">
            <SignUpSlider />
          </div>
        </div>
        <div className="w-full lg:px-7 px-8 mx-auto py-8 lg:ps-8 lg:w-1/2">
          <p className="my-12 md:text-[41px] text-3xl font-medium tracking-wide text-center text-[#3030db] b:text-slate-200">
            Sign up to your account!
          </p>

          <div className="md:px-12 py-10">
            {/* Radio Buttons for Employee/Candidate */}
            {!showSteps && (
              <div className="flex gap-4 py-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="candidate"
                    checked={role === "candidate"}
                    onChange={handleRoleChange}
                    className="accent-blue-600"
                  />
                  <span className="ml-2 text-gray-700 font-medium">
                    Continue as a candidate
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="employee"
                    checked={role === "employee"}
                    onChange={handleRoleChange}
                    className="accent-blue-600"
                  />
                  <span className="ml-2 text-gray-700 font-medium">
                    Continue as an employee
                  </span>
                </label>
              </div>
            )}

            {showSteps && (
              <div>
                <h2 className="sr-only">Steps</h2>
                <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
                  <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                    {[...Array(totalSteps)].map((_, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 bg-white p-2"
                      >
                        <span className={getStepClass(index + 1)}>
                          {index + 1}
                        </span>
                        <span className="hidden sm:block">
                          {`Step ${index + 1}`}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* Input Fields */}
            <div>
              {role === "candidate" && (
                <form onSubmit={handleSubmit}>
                  <div className="pt-4">
                    <label
                      className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                      htmlFor="fullname"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      value={values.fullname}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                      htmlFor="phno"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="phno"
                      name="phno"
                      type="text"
                      value={values.phno}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                      htmlFor="confirmpassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    {passwordError && (
                      <p className="text-red-500 mt-1">{passwordError}</p>
                    )}{" "}
                    <p className="text-red-600">{error}</p>
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}

              {role === "employee" && (
                <div>
                  {/* Company Name */}
                  <div
                    className={`${
                      currentStep === 2 || currentStep === 3 ? "hidden" : ""
                    }`}
                  >
                    <div className="pt-4">
                      <label
                        className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    {/* Person Contact Number */}
                    <div className="pt-4">
                      <label
                        className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                        htmlFor="personContactNumber"
                      >
                        Person Contact Number
                      </label>
                      <input
                        id="personContactNumber"
                        name="personContactNumber"
                        type="text"
                        value={formData.personContactNumber}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="pt-4">
                      <label
                        className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="pt-4">
                      <label
                        className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                        htmlFor="phno"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="phno"
                        name="phno"
                        type="text"
                        value={formData.phno}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    {/* Job Address */}
                    <div className="pt-4">
                      <label
                        className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                        htmlFor="jobAddress"
                      >
                        Job Address
                      </label>
                      <input
                        id="jobAddress"
                        name="jobAddress"
                        type="text"
                        value={formData.jobAddress}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>
                  </div>
                  {currentStep === 1 && (
                    <div>
                      {/* ... existing input fields for step 1 ... */}
                      <div className="pt-8">
                        <button
                          onClick={handleContinue}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Continue
                        </button>
                      </div>
                      <div className="pt-8">
                        <button
                          onClick={handleMainBack}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div>
                      {/* Upload Logo */}
                      <div className="pt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700"
                          htmlFor="logo"
                        >
                          Upload Logo
                        </label>
                        <input
                          id="logo"
                          name="logo"
                          type="file"
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="mt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700"
                          htmlFor="website"
                        >
                          Website URL
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>

                      {/* LinkedIn URL */}
                      <div className="mt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700"
                          htmlFor="linkedin"
                        >
                          LinkedIn URL
                        </label>
                        <input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>
                      {/* hel;lo */}
                      <div className="pt-8">
                        <button
                          onClick={handleContinue}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Continue
                        </button>
                      </div>
                      <div className="pt-8">
                        <button
                          onClick={handleBack}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div>
                      {/* Upload Logo */}
                      <div className="pt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700"
                          htmlFor="logo"
                        >
                          Company Sector
                        </label>
                        <input
                          name="companySector"
                          type="text"
                          value={formData.companySector}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="mt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700"
                          htmlFor="website"
                        >
                          Company Size
                        </label>
                        <input
                          name="companySize"
                          type="url"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          className="block mb-2 text-xl font-medium text-gray-700 b:text-slate-200"
                          htmlFor="confirmpassword"
                        >
                          Confirm Password
                        </label>
                        <input
                          id="confirmpassword"
                          name="confirmpassword"
                          type="password"
                          value={formData.confirmpassword}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg b:bg-slate-800 b:text-slate-300 b:border-black focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {passwordError && (
                          <p className="text-red-500 mt-1">{passwordError}</p>
                        )}{" "}
                        <p className="text-red-600">{error}</p>
                      </div>

                      {/* LinkedIn URL */}

                      <div className="pt-8">
                        <button
                          onClick={logFormData}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="pt-8">
                        <button
                          onClick={handleBack}
                          className="w-full px-6 py-3 text-xl font-medium tracking-wide border text-gray-700 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
