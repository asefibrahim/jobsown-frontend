import React from "react";
import BalanceIcon from "../../assets/balanceIcon.png";

const PricingPlans = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center text-gray-700 font-medium text-3xl my-12">
        Our Pricing Plan
      </h1>
      <div className="p-6 shadow-lg border rounded-xl">
        <div className="grid lg:grid-cols-4 justify-around">
          <h1 className="text-lg font-medium mt-1 flex  justify-center  items-center ">
            Classic Jobs
          </h1>
          <div className="flex  items-center justify-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
        </div>
        <div className="grid mt-3 lg:grid-cols-4 justify-around">
          <h1 className="text-lg font-medium mt-1 flex  justify-center  items-center ">
            Premium job
          </h1>
          <div className="flex  items-center justify-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
        </div>
        <div className="grid mt-3 lg:grid-cols-4 justify-around">
          <h1 className="text-lg font-medium mt-1 flex  justify-center  items-center ">
            Super premium job
          </h1>
          <div className="flex  items-center justify-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
        </div>
        <div className="grid mt-3 lg:grid-cols-4 justify-around">
          <h1 className="text-lg font-medium mt-1 flex  justify-center  items-center ">
            Database unlocks
          </h1>
          <div className="flex  items-center justify-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
          <div className="flex  justify-center  items-center gap-4">
            <img className="w-10 h-10" src={BalanceIcon} alt="" />
            <span className="text-xl font-medium tracking-wide text-blue-700">
              5000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
