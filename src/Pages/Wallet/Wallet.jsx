import React from "react";
import "./Wallet.css";
import Card from "./CardDetails/Card.jsx";
import AvailableBalance from "./AvailableBalance/Balance.jsx";
import PurchaseHistory from "./PurchaseHistory/Purchase.jsx";
import Plan from "./Plan/Plan.jsx";

const Wallet = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full p-2 text-4xl font-semibold custom-text-wallet">
        Wallet
      </div>
      <div className="flex w-full justify-between">

        <div className="lg:w-1/2 m-2 w-2/5">
          <Card></Card>
        </div>
        <div className="lg:w-1/2 m-4 w-2/5 flex items-center">
          <AvailableBalance></AvailableBalance>
        </div>

      </div>
      <div>
        <PurchaseHistory></PurchaseHistory>
      </div>
      <div>
        <Plan></Plan>
      </div>
      <div className="mb-40">
        <PurchaseHistory></PurchaseHistory>
      </div>
    </div>
  );
};

export default Wallet;
