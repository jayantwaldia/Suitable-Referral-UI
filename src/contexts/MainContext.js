import { createContext, useState } from "react";

import candidatesData from "../db/candidatesData.js";
export const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [name, setName] = useState("");

  const displayStep = [
    { step: "reffered" },
    { step: "interviewed" },
    { step: "hired" },
    { step: "joined" },
  ];

  return (
    <MainContext.Provider
      value={{
        displayStep,
        candidatesData,
        name,
        setName,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
