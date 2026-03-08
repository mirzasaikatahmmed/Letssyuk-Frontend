import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#1D1F1F] rounded-md py-5 px-3">{children}</div>;
};

export default Wrapper;
