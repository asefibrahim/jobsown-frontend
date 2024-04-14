import React from "react";
import SummeryCard from "../../Components/PaymentSummery/SummeryCard";

const PaymentSummery = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mt-20 mb-8 justify-between">
        <h1 className="text-3xl font-medium text-gray-700 ">Payment Summery</h1>
        <p className="text-lg font-medium text-green-600">Change Plan</p>
      </div>
      <SummeryCard />
    </div>
  );
};

export default PaymentSummery;
