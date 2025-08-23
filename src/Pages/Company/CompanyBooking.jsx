import { Avatar } from "antd";
import React from "react";
import { fladImages } from "../../../public/images/Flad/FladImages";
import SingleBooking from "./SingleBooking";

const CompanyBooking = () => {
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Booking Request</p>
        </div>
      </div>

      <div className="px-5 flex gap-5 flex-wrap">
        <SingleBooking />
        <SingleBooking />
        <SingleBooking />
        <SingleBooking />
        <SingleBooking />
        <SingleBooking />
        <SingleBooking />
      </div>
    </div>
  );
};

export default CompanyBooking;
