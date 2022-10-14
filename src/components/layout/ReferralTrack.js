import React from "react";
import Candidate from "../elements/Candidate";
import TrackHeading from "../elements/TrackHeading";

function ReferralTrack() {
  return (
    <div className="w-full border-4 border-gray-200 rounded-lg ">
      <div className="">
        <TrackHeading />
      </div>

      <Candidate />
    </div>
  );
}

export default ReferralTrack;
