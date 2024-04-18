import React from "react";
import explore from "../../../assets/Explore.png";
import view_profile from "../../../assets/view_profile.png";
import refer_And_Earn from "../../../assets/refer_And_Earn.png";
import signOut from "../../../assets/signOut.png";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = ({ user, logOut }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("click");
    logOut();
    navigate("/login");
  };

  return (
    <div>
      {user?.photoURL === "candidate" && (
        <div
          className="absolute right-0 mt-1 bg-white rounded-lg shadow-md p-4 z-10"
          style={{
            width: "246px",
            padding: "20px 16px",
            borderRadius: "12px",
            marginLeft: "-20px",
          }}
        >
          <div className="flex items-center mb-2 gap-1">
            <img
              src={`${"https://i.ibb.co/28LLzYS/8eab480a-38ce-4a2a-8dd9-3e2e2f4a0230.jpg"}`}
              alt="Profile"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <p className="text-base font-semibold mb-0">
                {user?.displayName}
              </p>
              <p className="text-gray-600">8319154475</p>
            </div>
          </div>

          <p className="flex text-gray-800 mb-4">
            <img src={explore} alt="Icon" className="h-4 w-4 mr-1" />
            Explore Plans: Upto
          </p>

          <hr className="border-t border-gray-300 my-4" />

          <div className="flex flex-col space-y-2">
            <Link to={"/view-profile"}>
              {" "}
              <button className="flex items-center text-black">
                <img src={view_profile} alt="Icon" className="h-4 w-4 mr-1" />
                View Profile
              </button>
            </Link>
            <Link to={"/candidateDashboard"}>
              {" "}
              <button className="flex items-center text-black">
                <img src={refer_And_Earn} alt="Icon" className="h-4 w-4 mr-1" />
                My Jobs
              </button>
            </Link>
            <button className="flex items-center text-black">
              <img src={refer_And_Earn} alt="Icon" className="h-4 w-4 mr-1" />
              Subscription
            </button>
            <Link to={"/blog-page"}>
              <button className="flex items-center text-black">
                <img src={refer_And_Earn} alt="Icon" className="h-4 w-4 mr-1" />
                Blogs
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center text-red-500"
            >
              <img src={signOut} alt="Icon" className="h-4 w-4 mr-1" />
              Sign Out
            </button>
          </div>
        </div>
      )}
      {user?.photoURL === "employee" && (
        <div
          className="absolute right-0 mt-1 bg-white rounded-lg shadow-md p-4 z-10"
          style={{
            width: "246px",
            padding: "20px 16px",
            borderRadius: "12px",
            marginLeft: "-20px",
          }}
        >
          <div className="flex items-center mb-2 gap-1">
            <img
              src={`${"https://i.ibb.co/28LLzYS/8eab480a-38ce-4a2a-8dd9-3e2e2f4a0230.jpg"}`}
              alt="Profile"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <p className="text-base font-semibold mb-0">
                {user?.displayName}
              </p>
            </div>
          </div>

          <hr className="border-t border-gray-300 my-4" />

          <div className="flex flex-col space-y-2">
            <Link to={"/employee-dashboard/view-employee-profile"}>
              {" "}
              <button className="flex items-center text-black">
                <img src={view_profile} alt="Icon" className="h-4 w-4 mr-1" />
                View Profile
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center text-red-500"
            >
              <img src={signOut} alt="Icon" className="h-4 w-4 mr-1" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
