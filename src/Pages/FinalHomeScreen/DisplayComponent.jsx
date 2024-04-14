import React from "react";
import NewJobButton from "./NewJobButton";
import postJobIcon from "../../assets/postJobIcon.png";

const DisplayComponent = () => {
  return (
    <div
      className="lg:flex flex-col items-center justify-center absolute shadow-lg rounded-lg p-8 bg-gray-100 my-3 mx-5"
      style={{
        width: "990px",
        height: "500px",
        borderRadius: "20px",
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-800">
          Post Your First Job
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Welcome! Start by posting your first job here.
        </p>
      </div>
      <img src={postJobIcon} alt="Your Image" className="mb-8 max-w-full" />
      <NewJobButton />
    </div>
  );
};

export default DisplayComponent;
