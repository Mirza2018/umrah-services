import React from "react";
import { fladImages } from "../../../public/images/Flad/FladImages";
import { FaRegTrashAlt } from "react-icons/fa";

const SingleRent = () => {
  return (
    <section className="w-44 border border-[#242424] h-52 p-3 rounded-lg">
      <div className="flex  justify-between">
        <div className="flex flex-col  gap-[6.4px]">
          <div className="flex items-center gap-[6.4px]">
            <img src={fladImages.rentLogo} alt="" />
            <p className="text-xs font-medium">CARENT</p>
          </div>
          <p>BMW G05 </p>
        </div>
        <div className="cursor-pointer">
          <FaRegTrashAlt className="text-[#535763]" />
        </div>
      </div>
      <img src={fladImages.car} className="my-6" alt="" />
      <div className="flex  justify-between">
        <div className="flex flex-col  gap-[6.4px]">
          <div className="flex items-center gap-[6.4px]">
            <p className="text-xs font-medium">Daily</p>
          </div>
          <p>$ 20</p>
        </div>

        <div>
          <button className="!bg-[#1E4ABB]  px-4 text-white font-medium rounded-md !py-1">
            Edit
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default SingleRent;
