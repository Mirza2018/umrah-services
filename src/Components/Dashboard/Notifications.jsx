/* eslint-disable no-unused-vars */
import React from "react";
import { FiBell } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const notifications = [
  { id: 1, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 2, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 3, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 4, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 5, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 6, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 7, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 8, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 9, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 10, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 11, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 12, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 13, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 14, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 15, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 16, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 17, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 18, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 19, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
  { id: 20, message: "New Driver Applications Pending Approval.", time: "Fri, 12:30pm" },
];

const Notifications = () => {
  return (
    <div
      className=" bg-slate-50  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex items-center  gap-1 py-3 px-5 mb-3 rounded-tl-xl rounded-tr-xl">
        <MdArrowBackIos
          className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
          onClick={() => window.history.back()}
        />

        <h1 className="text-3xl font-bold ">All Notifications</h1>
      </div>
      <div className="px-4 sm:px-6 md:px-8 ">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center space-x-3 p-2 border-b border-gray-300 last:border-none"
          >
            {/* Icon */}
            <div className=" p-2 rounded-md">
              <FiBell className="text-secondary-color w-6 h-6" />
            </div>

            {/* Notification text */}
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-700">
                {notification.message}
              </span>
              <span className="text-sm ">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notifications;
