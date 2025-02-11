import axios from "axios";
import React, { useContext, useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCash,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./SearchCandidates.css";
const CandidateCard = ({ candidate, border, background, width, viewNum, savedCandidates, setMyCandidates }) => {
  const { user } = useContext(AuthContext);
  console.log("My saved candidates ids looks liking are ting", savedCandidates);
  const {
    _id,
    name,
    image,
    experience,
    experience_years,
    current_salary,
    location,
    job_preferences,
  } = candidate;
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleSaveCandidate = (value) => {

    axios
      .post(`http://localhost:5000/api/save-candidate`, {
        ...candidate,
        savedEmail: user?.email,
        candidateId: value,
      })
      .then((res) => {
        console.log("saved candidate result is", res?.data);
        if(savedCandidates.includes(value)){
          setMyCandidates(prevCandidates => prevCandidates.filter(candidate => candidate !== value));
        } else {
          setMyCandidates(prevCandidates => [...prevCandidates, value]);
        }
      })
      .catch((err) => {
        console.log(err?.message);
      });
  };
  return (
    <div
      style={{ background: background, width: width, border: border }}
      className={`mt-4 border-black rounded-lg`}
    >
      <div class="flex items-center px-6 p-4 ">
        <div className="flex items-center ">
          <input
            type="radio"
            value="option1"
            checked={savedCandidates?.includes(_id) ? true : false}
            onClick={() => handleSaveCandidate(_id)}
            className="form-radio text-blue-500 w-4 h-4"
          />
          <div className="ml-6">
            <img
              src={image}
              alt="font-semibold profileImg"
              className="rounded-full w-12 h-12 cursor-pointer"
            />
          </div>
        </div>
        <div className=" text-xl font-semibold pl-6 ml-12">{name}</div>
        <button className=" font-semibold text-blue-800 ml-4">
          <Link to={`/candidate-details/${_id}`}>View profile for free</Link>
        </button>
      </div>
      <div className="flex items-center gap-5 mt-1 ml-16">
        <div className="flex items-center custom-background text-blue-800 px-2 py-1 gap-2 rounded-full">
          <HiOutlineBriefcase size={20} />
          <span className="font-semibold">{experience_years}years</span>
        </div>
        <div className="flex items-center custom-background text-blue-800 px-2 py-1 gap-2 rounded-full">
          <HiOutlineCash size={20} />
          <span className="font-semibold">{current_salary}lakhs</span>
        </div>
        <div className="flex items-center custom-background text-blue-800 px-2 py-1 gap-2 rounded-full">
          <HiOutlineLocationMarker size={20} />
          <span className="font-semibold">{location}</span>
        </div>
      </div>
      <div className=" grid grid-cols-12 mx-auto mb-2">
        <div className=" col-span-4 p-2 ml-16">
          <div className="text-gray-400 p-2">Company Name</div>
          <div className="text-gray-400 p-2">Job Title</div>
          <div className="text-gray-400 p-2">Job Role</div>
          <div className="text-gray-400 p-2">Job Type</div>
          <div className="text-gray-400 p-2">Work Type</div>
          <div className="text-gray-400 p-2">Job City</div>
          <div className="text-gray-400 p-2">Pay Type</div>
        </div>
        <div className="col-span-8 p-2">
          {experience?.length > 0 && (
            <>
              <div className="font-semibold p-2">{experience[0]?.company}</div>
              <div className="font-semibold p-2">{experience[0]?.title}</div>
              <div className="font-semibold p-2">{experience[0]?.job_role}</div>
              <div className="font-semibold p-2">{experience[0]?.job_type}</div>
              <div className="font-semibold p-2">
                {job_preferences?.preferred_workplace}
              </div>
              <div className="font-semibold p-2">{experience[0]?.job_city}</div>
              <div className="font-semibold p-2">
                {experience[0]?.pay_type} per month (Fixed only)
              </div>
            </>
          )}
        </div>
      </div>
      <button
        style={{ display: viewNum }}
        className="flex ml-20 bg-blue-800 text-white px-4 py-2 rounded-md mb-4"
      >
        View phone number
      </button>
    </div>
  );
};

export default CandidateCard;
