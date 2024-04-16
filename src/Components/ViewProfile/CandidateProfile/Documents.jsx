import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UploadModal from "./UploadModal";
const Documents = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };
  return (
    <div className="mb-6">
      <div className="bg-gray-100 rounded-lg py-6 px-8 mt-8">
        <h1 className="text-lg font-medium tracking-wide text-gray-800">
          Documents & assets
        </h1>
        <p className="text-gray-400 py-4 font-medium text-sm  ">
          Adding your documented and assets will increase your visibility with
          employers by 26%
        </p>

        <button
          className="flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded-lg text-blue-600 border-blue-500"
          onClick={openUploadModal}
        >
          <IoMdAdd className="text-lg" />
          <span className="font-medium ">Upload</span>
        </button>
        {isUploadModalOpen && <UploadModal onClose={closeUploadModal} />}
      </div>
    </div>
  );
};

export default Documents;
