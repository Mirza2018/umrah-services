import React from "react";
import { fladImages } from "../../../public/images/Flad/FladImages";
import { AllImages } from "../../../public/images/AllImages";

const CompanyTracking = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={AllImages.map} alt="" className="" />
      <button className="bg-black w-[85%] mt-10 text-white text-lg font-semibold rounded ">Close Tracking</button>
    </div>
  );
};

export default CompanyTracking;
