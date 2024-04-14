import React, { useState } from "react";
import "./FirstPage.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import searchbar from "../Images/searchbar.png";
import SearchIcon from "../../../assets/SearchIcon.png";
import { CiLocationOn } from "react-icons/ci";
import axios from "../../../api/axios";
import { useData } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

function FirstPage() {
  const location = useLocation();
  const logic = location.pathname.includes("view-employee-landing");
  const navigate = useNavigate();
  const isEmployeeLandingPage = location.pathname.includes(
    "view-employee-landing"
  );
  const { setData } = useData([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  console.log(searchQuery);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/jobs?query=${searchQuery}&location=${locationQuery}`
      );
      console.log(response.data);
      setData(response.data?.jobs);
      if (response.data?.jobs?.length) {
        navigate("/job-search");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No jobs found based on your search",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error searching for jobs:", error);
    }
  };

  return (
    <div className="FirstPageBox">
      <div className="HomePage1">
        <div className="TypeOfJop lg:h-[70px] h-[40px] lg:text-3xl text-xl font-semibold tracking-wider ">
          <div className={`${logic ? "Type2" : "Type3"}`}>
            <Link to={"/  "}>
              {" "}
              <button>Job Seeker</button>
            </Link>
          </div>
          <div className={`${logic ? "Type3" : "Type2"} `}>
            <Link to={"view-employee-landing  "}>
              {" "}
              <button>Job Provider</button>
            </Link>
          </div>
        </div>
        <div className="HomePageBg">
          {/* <img src={HomepageBg1} alt='HomepageBg1' className='HomepageBg1Img' /> */}
          <div className="HomePageContent1  lg:pt-20">
            <div className="sloganContent  hidden lg:block">
              <p
                className={`${
                  isEmployeeLandingPage && "pt-28 text-6xl leading-[80px]"
                }`}
              >
                {" "}
                Unlock Your Career Potential with JobOwn:
                <br /> Your Gateway to Opportunities
              </p>
            </div>
            <div className="sloganContent block lg:hidden">
              JobOwn: Elevate Your Career Journey
            </div>
            {!isEmployeeLandingPage && (
              <div className="HomePageSearch hidden lg:flex lg:w-[60%] w-3/4 lg:h-20 h-12 mx-auto">
                <input
                  type="text"
                  placeholder="Search jobs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="HomePageSearchIcon"
                />
                |
                <input
                  type="text"
                  placeholder="Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="HomePageSearchIcon"
                />
                <button
                  type="search"
                  onClick={handleSearch}
                  className="lg:w-14 lg:h-14 w-10 h-10 lg:pr-0 pr-2"
                >
                  <img src={searchbar} alt="" className="" />
                </button>
              </div>
            )}
            {!isEmployeeLandingPage && (
              <div className="hidden lg:block lg:ms-[280px] lg:pt-52">
                <div className="   w-3/4 ps-3">
                  <div className="flex items-center justify-center Apply">
                    <div class="underline text-blue-800 lg:text-xl text-lg">
                      Apply for jobs
                    </div>
                    <div class="text-black lg:text-xl text-lg">-</div>
                    <div class="text-black lg:text-xl text-lg ">
                      within seconds
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class="w-4/5 mx-auto lg:hidden mt-10 custom-input1">
          <div class="flex custom-border-firstpage">
            <div class="w-1/5 p-2">
              <img src={SearchIcon} alt="/" />
            </div>
            <input
              type="text"
              placeholder="Search Jobs,Title"
              className="w-3/5 flex justify-center items-center p-2"
            />
          </div>
          <div class="flex">
            <div class="w-1/5 p-2">
              <CiLocationOn className="text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Location"
              className="w-3/5 flex justify-center items-center p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
