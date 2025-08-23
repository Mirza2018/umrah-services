import React from "react";
import {  FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div
      className="bg-white min-h-[90vh]  rounded-xl p-10 flex flex-col gap-3"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <Link to={`profile`}>
        <div className="flex items-center justify-between me-20 border-2 border-[rgba(0, 0, 0, 0.18)] rounded-md  max-w-[1000px] p-3 cursor-pointer">
          <h1 className="text-2xl !hover:text-secondary-color">
            Personal Information
          </h1>
          <FaChevronRight />
        </div>
      </Link>
      <Link to={`change-password`}>
        <div className="flex items-center justify-between me-20 border-2 border-[rgba(0, 0, 0, 0.18)] rounded-md  max-w-[1000px] p-3 cursor-pointer">
          <h1 className="text-2xl !hover:text-secondary-color">
            Change Password
          </h1>
          <FaChevronRight />
        </div>
      </Link>

      <Link to={`safety`}>
        <div className="flex items-center justify-between me-20 border-2 border-[rgba(0, 0, 0, 0.18)] rounded-md  max-w-[1000px] p-3 cursor-pointer">
          <h1 className="text-2xl !hover:text-secondary-color">Safety</h1>
          <FaChevronRight />
        </div>
      </Link>
      <Link to={`terms-and-condition`}>
        <div className="flex items-center justify-between me-20 border-2 border-[rgba(0, 0, 0, 0.18)] rounded-md  max-w-[1000px] p-3 cursor-pointer">
          <h1 className="text-2xl !hover:text-secondary-color">
            Terms of Services
          </h1>
          <FaChevronRight />
        </div>
      </Link>
      <Link to={`faq`}>
        <div className="flex items-center justify-between me-20 border-2 border-[rgba(0, 0, 0, 0.18)] rounded-md  max-w-[1000px] p-3 cursor-pointer">
          <h1 className="text-2xl !hover:text-secondary-color">FAQ</h1>
          <FaChevronRight />
        </div>
      </Link>
    </div>
  );
};

export default SettingsPage;
