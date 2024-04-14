import React from "react";
import { Link } from "react-router-dom";
const NewJobButton = () => {
  return (
    <Link to={"/job-details"}>
      <button className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Post a New Job +
      </button>
    </Link>
  );
};

export default NewJobButton;
