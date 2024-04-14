import React from "react";
import "./index.css";
import WebLogo from "../../assets/JobsOwnLogoWhite.png";
import SocialIconsAll from "../../Pages/Home/Images/SocialIconsAll.png";
import SocialIconWhatsapp from "../../Pages/Home/Images/SocialIconWhatsapp.png";

const FooterNew = () => {
  return (
    <div class="">
      <div class="flex flex-col lg:h-80 lg:flex-row text-white custom-bg-footer1">
        <div class="w-2/6 lg:ps-0 ps-8 pb-4 flex justify-center text-center">
          <div class="flex justify-center items-start mt-14 p-2">
            <img class='w-full lg:w-1/4' src={WebLogo} alt="" />
          </div>
        </div>
        <div class="w-full lg:w-2/6 flex lg:ps-0 ps-8">
          <div class="w-1/2 h-full flex flex-col lg:mt-14">
            <div class=" text-2xl text-white-800 p-2">Company</div>
            <div class="p-2">About Us</div>
            <div class="p-2">Get a Job</div>
            <div class="p-2">Contact Us</div>
          </div>
          <div class="w-1/2 h-full flex flex-col lg:mt-14">
            <div class=" text-2xl text-white-800 p-2">Hire</div>
            <div class="p-2">Start Hiring</div>
            <div class="p-2">Hire</div>
          </div>
        </div>
        <div class="w-full lg:w-2/6 flex lg:ps-0 ps-8 pb-6">
          <div class="w-1/2 h-full flex flex-col mt-6 lg:mt-14">
            <div class=" text-2xl text-white-800 p-2">Legal</div>
            <div class="p-2">Privacy Policy</div>
          </div>
          <div class="w-1/2 h-full flex flex-col mt-6 lg:mt-14">
            <div class=" text-2xl text-white-800 p-2">Contact Us</div>
            <div class="p-2">+91 9848810550</div>
            <div class='p-2'>Info@jobsown.com</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center h-[7vh] px-3 text-white custom-bg-footer2">
        <div class="flex items-center justify-center text-xs lg:text-xl h-full">
          All rights reserved © 2023 Info Edge (India) Ltd
        </div>
        <div class="w-1/5 flex lg:pt-5 md:block text-xs lg:text-xl items-center justify-center h-full" onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>
            Back on Top
        </div>
        <div class="flex justify-end ps-3 items-center">
          <div class="h-full flex justify-center items-center p-2">
            <img src={SocialIconsAll} alt="/" />
          </div>
          <div class="h-full flex justify-center  md:block hidden items-center p-2">
            <img src={SocialIconWhatsapp} alt="/" className="lg:w-8 lg:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
