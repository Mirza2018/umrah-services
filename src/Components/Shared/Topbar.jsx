/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BarsOutlined, BellFilled } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FiBell } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../redux/getBaseUrl";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useUserProfileQuery } from "../../redux/api/adminApi";
import { clearAuth } from "../../redux/slices/authSlice";

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
  const { data, isLoading, error, refetch } = useUserProfileQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(data?.data?.attributes?.[0]?.isLogIn);
  useEffect(() => {
    if (isLoading) {
      console.log("Loading data..."); // Debug loading state
      return;
    }

    if (error) {
      console.error("Error fetching data:", error); // Debug error state
      return;
    }

    const interval = setInterval(() => {
      if (data?.data?.attributes) {
        console.log(
          "Current isLogIn status:",
          data?.data?.attributes?.[0]?.isLogIn
        ); // Debug the isLogIn value
        refetch();

        if (data?.data?.attributes?.[0]?.isLogIn === false) {
          console.log("User is not logged in, dispatching logout..."); // Debug dispatch
          dispatch(clearAuth());
          navigate("/signin");
        }
      } else {
        console.log("Data or attributes are not available."); // Debug data availability
      }
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
      console.log("Interval cleared."); // Debug interval cleanup
    };
  }, [data, isLoading, error, dispatch, navigate]);

  const userInfo = useSelector((state) => state.auth?.userInfo);

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
        to={`/${userInfo?.role}/notifications`}
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
          to="settings/profile"
          className="flex items-center justify-center gap-2 bg-transparent text-base-color border-0 rounded-lg h-8 px-2 py-1  mr-5"
        >
          <div className="flex justify-end items-center  gap-2">
            <div className="flex justify-center flex-col items-end gap-2 leading-none">
              <h1 className="text-[#242424] truncate w-28 text-end">
                {" "}
                {userInfo?.fullName}
              </h1>
              <p className="text-[#8A8D8E] capitalize">{userInfo?.role}</p>
            </div>
            {/* {false ? ( */}
            {userInfo?.image ? (
              <Avatar
                className="rounded-full ring-red-500 ring"
                size={50}
                src={getImageUrl() + userInfo?.image}
              />
            ) : (
              <Avatar size={55} icon={<FaUser />} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Topbar;
