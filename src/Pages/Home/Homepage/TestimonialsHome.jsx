import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialimg1 from "../Images/testimonialimg1.png";
import testimonialimg2 from "../Images/testimonialimg2.png";
import testimonialimg3 from "../Images/testimonialimg3.png";
import StarReview from "../Images/StarReview.png";

function TestimonialsHome() {
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
    <div className=" lg:w-3/4 w-4/5 mx-auto">
      <div className="TestimonialsHomeBox pb-6 ">
        <div className="TestimonialsHomePlate">
          <div className="TestimonialsHomeHeading1 ">
            <h1 className="md:block hidden">
              {" "}
              Elevate Your Career: Where Job Satisfaction Begins!
            </h1>
          </div>
          <div className="text-gray-600">Testimonials from our users</div>
        </div>
        <Slider {...settings}>
          {TestimonialsHomeData.map((M) => (
            <div className="">
              <div className="TestimonialSliderBox">
                <div className="w-1/2 flex items-center justify-center  ">
                  <img
                    src={M.testimonialimg}
                    alt="rounded-full"
                    className="rounded-full"
                  />
                </div>
                <div className="testimonialname">{M.testimonialName}</div>
                <div className="testimonialLocation">
                  {M.testimonialLocation}
                </div>
                <div className="testimonialRating p-2">
                  <img src={StarReview} alt="/" />
                </div>
                <div className="testimonialDecription">
                  {M.testimonialDecription?.slice(0, 100)}
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
      "JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. Its user-friendly design made the entire process a breeze.",
    testimonialLocation: "Dubai, UAE",
    testimonialName: "Raymond Galario",
  },
  {
    id: "2",
    testimonialimg: testimonialimg2,
    testimonialDecription:
      "JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. Its user-friendly design made the entire process a breeze.",
    testimonialLocation: "Dubai, UAE",
    testimonialName: "Raymond Galario",
  },
];

export default TestimonialsHome;
