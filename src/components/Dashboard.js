import SearchComponent from "./elements/SearchComponent";
import ReferralTrack from "./layout/ReferralTrack";

function Dashboard() {
  return (
    <div className="flex flex-col w-[100%] text-black mx-auto">
      <div className="text-left left-0">
        <SearchComponent />
      </div>
      <div className="w-full md:w-[95%] container horizontal mx-auto bg-white rounded-lg mt-20 mb-20">
        <ReferralTrack />
      </div>
    </div>
  );
}

export default Dashboard;
