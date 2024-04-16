import React, { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import AnnualSalary from "./AnnualSalary";
import CandidateCard from "./CandidateCard";
import CurrentLocation from "./CurrentLocation";
import DropRecords from "./DropRecords";
import ExcludeKeywords from "./ExcludeKeywords";
import Experience from "./Experience";
import Industries from "./Industries";
import "./SearchCandidates.css";
import Sidebar from "./Sidebar";
import Education from "./Education";
import Gender from "./Gender";
import Age from "./Age";
import Language from "./Language";

const SearchCandidates = () => {
  // get search params data from url
  const urlLocation = useLocation();
  const searchParams = new URLSearchParams(urlLocation.search);
  const keyword = searchParams.get("keyword");
  const currentCity = searchParams.get("current_city");
  const minExperience = searchParams.get("min_experience");
  const maxExperience = searchParams.get("max_experience");
  const minSalary = searchParams.get("min_salary");
  const maxSalary = searchParams.get("max_salary");
  const education = searchParams.get("education");

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedBy1, setSelectedBy1] = useState("me");
  const [selectedBy2, setSelectedBy2] = useState("1month");
  const [selectedWeeks, setSelectedWeeks] = useState(2);
  const [entries, setEntries] = useState(25);
  const [candidates, setCandidates] = useState([]);

  // handle cv attached
  const [haveCv, setHaveCv] = useState(null);

  // handle city/location
  const [cityOrLocation, setCityOrLocation] = useState(currentCity);

  // handle sorting by keywords
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  // handle sorting by experience
  const [searchMinExperience, setSearchMinExperience] = useState(minExperience);
  const [searchMaxExperience, setSearchMaxExperience] = useState(maxExperience);

  // sort by industries 
  const [searchIndustries, setSearchIndustries] = useState("");

  // sort by annual salary
  const [searchMinSarlary, setAnnualMinSarlary] = useState(minSalary);
  const [searchMaxSarlary, setAnnualMaxSarlary] = useState(maxSalary);

  // sort by education
  const [searchEducation, setSearchEducation] = useState(education);

  // sort by gender
  const [gender, setGender] = useState(null);

  // sort by age
  const [minAge, setMinAge] = useState(null);
  const [maxAge, setMaxAge] = useState(null);

  // sort by language
  const [searchLanguage, setSearchLanguage] = useState("");

  console.log("check from parent does it got it city or loc", cityOrLocation);

  const handleChange = (key, value) => {
    switch (key) {
      case "option":
        setSelectedOption(value);
        break;
      case "option1":
        setSelectedOption1(value);
        break;
      default:
        break;
    }
  };

  // 


  // get candidates

  useEffect(() => {
    axios.get("http://localhost:5000/api/candidates", {
      params: {
        keyword: searchKeyword,
        currentCity: cityOrLocation,
        minExperience: searchMinExperience,
        maxExperience: searchMaxExperience,
        minSalary: searchMinSarlary,
        maxSalary: searchMaxSarlary,
        education: searchEducation,
        cvLink: haveCv,
        searchIndustries: searchIndustries,
        gender: gender,
        minAge: minAge,
        maxAge: maxAge,
        language: searchLanguage,
    }
    })
    .then(res => {
      console.log(res.data);
      setCandidates(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [haveCv, cityOrLocation, searchKeyword, searchMinExperience, searchMaxExperience, searchIndustries, searchMinSarlary, searchMaxSarlary, searchEducation, gender, minAge, maxAge, searchLanguage ])

  // // clear search and sorting results
  // const handleSearchClear = () => {
  //   setSearchKeyword(keyword);
  //   setHaveCv(null);
  //   setGender(null);
  //   setSearchEducation("");
  //   setCityOrLocation(currentCity);
  // }

  return (
    <div>
      <Sidebar />
      <div className="grid grid-cols-12 max-w-7xl mx-auto">
        <div className="col-span-3 p-4">
          <div className="text-2xl font-semibold mt-1 mb-2">
            Search Candidates
          </div>

          <div>
            <div className="flex justify-between p-4 items-center custom-border-bottom">
              <div className="text-2xl font-semibold text-blue-800">
                Filters
              </div>
              <div className="text-base font-medium cursor-pointer hover:text-[#000099]">Clear</div>
            </div>
            <div className="p-4 custom-border-bottom">
              <div className="font-semibold text-blue-800 py-2">
                Hire Candidates that are
              </div>
              <div className="mb-3">
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={() => handleChange("option", "option1")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Already unlocked</span>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={() => handleChange("option", "option2")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  Already downloaded in excel
                </span>
              </div>
              <span className="">by</span>
              <select
                value={selectedBy1}
                onChange={(e) => setSelectedBy1(e.target.value)}
                className="m-1 p-1 border border-gray-300 rounded w-[4rem]"
              >
                <option value="me">Me</option>
                <option value="someone_else">Others</option>
              </select>

              <span className="">in the last</span>
              <select
                value={selectedWeeks}
                onChange={(e) => setSelectedWeeks(e.target.value)}
                className="m-1 p-1 border border-gray-300 rounded-md "
              >
                <option value={1}>1 week</option>
                <option value={2}>2 weeks</option>
                <option value={3}>3 weeks</option>
              </select>
            </div>
            <DropRecords
              optionTexts={["Have CV Attached"]}
              hireText="Show Candidates who"
              setHaveCv={setHaveCv}
            />
            <CurrentLocation 
                hireText="Current City/Location"
                setCityOrLocation={setCityOrLocation}
             />

            <ExcludeKeywords 
            hireText="Exclude Keywords"
            setSearchKeyword={setSearchKeyword}
            />
            <Experience 
              hireText="Experience" 
              setSearchMinExperience={setSearchMinExperience}
              setSearchMaxExperience={setSearchMaxExperience}
            />
            <Industries 
              hireText="Industries" 
              setSearchIndustries={setSearchIndustries}
              setSearchKeyword={setSearchKeyword}
            />
            <AnnualSalary 
              hireText="Annual Salary"
              setAnnualMinSarlary={setAnnualMinSarlary}
              setAnnualMaxSarlary={setAnnualMaxSarlary}
             />
            <Education 
               optionTexts={["10th Pass", "12th Pass", "Diploma", "ITI", "Graduate", "Post Graduate"]}
               hireText="Education" 
               setSearchEducation={setSearchEducation}
            />
            <Gender 
               optionTexts={["Male", "Female"]} 
               hireText="Gender"
               setGender={setGender}
             />
            <Age 
               hireText="Age"
               setMinAge={setMinAge}
               setMaxAge={setMaxAge}
             />
            <Language 
              hireText="Languages"
              setSearchLanguage={setSearchLanguage}
            />
          </div>
        </div>

        <div className="col-span-9 p-4 ml-8">
          <div className="flex justify-between mb-2">
            <div>
              <span className="">Active in</span>
              <select
                value={selectedBy2}
                onChange={(e) => setSelectedBy2(e.target.value)}
                className="m-1 p-1 border border-gray-300 rounded "
              >
                <option value="1month">1month</option>
                <option value="someone_else">Others</option>
              </select>
            </div>
            <div>
              <span className="">Showing</span>
              <select
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className="m-1 p-1 border border-gray-300 rounded-md "
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="">per page</span>
            </div>
          </div>
          <div class="flex gap-10 px-6 border border-black p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                value="option1"
                checked={selectedOption1 === "option1"}
                onChange={() => handleChange("option1", "option1")}
                className="form-radio text-blue-500 w-4 h-4"
              />
              <span className="ml-6  font-semibold text-medium text-gray-700">
                Select All
              </span>
            </div>
            <button className="flex items-center text-blue-800">
              <HiDownload className="w-7 h-7" />
              <span className="ml-2 font-semibold text-lg ">
                Download Excel
              </span>
            </button>
          </div>
          {
            candidates?.map(candidate => (
              <CandidateCard candidate={candidate} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SearchCandidates;
