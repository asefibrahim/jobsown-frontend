import React from "react";
import "./Purchase.css";
import PurchaseReportIcon from "../../../assets/PurchaseReportIcon.png";
import Table from "../../../Components/Wallet/Table";

const Purchase = () => {
  const purchases = [
    {
      sno: "1",
      date: "12-01-2024",
      type: "Bonus Coins",
      quantity: "-",
      status: "Credit",
      amount: "5000",
      currentBalance: "9000",
    },
    {
      sno: "2",
      date: "12-01-2024",
      type: "Bonus Coins",
      quantity: "-",
      status: "Credit",
      amount: "5000",
      currentBalance: "9000",
    },
    {
      sno: "3",
      date: "12-01-2024",
      type: "Bonus Coins",
      quantity: "-",
      status: "Credit",
      amount: "5000",
      currentBalance: "9000",
    },
  ];
  return (
    <div class="my-4 p-2">
      <div className="flex my-2 items-center gap-1 mb-6">
        <div className="py-2">
          <img src={PurchaseReportIcon} alt="/" />
        </div>
        <div className="p-2 text-2xl">Purchase History</div>
      </div>
      <Table data={purchases} />
    </div>
  );
};

export default Purchase;
