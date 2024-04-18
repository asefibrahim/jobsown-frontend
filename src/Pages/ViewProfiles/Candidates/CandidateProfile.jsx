import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import React from "react";

const CandidateProfile = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <hr className="border mt-2 mb-12" />

      <div className="grid lg:grid-cols-3 gap-12">
        <LeftSide />

        <div className="lg:col-span-2">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
