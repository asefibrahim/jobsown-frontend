import React, { useContext, useState } from "react";
import WebLogo from "../../assets/JobsownLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
import ProfileDropdown from "../../Components/ViewProfile/Header/ProfileCard";
function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="tracking-wide max-w-[1300px] mx-auto py-4">
      <div className="NavBox">
        <Link to={"/view-profile"}>
          <div className="NavLogo">
            <img
              src={WebLogo}
              alt="WebLogo"
              className="NavLogoImg lg:w-3/4 w-24  "
            />
          </div>
        </Link>
        <div className="NavLogin flex items-center hover:underline cursor-pointer gap-4 lg:gap-20">
          <div className="flex items-center lg:gap-3 gap-1">
            <IoCallOutline className="text-black lg:text-2xl text-lg" />
            <a
              href="tel:"
              className="text-black lg:text-lg text-sm font-medium "
            >
              +91 97739 35021
            </a>
          </div>
          {user ? (
            <div className="relative">
              <button onClick={toggleProfile}>
                <img
                  src={`${"https://i.ibb.co/28LLzYS/8eab480a-38ce-4a2a-8dd9-3e2e2f4a0230.jpg"}`}
                  alt="Profile"
                  className="h-12 w-12 rounded-full mr-4"
                />
              </button>
              {isProfileOpen && <ProfileDropdown user={user} logOut={logOut} />}
            </div>
          ) : (
            <Link to={"/login"}>
              <button
                type="submit"
                className="NavLoginBtn lg:font-bold font-semibold lg:text-lg text-sm tracking-wider"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
