import React from "react";
import "./HomeContactUs.css";
import fivestar from "../Images/fivestar.svg";

function HomeContactUs() {
  return (
    <div className="lg:px-0 px-8 pt-8 pb-10 lg:pb-20 lg:pt-20">
      <div className="  lg:pt-12 grid lg:grid-cols-2  gap-8 ">
        <div className="HomeContactUsForm p-7 w-1/2   rounded-2xl lg:pb-16">
          <h1 className="lg:text-4xl text-2xl font-medium text-center">
            Get Verified Job <br /> Updates of{" "}
            <span className="text-blue-600">JobsOwn</span>{" "}
          </h1>
          <div className="lg:px-12  pt-6">
            <div class="mt-4">
              <label
                class="block mb-2 text-lg font-medium text-slate-600 b:text-slate-200"
                for="LoggingEmailAddress"
              >
                Email
              </label>
              <input
                id="LoggingEmailAddress"
                class="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded  focus:border-blue-400 focus:ring-opacity-40   bg-transparent  b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>
            <div class="">
              <label
                class="block mb-2  pt-2 text-lg font-medium text-slate-600 b:text-slate-200"
                for="LoggingEmailAddress"
              >
                Password
              </label>
              <input
                id="LoggingEmailAddress"
                class="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded  focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring bg-transparent focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>
            <div className="pt-6">
              <button className="bg-blue-600 w-full rounded  focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 font-medium  text-center py-[10px] text-white ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className=" md:block hidden">
          <div className="HomeContactUsRow1 ">
            <div className="LineHeader">
              <img className="mr-5" src={fivestar} alt="" />
              <h3 className="contactUsHeading">Personalized Predictions</h3>
              <br />
            </div>
            <p className="contactUsInfo">
              Utilizing advanced machine learning algorithms,HAiLO tailors its
              drug interaction analyses to individual patient profiles,helping
              you zero in one the most effective and safest treatment options
            </p>
          </div>
          <div className="HomeContactUsRow1">
            <div className="LineHeader">
              <img className="mr-5" src={fivestar} alt="" />
              <h3 className="contactUsHeading">Comprehensive Database</h3>
              <br />
            </div>
            <p className="contactUsInfo">
              With an evergrowing database that covers thousands of
              drugs,nutrients, and herbal interactions, HAiLO provides an
              allencompassing look at potential synergies and conflicts to
              inform your decisions
            </p>
          </div>
          <div className="HomeContactUsRow1">
            <div className="LineHeader">
              <img className="mr-5" src={fivestar} alt="" />
              <h3 className="contactUsHeading">AlDriven Insights</h3>
              <br />
            </div>
            <p className="contactUsInfo">
              HAiLO leverages state of the art artificial intelligence
              algorithms to analyze complex chemical structures and predict drug
              interactions.This enables faster, more accurate research,reducing
              the time and costs traditionally associated with drug discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactUs;
