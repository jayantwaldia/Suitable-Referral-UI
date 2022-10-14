import React from "react";

function Mainview({ children }) {
  return (
    <div className="px-1 md:px-10 pt-5 h-full mx-auto max-w-10xl bg-green-500">
      {children}
    </div>
  );
}

export default Mainview;
