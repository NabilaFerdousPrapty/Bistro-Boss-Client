import React from "react";

const SectionTitle = ({ heading, subHeading,text }) => {
  return (
    <div>
      <div className="max-w-xl mx-auto">
        <h2 className="text-sm font-extrabold text-center text-[#D99904] my-3">
          ---{subHeading}---
        </h2>
        <h2 className="text-center border-y-4 py-2 border-[#E8E8E8] ">
          <span className="text-xl font-medium">{heading} </span>
         
        </h2>
        <p className="text-center">
          <span className="text-3xl font-extrabold text-amber-400">{text}</span>
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
