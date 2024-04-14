import React from 'react'
import StepFourFormContent from './StepFourFormContent'

const StepFourForm = ({prevStep,nextStep}) => {
  return (
    <div>
        <div className="my-4"><StepFourFormContent heading = "Job Details"/></div>
        <div className="my-4"><StepFourFormContent heading = "Candidates Requirements"/></div>
        <div className="my-4"><StepFourFormContent heading = "Interview Information"/></div>


        <button type="button" onClick={prevStep} className="text-black border border-black hover:bg-gray-200 py-1 px-20 rounded mx-2">
              Back
            </button>
            <button type="button" onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2">
              Continue
            </button>
    </div>
  )
}

export default StepFourForm