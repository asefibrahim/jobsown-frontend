import React from "react";
import "./Balance.css";
import BalanceIcon from "../../../assets/balanceIcon.png";

const Balance = () => {
  return (
    <div className="w-full custom-border-balance m-2 p-6">
      <div className="p-4 text-2xl">Available Balance</div>
      <div className="flex custom-border-bottom-balance p-2 items-center">
        <div className="p-2">
          <img src={BalanceIcon} alt="/" />
        </div>
        <div className="p-2 flex items-center justify-center text-5xl font-semibold custom-text-wallet">
          5000
        </div>
      </div>
      <div className="p-2">
        <div className="flex">
          <div className="p-2">
            <img className="w-4/5" src={BalanceIcon} alt="/" />
          </div>
          <div className="p-2 text-3xl flex items-center justify-center">
            Bonus
          </div>
          <div className="p-2 text-3xl flex items-center justify-center">
            5000
          </div>
        </div>
        <div className="flex">
          <div className="p-2">
            <img className="w-4/5" src={BalanceIcon} alt="/" />
          </div>
          <div className="p-2 text-3xl flex items-center justify-center">
            Purchase
          </div>
          <div className="p-2 text-3xl flex items-center justify-center">
            3900
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
