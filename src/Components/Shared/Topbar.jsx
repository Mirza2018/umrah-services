/* eslint-disable react/prop-types */
import { BarsOutlined, BellFilled } from "@ant-design/icons";
import { Avatar, Badge, Dropdown } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl, getSocketUrl } from "../../redux/getBaseUrl";
import { useDispatch, useSelector } from "react-redux";
import {
  useAllNotificationQuery,
  useNotificationCountQuery,
  useNotificationReadMutation,
  useUserProfileQuery,
} from "../../redux/api/adminApi";
import { clearAuth } from "../../redux/slices/authSlice";
import { io } from "socket.io-client";
import { toast } from "sonner";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid"; // Add for unique toast IDs
import { FiBell } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Topbar = ({ collapsed, setCollapsed }) => {
  const { data, isLoading, error, refetch } = useUserProfileQuery(undefined, {
    pollingInterval: 2 * 60 * 1000,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: notifications } = useAllNotificationQuery({ limit: 4 });
  const { data: notificationCount } = useNotificationCountQuery();
  const [notificationRead] = useNotificationReadMutation();
  const [unreadCount, setUnreadCount] = useState(0);
  const socketRef = useRef(null);
  const toastId = useRef(null);

  // Sync unread count with API
  useEffect(() => {
    setUnreadCount(notificationCount?.data?.count || 0);
  }, [notificationCount?.data?.count]);

  // User profile check
  useEffect(() => {
    if (isLoading) return;
    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }
    if (data?.data?.attributes?.[0]?.isLogIn === false) {
      dispatch(clearAuth());
      navigate("/signin");
    }
  }, [data, isLoading, error, dispatch, navigate]);

  // WebSocket setup
  useEffect(() => {
    const allInfo = JSON.parse(localStorage.getItem("persist:umrah-dashboard"));
    const token = JSON.parse(allInfo?.auth)?.accessToken;
    const socketUrl = getSocketUrl();

    if (!token) {
      console.error("No auth token found. Socket connection may fail.");
      return;
    }

    const socket = io(socketUrl, {
      transports: ["websocket"],
      auth: { token },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected successfully");
      // setSocketStatus("connected");
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
      // setSocketStatus("error");
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
      // setSocketStatus("disconnected");
    });

    socket.on("admin notification", (msg) => {
      // Fixed event name
      console.log("Received admin_notification:", msg);
      setUnreadCount(msg?.data?.unreadCount || 0);
      if (!toastId.current) {
        toastId.current = uuidv4();
      }
      toast.success(msg?.message || "New notification received!", {
        id: toastId.current,
        duration: 2000,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [getSocketUrl]); // Include dependencies

  const userInfo = useSelector((state) => state.auth?.userInfo);

  const notificationMenu = (
    <div
      className="flex flex-col gap-4 w-full text-center bg-white p-4 rounded-lg"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
      onClick={() => setCollapsed(false)}
    >
      {notifications?.data?.attributes?.result?.map((notification) => (
        <div className="text-start" key={notification._id}>
          <div className="flex gap-2">
            <div className="p-2 rounded-md">
              <FiBell className="text-secondary-color w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-700">
                {notification.message.replace(/\s+/g, " ").trim()}
              </span>
              <p className="">
                {dayjs(notification?.createdAt).format("MMMM DD, YYYY")} |{" "}
                <span className="font-semibold">
                  {dayjs(notification?.createdAt).format("hh:mm A")}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <Link
        to={`/${userInfo?.role}/notifications`}
        onClick={() => {
          notificationRead();
          setUnreadCount(0);
        }}
        className="px-16 text-white mx-auto bg-secondary-color rounded-2xl h-8 py-1 font-semibold"
      >
        See All
      </Link>
    </div>
  );

  return (
    <div className="pt-4 mx-[-50px] flex justify-between items-center bg-[#ffffff]">
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
          <Badge count={unreadCount} showZero>
            <BellFilled
              shape="circle"
              size="large"
              className="text-secondary-color font-bold text-xl rounded-full bg-[#B4B8BD] w-11 aspect-square p-1 flex justify-center items-center"
            />
          </Badge>
        </Dropdown>
        <Link
          to="settings/profile"
          className="flex items-center justify-center gap-2 bg-transparent text-base-color border-0 rounded-lg h-8 px-2 py-1 mr-5"
        >
          <div className="flex justify-end items-center gap-2">
            <div className="flex justify-center flex-col items-end gap-2 leading-none">
              <h1 className="text-[#242424] truncate w-28 text-end">
                {userInfo?.fullName}
              </h1>
              <p className="text-[#8A8D8E] capitalize">{userInfo?.role}</p>
            </div>
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
