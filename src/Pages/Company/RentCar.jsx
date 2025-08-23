import React, { useState } from "react";
import SingleRent from "./SingleRent";
import { IoMdAdd } from "react-icons/io";
import AddRent from "./AddRent";

const RentCar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Rant Car</p>
        </div>
      </div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex justify-end me-4 my-4 "
      >
        <button className="text-sm font-medium bg-black text-white border border-black px-6 py-3 rounded-lg whitespace-nowrap flex justify-center items-center gap-3">
          <IoMdAdd /> Add Rant Car
        </button>
      </div>
      <AddRent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="px-5 flex gap-5 flex-wrap">
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
        <SingleRent />
      </div>
    </div>
  );
};

export default RentCar;
