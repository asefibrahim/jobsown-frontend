import React from "react";

import { CiStar } from "react-icons/ci";
import "../SignUp/Css/SignUpSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialimg1 from "../Home/Images/testimonialimg1.png";
import testimonialimg2 from "../Home/Images/testimonialimg2.png";
import testimonialimg3 from "../Home/Images/testimonialimg3.png";

function SignUpSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="TestimonialsHome ">
      <div className=" rounded-xl border-x border-b-2 mx-auto lg-w-full  w-[90%]  shadow border-black/30  pb-8 pt-4">
        <Slider {...settings}>
          {TestimonialsHomeData.map((M) => (
            <div className="TestimonialSlider">
              <div className="TestimonialSliderBox">
                <div className="testimonialimg">
                  <img
                    src={M.testimonialimg}
                    alt="testimonialimg1"
                    className="testimonialimg1"
                  />
                </div>
                <div className="testimonialname">{M.testimonialName}</div>
                <div className="testimonialLocation">
                  {M.testimonialLocation}
                </div>
                <div className="testimonialRating flex items-center py-5">
                  <CiStar className="text-3xl" />
                  <CiStar className="text-3xl" />
                  <CiStar className="text-3xl" />
                  <CiStar className="text-3xl" />
                </div>
                <div className="text-lg text-center tracking-wider px-10">
                  {M.testimonialDecription}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
const TestimonialsHomeData = [
  {
    id: "1",
    testimonialimg: testimonialimg1,
    testimonialDecription:
      "JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless.",
    testimonialLocation: "Dubai, UAE",
    testimonialName: "Raymond Galario",
  },
  {
    id: "2",
    testimonialimg: testimonialimg2,
    testimonialDecription:
      "JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. ",
    testimonialLocation: "Dubai, UAE",
    testimonialName: "Raymond Galario",
  },
  {
    id: "3",
    testimonialimg: testimonialimg3,
    testimonialDecription:
      "JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. ",
    testimonialLocation: "Dubai, UAE",
    testimonialName: "Raymond Galario",
  },
];

export default SignUpSlider;
