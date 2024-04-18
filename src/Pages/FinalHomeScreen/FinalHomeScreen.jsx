import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NewJobButton from "./NewJobButton";
import DisplayComponent from "./DisplayComponent";

const FinalHomeScreen = () => {
  return (
    <>
        <div className="my-4 w-full ml-10">
          <div className="flex ms-6 mb-6 mt-12 items-center justify-between ">
            <SearchBar />

            <NewJobButton />
          </div>
          <div className="w-full relative"><DisplayComponent /></div>
        </div>
    </>
  );
};

export default FinalHomeScreen;
