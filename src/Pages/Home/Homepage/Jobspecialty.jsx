import React from "react";
import "./Jobspecialty.css";
import BD from "../Images/growth.png";
import Design from "../Images/design-thinking.png";
import Development from "../Images/coding.png";
import MobileDev from "../Images/development.png";
import CustomerService from "../Images/customer-service.png";
import Operations from "../Images/operation.png";

function Jobspecialty() {
  return (
    <div className="w-full">
      <div className="JobspecialtyBox  lg:pt-12 lg:pb-12">
        <div className="JobspecialtyCol1">
          <div className="Col1Content1">
            Top Gulf Jobs <br />
            in Jobsown
          </div>
          <div className="Col1Content2">
            Explore Top Gulf Jobs <br /> Exclusively at Jobsown
          </div>
          <div className="Col1Content3">See all &#8594;</div>
        </div>
        <div className="JobspecialtyCol2">
          <div className="jobRow">
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={MobileDev} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Mobile Development</div>
            </div>
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={Development} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Development</div>
            </div>
          </div>
          <div className="jobRow">
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={Operations} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Operations</div>
            </div>
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={Design} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Design</div>
            </div>
          </div>
          <div className="jobRow">
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={CustomerService} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Customer Service</div>
            </div>
            <div className="JobspecialtyBox1">
              <div className="jobIconCon">
                <img src={BD} alt="/" className="jobIcon" />
              </div>
              <div className="jobType">Business Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobspecialty;
