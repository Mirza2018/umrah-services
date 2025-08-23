/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BarsOutlined, BellFilled } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    message: "A Driver requested for withdrawal.",
    time: "Fri, 12:30pm",
  },
  {
    id: 2,
    message: "A Driver requested for withdrawal. ",
    time: "Fri, 12:30pm",
  },
  {
    id: 3,
    message: "A Driver requested for withdrawal. ",
    time: "Fri, 12:30pm",
  },
  {
    id: 4,
    message: "A driver added .",
    time: "Fri, 12:30pm",
  },
  {
    id: 5,
    message: "A driver added .",
    time: "Fri, 12:30pm",
  },
];

const Topbar = ({ collapsed, setCollapsed }) => {
  const user = JSON.parse(localStorage.getItem("home_care_user"));
  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );

  const handleMenuClick = () => {
    setNotificationCount(0); // Reset notification count when the menu is clicked
    setCollapsed(false);
  };

  const notificationMenu = (
    <div
      className="flex flex-col gap-4 w-full text-center bg-white p-4 rounded-lg"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
      onClick={handleMenuClick}
    >
      {notifications.map((notification) => (
        <div className="test-start" key={notification.id}>
          <div className="flex gap-2">
            <div className=" p-2 rounded-md">
              <FiBell className="text-secondary-color w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <p>{notification.message}</p>
              <p className="">{notification.time}</p>
            </div>
          </div>
        </div>
      ))}
      <Link
        to={`/${user?.role}/notifications`}
        className="px-16 !text-white mx-auto bg-secondary-color  rounded-2xl h-8 py-1 font-semibold"
      >
        See All
      </Link>
    </div>
  );
  return (
    <div className="pt-4 mx-[-50px] flex justify-between items-center bg-[#ffffff] ">
      <div className="flex items-center gap-2 text-[#000] ml-4">
        <BarsOutlined
          onClick={() => setCollapsed(!collapsed)}
          className="text-3xl"
        />
      </div>
      <div className="flex items-center justify-center mr-5 gap-2">
        <Dropdown
          overlay={notificationMenu}
          trigger={["hover"]}
          placement="bottomRight"
          className="cursor-pointer"
        >
          <BellFilled
            shape="circle"
            size="large"
            className="text-secondary-color font-bold text-xl rounded-full   bg-[#B4B8BD] w-11 aspect-square p-1 flex justify-center items-center"
          />
        </Dropdown>
        <Link
          to="profile"
          className="flex items-center justify-center gap-2 bg-transparent text-base-color border-0 rounded-lg h-8 px-2 py-1  mr-5"
        >
          <div className="flex justify-end items-center  gap-2">
            <div className="flex justify-center flex-col items-end gap-2 leading-none">  
              <h1 className="text-[#242424]">James Mitchell</h1>
              <p className="text-[#8A8D8E]">Admin</p>
            </div>
            <CiUser className="text-secondary-color font-bold text-xl rounded-full border border-secondary-color w-10 h-10 p-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Topbar;
