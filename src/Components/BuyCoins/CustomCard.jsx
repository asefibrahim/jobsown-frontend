import React from "react";
import BalanceIcon from "../../assets/balanceIcon.png";
import { FaTimes } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { RiTimer2Line } from "react-icons/ri";
const CustomCard = () => {
  return (
    <div className="">
      <div className="p-8 rounded-xl border shadow-lg ">
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-2xl font-medium text-gray-700">CUSTOM</p>
            <p className="mt-4 text-gray-500">How many coins you need?</p>
          </div>
          <div>
            {" "}
            <a
              class=" block rounded border border-indigo-600 bg-indigo-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 mt-12">
          <div className="lg:col-span-2 border rounded-xl px-4  ">
            <div className="flex items-center p-4 gap-4">
              <img className="w-10 h-10" src={BalanceIcon} alt="" />
              <span className="text-4xl font-medium tracking-wide text-blue-700">
                1000
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center px-10 bg-gray-100 py-6 rounded-xl gap-6">
              <p className="text-xl font-medium text-gray-700">Rs. 700</p>
              <p className="text-xl line-through text-gray-700">Rs. 1000</p>
            </div>
            <div className="bg-[#B8FFD9]  flex items-center justify-center rounded-3xl">
              <p className="text-xl text-[#0A9D4E] py-1 text-font-medium px-4">
                Save Rs. 300
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-8 gap-20">
          <div className="flex items-center gap-4">
            <RiTimer2Line className="text-blue-600 text-xl" />
            <span className="">Coins valid for 30 days</span>
          </div>
          <div className="flex items-center gap-4">
            <IoPersonOutline className="text-blue-600 text-xl" />
            <span>Single user account </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
