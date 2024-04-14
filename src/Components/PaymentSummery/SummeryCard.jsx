import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImCross } from "react-icons/im";
const SummeryCard = () => {
  return (
    <div className="p-12 border shadow-lg rounded-xl mb-20 mt-4">
      <div className="flex items-center text-lg justify-between">
        <h1 className="text-gray-500  font-medium">Small ( 1000 coins)</h1>
        <p className="text-gray-700 font-medium">Rs. 1,000</p>
      </div>
      <h1 className="text-gray-500 mt-3 text-lg font-medium">
        Coins valid for 30 days
      </h1>
      <div className="flex items-center text-lg mt-8 justify-between">
        <h1 className="text-gray-500  font-medium">Discount on coins (60%)</h1>
        <p className="text-green-600 font-medium">Rs. 3,000</p>
      </div>
      <div className="border mt-6"></div>
      <div className="flex items-center text-lg mt-8 justify-between">
        <h1 className="text-gray-700  font-medium">Net Amount </h1>
        <p className="text-gray-600  font-medium">Rs. 7,000</p>
      </div>

      <div className="flex items-center text-lg mt-8 justify-between">
        <h1 className="text-gray-500  font-medium">GST (18%)</h1>
        <p className="text-gray-700 font-medium">Rs. 126</p>
      </div>
      <h1 className="text-gray-500 mt-3 underline text-lg font-medium">
        I have a GST
      </h1>

      <div className="border mt-6"></div>
      <div className="flex items-center mt-6 text-2xl justify-between">
        <h1 className="text-gray-700  font-medium">Total (Inc Tax)</h1>
        <p className="text-gray-700 font-medium">Rs.826</p>
      </div>
      <div className="bg-[#aaf5cd] mt-8  flex items-center justify-center rounded">
        <p className="text-xl text-[#0A9D4E] py-4 text-font-medium px-4">
          Yay! You’re savings Rs.300 on this purchase
        </p>
      </div>
      <div className="border mt-8"></div>
      <div className="flex items-center text-lg mt-8 justify-between">
        <h1 className="text-gray-700 text-xl  font-medium">
          Offers & Coupons{" "}
        </h1>
        <p className="text-blue-600 underline  font-medium">I have a GST</p>
      </div>
      <div className="p-10 mb-12 bg-gray-200 rounded mt-6">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <IoMdCheckmarkCircleOutline className="text-4xl text-green-600" />

            <p className="text-xl">
              <span className="text-3xl font-medium">60% OFF </span> Coupon
              applied!{" "}
            </p>
          </div>
          <ImCross className="text-gray-700 text-xl" />
        </div>
        <p className="text-lg font-medium text-gray-700 ms-12 mt-4">
          You saved additional <span className="text-green-600">Rs.300</span>
        </p>
      </div>

      <a
        class=" block rounded border border-green-600 bg-[#0A9D4E] px-12 py-4 text-center text-lg font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
        href="#"
      >
        Proceed to say Rs.826
      </a>
    </div>
  );
};

export default SummeryCard;
