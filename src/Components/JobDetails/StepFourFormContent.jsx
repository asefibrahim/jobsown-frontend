import React from 'react'
import JobDetails from "../../assets/JobDetails.png"
import Edit from "../../assets/Edit.png"
const StepFourFormContent = ({heading}) => {
  return (
    <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-2">
          <img src={JobDetails} alt="Your Image" className="w-10 h-10" />
        </div>

        <div className="text-xl font-semibold">{heading}</div>

        <div className="ml-auto">
          <img src={Edit} alt="Your Image" className="w-25 h-6" />
        </div>
      </div>



      <div className="flex">
        <div>
          <div className="my-2 text-gray-500"> Company name </div>
          <div className="my-2 text-gray-500"> Job title </div>
          <div className="my-2 text-gray-500"> Job Role </div>
          <div className="my-2 text-gray-500"> Job type </div>
          <div className="my-2 text-gray-500"> Work type </div>
          <div className="my-2 text-gray-500"> Job city </div>
          <div className="my-2 text-gray-500"> Pay type </div>
          <div className="my-2 text-gray-500"> Additional perks </div>
          <div className="my-2 text-gray-500"> Joining fees </div>
        </div>


        <div className="mx-10">
          <div className="my-2"> Larsen & Tarbo </div>
          <div className="my-2"> Designer </div>
          <div className="my-2"> Machine design </div>
          <div className="my-2"> Full time </div>
          <div className="my-2"> Work from home </div>
          <div className="my-2"> Anywhere in India </div>
          <div className="my-2"> Rs 50,000 - Rs 75,000 per month (Fixed only) </div>
          <div className="my-2"> Flexible working hours </div>
          <div className="my-2"> No </div>
        </div>
      </div>
    </div>
  )
}

export default StepFourFormContent