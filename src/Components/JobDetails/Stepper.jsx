import React from 'react';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div>
    <div className="stepper-container">
      <div className="flex flex-col items-center">
        <div className="flex justify-between bg-gray-100 py-4 px-6 rounded-lg mb-8">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${currentStep === index + 1 ? 'font-bold text-blue-500' : 'text-gray-400'}`}>
              <label className={`cursor-pointer relative w-6 h-6 flex items-center justify-center rounded-full border-2 ${currentStep === index + 1 ? 'bg-white border-blue-500' : 'bg-blue-500 border-white'}`}>
                <input type="radio" className="hidden" name="step" value={index + 1} />
                {currentStep === index + 1 && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
              </label>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-16 bg-${currentStep > index + 1 ? 'blue' : 'gray'}-400`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Stepper;
