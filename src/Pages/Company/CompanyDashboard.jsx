import { Avatar } from "antd";
import React, { useState } from "react";
import { fladImages } from "../../../public/images/Flad/FladImages";
import AddVehicle from "../../Components/Company/Dashboard/AddVehicle";
import AssinDriver from "../../Components/Company/Dashboard/AssinDriver";
import AddDriver from "../../Components/Company/Dashboard/AddDriver";
import { IoMdAdd } from "react-icons/io";
import AddPayment from "./AddPayment";
import { FaRegEdit } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { Link } from "react-router-dom";

const CompanyDashboard = () => {
  const [addOption, setAddOption] = useState("add");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("home_care_user"));
  return (
    <>
      <div className="flex justify-end me-4 my-4 gap-3">
        <div
          onClick={() => setIsPaymentModalOpen(true)}
          // className="flex justify-end me-4 my-4 "
        >
          <button className="text-sm font-medium  text-black bg-white border border-black px-6 py-3 rounded-lg whitespace-nowrap flex justify-center items-center gap-3">
            <LuWallet /> Add Payment Method
          </button>
        </div>
        <div
        // className="flex justify-end me-4 my-4 "
        >
          <Link to={`/${user?.role}/settings/profile`}>
            <button className="text-sm font-medium text-black bg-white border border-black px-6 py-3 rounded-lg whitespace-nowrap flex justify-center items-center gap-3">
              <FaRegEdit />
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <AddPayment
        isPaymentModalOpen={isPaymentModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
      />
      <div className="flex flex-row gap-6 items-center justify-center">
        <Avatar size={100} src={fladImages.profile} />
        <div>
          <h1 className="text-xl font-semibold">Carent</h1>
          <p className="text-[#535763]">+123 456 789</p>
        </div>
      </div>
      <div className="flex gap-5 justify-around py-5 ps-5 flex-wrap">
        <p
          onClick={() => setAddOption("add")}
          className={`text-lg font-medium rounded-lg px-16 py-3 border w-fit cursor-pointer  duration-300 delay-150 transition-all transform scale-100 hover:scale-105  ${
            addOption == "add" ? "bg-black text-white" : " border-[#0961F5] "
          }`}
        >
          ADD VEHICLE
        </p>
        <p
          onClick={() => setAddOption("assign")}
          className={`text-lg font-medium rounded-lg px-14 py-3 border w-fit  cursor-pointer duration-300 delay-150 transition-all transform scale-100 hover:scale-105 ${
            addOption == "assign" ? "bg-black text-white" : " border-[#0961F5] "
          }`}
        >
          ASSIGN DRIVER
        </p>
        <p
          onClick={() => setAddOption("track")}
          className={`text-lg font-medium rounded-lg px-[53px] py-3 border w-fit cursor-pointer    duration-300 delay-150 transition-all transform scale-100 hover:scale-105 ${
            addOption == "track" ? "bg-black text-white" : " border-[#0961F5] "
          }`}
        >
          VIEW TRACKING
        </p>
        <p
          onClick={() => setAddOption("driver")}
          className={`text-lg font-medium rounded-lg px-[72px] py-3 border w-fit cursor-pointer duration-300 delay-150 transition-all transform scale-100 hover:scale-105  ${
            addOption == "driver" ? "bg-black text-white" : " border-[#0961F5] "
          }`}
        >
          ADD DRIVER
        </p>
      </div>

      {addOption == "add" && <AddVehicle />}
      {addOption == "assign" && <AssinDriver />}
      {addOption == "driver" && <AddDriver />}
    </>
  );
};

export default CompanyDashboard;
