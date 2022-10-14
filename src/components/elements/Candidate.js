import React, { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import profile from "../../assets/profile.png";
import congrats from "../../assets/congrats.png";
import Stepper from "../stepper/Stepper";

function Candidate() {
  const { displayStep, candidatesData, name } = useContext(MainContext);

  function formatName(candidate) {
    let name = candidate.firstName + candidate.lastName;
    return name.toLowerCase();
  }

  const filteredData = candidatesData.filter((candidate) =>
    formatName(candidate).includes(name.toLowerCase())
  );

  return (
    <>
      {filteredData.length === 0 ? (
        <div className="text-4xl mx-auto text-center p-10">No Data Found</div>
      ) : (
        filteredData.map((candidate) => (
          <div
            key={candidate.id}
            className={`flex  items-center p-4 ${
              candidate.id % 2 === 0 ? "bg-slate-100" : "bg-white"
            }`}
          >
            <div className="w-[20%] flex flex-col md:flex-row items-center gap-2 justify-start">
              <img src={profile} alt="profile" className="w-10 h-10"></img>
              <p className="text-left text-md">
                <span className="font-bold">
                  {candidate.firstName + " " + candidate.lastName}
                </span>

                <br></br>
                <span className="text-sm">{candidate.position}</span>
              </p>
            </div>
            <div className="w-[80%]">
              <Stepper
                displayStep={displayStep}
                currentStep={candidate.status}
                candidate={candidate}
              />
            </div>

            <div className="w-[20%] flex items-center justify-center gap-2">
              <p className="text-center">${candidate.reward} </p>
              {candidate.status === 4 && (
                <img src={congrats} alt="congrats" className="w-5 h-5"></img>
              )}
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Candidate;
