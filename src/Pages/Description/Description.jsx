import React, { useContext, useEffect, useState } from "react";
import descriptionImg from "../../assets/description.png";
import des from "../../assets/testImage.jpg";

import { CiBookmark } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider.jsx";
import axios from "../../api/axios.js";
import NexicornLogo from "../../assets/NexicornLogo.png";
import demoVideo from "../../assets/video.mp4";
import Header from "../FinalHomeScreen/Header.jsx";
import AboutCompany from "./AboutCompany/index.jsx";
import JobDetails from "./JobDetails/index.jsx";
import JobReq from "./JobRequirements/index.jsx";
import KeyFeatures from "./KeyFeatures/index.jsx";
import MoreJobs from "./MoreJobs/index.jsx";
import Pros from "./Pros/index.jsx";
import "./index.css";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  console.log({ style });
  return (
    <div>
      <FaAngleLeft
        className={className}
        style={{
          ...style,
          display: "block",
          background: "",
          color: "#165e83",
        }}
        onClick={onClick}
      />
    </div>
  );
}
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  console.log({ style });
  return (
    <div>
      <FaAngleRight
        className={className}
        style={{
          ...style,
          display: "block",
          background: "",
          color: "#165e83",
        }}
        onClick={onClick}
      />
    </div>
  );
};
const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [candidateDetails, setCandidatesDetails] = useState({});
  console.log(user);

  useEffect(() => {
    axios(`https://jobsown-server.vercel.app/api/candidate-info/${user?.email}`)
      .then((res) => {
        setCandidatesDetails(res?.data);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, []);

  console.log("candidate info is", candidateDetails);

  const handleApplyClick = async (id) => {
    Swal.fire({
      title: "Are you sure to apply for this job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, easy apply!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Prepare the data to be sent
        const candidateData = {
          email: user?.email,
          name: user?.displayName,
          title: candidateDetails?.preferred_job_title,
          jobId: id,
        };

        // Axios POST request
        axios
          .post("/applied-jobs", candidateData)
          .then((response) => {
            if (response.data.insertedId) {
              Swal.fire({
                title: "Applied!",
                text: "You have successfully applied for the job.",
                icon: "success",
              });
            }
            navigate("/job-search");
          })
          .catch((error) => {
            // Handle error here
            Swal.fire({
              title: "Error!",
              text: "There was an issue applying for the job.",
              icon: "error",
            });
          });
      }
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Header />
      <div class=" max-w-7xl mx-auto md-8 mt-12">
        <div class="flex justify-between ml-6 mr-8">
          <div class="w-1/5  m-4 p-2 ">
            <Slider {...settings}>
              <div className="relative h-56 rounded-lg overflow-hidden">
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={demoVideo} type="video/mp4" />
                </video>
              </div>
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src={descriptionImg}
                  alt="Slide 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src={des}
                  alt="Slide 3"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Add more slides as needed */}
            </Slider>
          </div>
          <div class="w-4/5 flex custom-shadow-desc rounded-xl p-4">
            <div class="w-1/2 p-4 mt-4">
              <div class="flex w-full">
                <div class="flex items-center text-3xl p-2">
                  Product Designer
                </div>
                <div class="flex justify-center items-center w-1/5">
                  <CiBookmark className="text-xl" />
                </div>
              </div>
              <div class="flex">
                <div class="flex justify-center items-center p-2">
                  <img src={NexicornLogo} alt="/" />
                </div>
                <div class="flex justify-center items-center p-2 text-xl">
                  Nexicorn Solutions
                </div>
              </div>
              <div class="flex">
                <div class="flex justify-center items-center p-2">
                  <MdOutlineLibraryBooks className="text-xl text-blue-700" />
                </div>
                <div class="flex justify-center items-center p-2 text-xl">
                  50,000 -1,49,999 / Per month
                </div>
              </div>
            </div>
            {!user ? (
              <div class="w-1/2 p-x-4 mt-20 flex justify-evenly items-start ">
                <Link to={"/signup"}>
                  <button class="custom-shadow-btn1  text-xl">
                    Register to apply
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button class="custom-shadow-btn2 text-white text-xl">
                    Login to Apply
                  </button>
                </Link>
              </div>
            ) : (
              <div class="ms-60 p-x-4 mt-20 flex justify-evenly items-start ">
                <button
                  onClick={() => handleApplyClick(id)}
                  class="custom-shadow-btn2  text-white text-xl"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <KeyFeatures></KeyFeatures>

          <Pros></Pros>
        </div>

        <div className="flex mx-4">
          <div className="w-2/3">
            <JobReq></JobReq>
            <JobDetails></JobDetails>
          </div>
          <div className="w-1/3">
            <AboutCompany />
            <MoreJobs></MoreJobs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
