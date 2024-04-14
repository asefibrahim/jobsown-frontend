import React from "react";
import BalanceIcon from "../../assets/balanceIcon.png";
import { IoIosTimer } from "react-icons/io";
import { IoPersonOutline, IoShieldOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa6";
const CoinsCard = () => {
  return (
    <div>
      <div class=" py-8  sm:py-12  lg:py-16">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div class=" divide-gray-200 h-[520px] rounded-2xl border border-gray-200 shadow-lg">
            <div class="p-6 sm:px-8">
              <h2 class="text-lg font-medium text-gray-900"> SMALL</h2>

              <div className="flex pt-6 items-center gap-4">
                <img className="w-10 h-10" src={BalanceIcon} alt="" />
                <span className="text-4xl font-medium tracking-wide text-blue-700">
                  1000
                </span>
              </div>

              <div className="flex items-center py-4 gap-6">
                <p className="text-3xl font-medium text-gray-700">Rs. 700</p>
                <p className="text-3xl line-through text-gray-700">Rs. 1000</p>
              </div>

                <div className="bg-[#B8FFD9] w-1/2 flex items-center justify-center rounded-3xl">
                    <p className="text-xl text-[#0A9D4E] py-1 text-font-medium px-4">
                    Save Rs. 300
                    </p>
                </div>
            </div>
            <div className="border w-[85%] mt-4 mx-auto"></div>
            <div class="p-6 sm:px-8">
              <ul class="mt-2 space-y-2 sm:mt-4">
                <li class="flex items-center justify-start gap-3">
                  <IoIosTimer className="text-3xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Coins valid for 30 days{" "}
                  </span>
                </li>
                <li class="flex items-center justify-start gap-3">
                  <IoPersonOutline className="text-3xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Single user account{" "}
                  </span>
                </li>

                <li className="pt-12">
                  <a
                    class=" block rounded border border-indigo-600 bg-indigo-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div class=" divide-gray-200  h-[520px] rounded-2xl border border-gray-200 shadow-lg">
              <div className="flex items-center  rounded-t-2xl border justify-center py-2 font-medium bg-black text-white">
                <p>Recommended</p>
              </div>
              <div class="p-6 sm:px-8">
                <h2 class="text-lg font-medium text-gray-900"> GROWTH</h2>

                <div className="flex pt-6 items-center gap-4">
                  <img className="w-10 h-10" src={BalanceIcon} alt="" />
                  <span className="text-4xl font-medium tracking-wide text-blue-700">
                    2000
                  </span>
                </div>

                <div className="flex items-center py-4 gap-6">
                  <p className="text-3xl font-medium text-gray-700">Rs. 1700</p>
                  <p className="text-3xl line-through text-gray-700">
                    Rs. 2000
                  </p>
                </div>

                <div className="bg-[#B8FFD9] w-1/2 flex items-center justify-center rounded-3xl">
                  <p className="text-xl text-[#0A9D4E] py-1 text-font-medium px-4">
                    Save Rs. 300
                  </p>
                </div>
              </div>
              <div className="border w-[85%] mt-4 mx-auto"></div>
              <div class="p-6 sm:px-8">
                <ul class="mt-2 space-y-2 sm:mt-4">
                  <li class="flex items-center justify-start gap-3">
                    <IoIosTimer className="text-3xl text-blue-600" />
                    <span class="text-gray-700 font-medium text-lg">
                      {" "}
                      Coins valid for 30 days{" "}
                    </span>
                  </li>
                  <li class="flex items-center justify-start gap-3">
                    <IoPersonOutline className="text-3xl text-blue-600" />
                    <span class="text-gray-700 font-medium text-lg">
                      {" "}
                      Single user account{" "}
                    </span>
                  </li>

                  <li className="pt-2">
                    <a
                      class=" block rounded border border-indigo-600 bg-indigo-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" divide-gray-200 h-[520px] rounded-2xl border border-gray-200 shadow-lg">
            <div class="p-6 sm:px-8">
              <h2 class="text-lg font-medium text-gray-900"> ENTERPRISES</h2>

              <div>
                <p className="text-2xl font-medium py-4 text-gray-700">
                  Discounts for larger <br /> needs!
                </p>
                <p className="text-lg font-medium text-gray-500">
                  Get best prices for job post & database unlocks
                </p>
              </div>
            </div>

            <div class="p-6 sm:px-8">
              <ul class="mt-2 space-y-4 sm:mt-4">
                <li class="flex items-center justify-start gap-3">
                  <IoIosTimer className="text-2xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Coins valid for 30 days{" "}
                  </span>
                </li>
                <li class="flex items-center justify-start gap-4">
                  <BsFillPersonLinesFill className="text-2xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Single user account{" "}
                  </span>
                </li>
                <li class="flex items-center justify-start gap-4">
                  <FaLock className="text-2xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Single user account{" "}
                  </span>
                </li>
                <li class="flex items-center justify-start gap-4">
                  <IoShieldOutline className="text-2xl text-blue-600" />
                  <span class="text-gray-700 font-medium text-lg">
                    {" "}
                    Single user account{" "}
                  </span>
                </li>

                <li className="">
                  <a
                    class=" block rounded border border-indigo-600 bg-transparent px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:bg-transparent hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsCard;
