import React, { useContext } from "react";
import Sidebar from "../../../FinalHomeScreen/SideBar";
import { AuthContext } from "../../../../Provider/AuthProvider";

const ProfileMenu = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-2 w-full lg:flex">
        <div className=" hidden lg:w-1/5 p-4 lg:block">
          <Sidebar />
        </div>
        <div className="lg:w-4/5 p-4 mx-8">
          <div className="text-3xl font-medium  mb-6">Profile</div>
          <div className="text-xl  font-medium mb-4">Basic Details</div>

          <div className="lg:flex items-center gap-4 ">
            <div className="mb-4 mx-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user?.displayName}
                className=" lg:w-96 p-2 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-4 mx-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email*
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={user?.email}
                className="lg:w-96 p-2 border border-gray-300 rounded "
                required
              />
            </div>
          </div>
          <div className="mb-4 mx-4">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="lg:w-96 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="text-xl font-medium  mb-4">GST Details</div>

          <div className=" items-center gap-8">
            <div className="mb-4 mx-4">
              <input
                type="text"
                id="gst"
                name="gst"
                placeholder="GST Number"
                className="lg:w-96 p-3 border border-gray-300 rounded"
                required
              />
              <button className="border-2 border-blue-800 text-blue-800  font-bold  lg:w-1/6  rounded px-4 py-2 mt-2 mb-2 lg:ml-8">
                Verify
              </button>
            </div>
            <div className=" mb-4 mx-4 ">
              <input
                type="text"
                id="pan"
                name="pan"
                placeholder="PAN Card Number"
                className="lg:w-96 p-3 border border-gray-300 rounded"
                required
              />
              <button className="border-2 border-blue-800 text-blue-800  font-bold  lg:w-1/6  rounded px-4 py-2 mt-2 mb-2 lg:ml-8">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
