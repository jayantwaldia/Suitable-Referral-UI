import React from "react";

function TrackHeading() {
  return (
    <div className="flex items-center bg-slate-200 py-5">
      <div className="w-[20%]">
        <p className="text-center font-bold">Candidate Name</p>
      </div>
      <div className="w-[80%] flex justify-between px-5">
        <div>Referred</div>
        <div>Interviewed</div>
        <div>Hired</div>
        <div>Joined</div>
      </div>
      <div className="w-[20%]">
        <p className="text-center font-bold">Reward</p>
      </div>
    </div>
  );
}

export default TrackHeading;
