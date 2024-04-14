import React from "react";
import CoinsCard from "../../Components/BuyCoins/CoinsCard";
import CustomCard from "../../Components/BuyCoins/CustomCard";
import PricingPlans from "../../Components/BuyCoins/PricingPlans";

const BuyCoins = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl mb-20 font-medium text-center tracking-wide">
        Buy coins to close your hiring
      </h1>

      <CoinsCard />
      <CustomCard />
      <PricingPlans />
    </div>
  );
};

export default BuyCoins;
