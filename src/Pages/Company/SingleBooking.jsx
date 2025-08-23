import { Avatar } from "antd";
import React from "react";
import { fladImages } from "../../../public/images/Flad/FladImages";

const SingleBooking = () => {
  return (
    <section className="shadow-md rounded-lg w-72 px-2 py-4">
      <div className="flex ">
        <div className="flex items-center gap-4">
          <Avatar src={fladImages.profile2} size={82} />
          <h1 className="text-sm font-medium">Shihab Ahmed</h1>
        </div>
        <div className="text-sm font-medium">$20/Daily</div>
      </div>
      <p className="w-full h-1 my-2 border-t"></p>
      <div className=" px-5">
        <p className="text-xs font-normal text-[#4c4c4c]">
          Vehicles Model : BMW G05
        </p>
        <p className="text-xs font-normal text-[#4c4c4c]">
          Email : Santo@wer.com
        </p>

        <div className="flex gap-3 mt-4">
          <button className="text-sm font-medium border border-black px-6 py-3 rounded-lg">
            Decline
          </button>
          <button className="text-sm font-medium bg-black text-white border border-black px-6 py-3 rounded-lg">
            Accept
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleBooking;
