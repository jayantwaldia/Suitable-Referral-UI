import React, { useEffect, useRef, useState } from "react";

function Stepper({ displayStep, currentStep, candidate }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    //
    const newStep = [...steps];
    let count = 0;
    while (count < newStep.length) {
      // current step
      if (count === stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newStep;
  };
  useEffect(() => {
    //
    const stepState = displayStep.map((step, index) => {
      Object.assign(
        {},
        {
          main: step.main,
          subHead: step.sub,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      );
    });

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [displayStep, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-10 w-10 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-[#0ED746] text-white font-bold border border-[#0ED746]"
                : "border-4 border-gray-300"
            }`}
          >
            {step.completed ? (
              <span className="text-white">&#10003;</span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
      </div>
    );
  });

  return <div className="m-5 flex  items-center">{displaySteps}</div>;
}

export default Stepper;
