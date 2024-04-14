import React from "react";
import "./TopCompany.css";
import DeepMindlogo from "../Images/DeepMindlogo.png";
import Aimedis from "../Images/Aimedis.png";
import awslogo from "../Images/awslogo.png";
import celinelogo from "../Images/celinelogo.png";
import elsevire from "../Images/elsevire.png";
import nvidiaLogo from "../Images/nvidiaLogo.png";
import harvardUniversity from "../Images/harvardUniversity.png";
import OIP from "../Images/OIP.png";

function TopCompany() {
  return (
    <div className="lg:px-0 lg:ps-10 px-4 pb-10 lg:pb-20">
      <div className=" lg:px-0 px-6">
        <div className="lg:pb-20 pb-10">
          <h1 className="custom-heading-plate text-center pt-6 lg:leading-[60px] lg:text-[40px] text-xl">
            Top Company
          </h1>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 grid-cols-2  gap-8">
            <div className="">
              <img src={DeepMindlogo} className=" lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={Aimedis} className=" lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={awslogo} className="lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={celinelogo} className="lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={elsevire} className="lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={nvidiaLogo} className="lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={harvardUniversity} className="lg:w-3/4 w-full" alt="" />
            </div>
            <div className="">
              <img src={OIP} className="lg:w-3/4 w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCompany;
