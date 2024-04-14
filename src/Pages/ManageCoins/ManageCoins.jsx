import React from "react";
import Header from "../FinalHomeScreen/Header";
import Sidebar from "../FinalHomeScreen/SideBar";
import BalanceIcon from "../../assets/balanceIcon.png";
import Table from "../../Components/Wallet/Table";
const ManageCoins = () => {
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
    <div>
      <Header />

      <div className="flex  gap-8 ">
        <Sidebar />
        <div className="mt-12   mr-8 mx-auto w-[90%]">
          <h1 className="text-3xl font-medium text-gray-800 mb-5">
            Manage coins
          </h1>
          <div className=" flex items-center justify-between   border rounded-xl  h-40   px-4  ">
            <div>
              <h1 className="text-2xl font-medium  ms-4 mt-8">Coin Balance</h1>
              <div className="flex items-center p-4 gap-4">
                <img className="w-10 h-10" src={BalanceIcon} alt="" />
                <span className="text-4xl font-medium tracking-wide text-blue-700">
                  1000
                </span>
              </div>
            </div>
            <div>
              <a
                class=" block rounded border border-indigo-600 bg-indigo-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className="flex my-12 items-center justify-between">
            <h1 className="text-xl font-medium">All transactions</h1>
            <div className="flex items-center gap-6">
              <p className="px-4 py-2 bg-[#c7c4c4] rounded-2xl ">All</p>
              <p className="px-4 py-2 bg-[#c7c4c4] rounded-2xl ">
                Failed transactions
              </p>
            </div>
          </div>
          <Table data={purchases}/>
        </div>
      </div>
    </div>
  );
};

export default ManageCoins;
