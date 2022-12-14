import React from "react";

function TrackHeading() {
  return (
    <div className="flex items-center bg-slate-200 py-5 overflow-hidden">
      <div className="w-[20%]">
        <p className="text-center font-bold text-sm md:text-md">Candidate</p>
      </div>
      <div className="w-[80%] flex justify-between px-5 text-sm md:text-md">
        <div>Referred</div>
        <div>Interviewed</div>
        <div>Hired</div>
        <div>Joined</div>
      </div>
      <div className="w-[20%]">
        <p className="text-center font-bold text-sm md:text-md">Reward</p>
      </div>
    </div>
  );
}

export default TrackHeading;
