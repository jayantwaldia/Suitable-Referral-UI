import React, { useContext, useState } from "react";
import mainIcon from "../../assets/mainIcon.png";
import searchIcon from "../../assets/search.png";
import { MainContext } from "../../contexts/MainContext";

function SearchComponent() {
  const { setName } = useContext(MainContext);
  const [nameInput, setNameInput] = useState("");
  return (
    <div className="w-full md:w-[40%] flex flex-col gap-10 p-5 mt-10">
      <div className="flex items-center gap-5 ">
        <p className="text-3xl text-white font-serif font-bold ">
          Referral Status
        </p>{" "}
        <img src={mainIcon} alt="icon" className="w-10"></img>
      </div>
      <div className="flex">
        <input
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          className="px-3 py-3 bg-white border shadow-sm w-full  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-l-md sm:text-sm focus:ring-1"
          placeholder="Search"
          required
          autoComplete="off"
        />
        <button
          onClick={() => setName(nameInput)}
          className="w-[20%] items-center border border-slate-300 bg-gray-100 hover:bg-gray-200 rounded-r-md"
        >
          <img src={searchIcon} alt="search" className="mx-auto"></img>
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
