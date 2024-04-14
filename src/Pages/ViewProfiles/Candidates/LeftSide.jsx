import React, { useContext, useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import EditProfileModal from "../../../Components/ViewProfile/CandidateProfile/EditProfileModal"; // Import the EditProfileModal component
import { AuthContext } from "../../../Provider/AuthProvider";

const LeftSide = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [userData, setUserData] = useState({
    name: "Kanishk Singh",
    jobTitle: "Product Designer at Nexicorn",
    location: "Ravindra Bhawan, IIT Roorkee",
    profileImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUpdateProfile = (updatedData) => {
    setUserData(updatedData);
    closeEditModal();
  };

  return (
    <div className="lg:px-0 px-6">
      <div className="bg-gray-100 mb-20 pt-8 px-8 pb-8 rounded-lg">
        <button
          onClick={openEditModal}
          className="focus:outline-none text-xl text-blue-700"
        >
          Edit
        </button>
        <div className=" flex items-center justify-center">
          <img
            className="h-16 w-16  rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="flex pt-6 pb-4 text-center justify-between items-center w-1/2 mx-auto">
          <h2 className="text-xl text-gray-700 tracking-wide font-medium">
            {user?.displayName}
          </h2>

          {/* <IoShareSocialSharp className="text-xl text-blue-700" /> */}
        </div>
        <hr className="py-3 " />
        <div>
          <div className="flex items-center justify-center gap-6">
            <FaLock className="text-xl" />
            <span className="text-gray-400 text-sm font-medium">
              {userData.jobTitle}
            </span>
          </div>
          <div className="flex pt-3 items-center justify-center gap-6">
            <IoLocationOutline className="text-2xl" />
            <span className="text-gray-400 text-sm font-medium">
              {" "}
              {userData.location}
            </span>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditProfileModal
          userData={userData}
          onUpdateProfile={handleUpdateProfile}
          onClose={closeEditModal}
        />
      )}

      <div className="text-center">
        <a href="https://pdfr-esume-builder-seven.vercel.app/">
          {" "}
          <button className="NavLoginBtn  lg:font-bold font-semibold lg:text-lg text-sm tracking-wider">
            Create resume with Jobsown
          </button>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;
