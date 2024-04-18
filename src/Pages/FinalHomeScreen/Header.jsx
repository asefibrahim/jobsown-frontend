import React, { useContext, useState } from "react";
import jobLogo from "../../assets/JobsownLogo.png";
import menuIcon from "../../assets/menu.png";
import ltLogo from "../Home/Images/LT-LOGO.png";
import ProfileCard from "../../Components/ViewProfile/Header/ProfileCard";
import helpIcon from "../../assets/Help.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = ({menuSmall, setMenuSmall}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleMenuWidth = () => {
    setMenuSmall((prevMenuSmall) => !prevMenuSmall);
  }

  return (
    <nav className=" bg-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-16">
          <div className="pl-4">
            <img onClick={handleMenuWidth} src={menuIcon} alt="" />
          </div>
          <Link to={"/"}>
            <img src={jobLogo} alt="Logo 1" className="w-3/4" />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Help Icon */}

          <img src={helpIcon} alt="Help" className="h-6 w-auto mr-2" />

          <button
            className="text-gray-800 font-semibold mr-4"
            style={{ marginRight: "30px" }}
          >
            Help
          </button>
          <div className="relative">
            {!user ? (
              <Link to={"/login"}>
                <button
                  type="submit"
                  className="NavLoginBtn lg:font-bold font-semibold lg:text-lg text-sm tracking-wider"
                >
                  Login
                </button>
              </Link>
            ) : (
              <button onClick={toggleProfile}>
                <img
                  src={`${"https://i.ibb.co/28LLzYS/8eab480a-38ce-4a2a-8dd9-3e2e2f4a0230.jpg"}`}
                  alt="Profile"
                  className="h-12 w-12 rounded-full mr-4"
                />
              </button>
            )}

            {isProfileOpen && <ProfileCard user={user} logOut={logOut} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
