import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import Topbar from "../Shared/Topbar";
import { AllIcons, AllImages } from "../../../public/images/AllImages";
import TopLoadingBar from "react-top-loading-bar";

const DashboardLayout = () => {
  const userRole = JSON.parse(localStorage.getItem("home_care_user"));
  const location = useLocation();
  const pathSegment = location.pathname.split("/").pop();
  const currentPath = location.pathname;

  // Logic to set active keys
  const activeKeys = (() => {
    if (currentPath.includes("/dashboard")) return ["dashboard"];
    if (currentPath.includes("/drivers")) return ["drivers"];
    if (currentPath.includes("/passengers")) return ["passengers"];
    if (
      currentPath.includes("/driver") ||
      currentPath.includes("/all-driver") ||
      currentPath.includes("/driver-request")
    )
      return ["driver"];
    if (
      currentPath.includes("/owner") ||
      currentPath.includes("/all-owner") ||
      currentPath.includes("/owner-request")
    )
      return ["owner"];

    if (currentPath.includes("/subscription")) return ["subscription"];
    if (currentPath.includes("/driver-request")) return ["driver-request"];
    if (currentPath.includes("/employees")) return ["employees"];
    if (currentPath.includes("/earnings")) return ["earnings"];
    if (currentPath.includes("/offers")) return ["offers"];
    if (currentPath.includes("/all-withdraw")) return ["all-withdraw"];
    if (currentPath.includes("/notification")) return ["notification"];
    if (currentPath.includes("/tracking")) return ["tracking"];
    if (currentPath.includes("/vehicles")) return ["vehicles"];
    if (currentPath.includes("/rent-car")) return ["rent-car"];
    if (currentPath.includes("/earning")) return ["earning"];
    if (currentPath.includes("/booking")) return ["booking"];

    return [currentPath.split("/")[1]];
  })();

  const activeOtherKeys = (() => {
    if (
      currentPath.includes("/settings") ||
      currentPath.includes("/profile") ||
      currentPath.includes("/edit-profile") ||
      currentPath.includes("/change-password") ||
      currentPath.includes("/safety") ||
      currentPath.includes("/terms-and-condition") ||
      currentPath.includes("/faq") ||
      currentPath.includes("/forgot-password") ||
      currentPath.includes("/otp-page") ||
      currentPath.includes("/update-password")
    )
      return ["settings"];
    if (currentPath.includes("/logout")) return ["logout"];
    return [currentPath.split("/")[1]];
  })();

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]); // State for open submenus
  const rootSubmenuKeys = ["driver", "settings"]; // Root submenu keys

  // Handle submenu open/close
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys([latestOpenKey]); // Only keep the latest submenu open
    } else {
      setOpenKeys(keys); // Update normally for closing or nested submenus
    }
  };

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const adminMenuItems = [
    {
      key: "dashboard",
      icon: (
        <img
          src={AllIcons.one}
          alt="dashboard"
          width={20}
          style={{
            filter: location.pathname.includes("dashboard")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="dashboard">Dashboard</NavLink>,
    },
    {
      key: "passengers",
      icon: (
        <img
          src={AllIcons.two}
          alt="passengers"
          width={20}
          style={{
            filter: location.pathname.includes("passengers")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="passengers">Passengers</NavLink>,
    },
    {
      key: "owner",
      label: <span>Owner</span>,
      icon: (
        <img
          src={AllIcons.three}
          alt="owner"
          width={20}
          style={{
            filter:
              location.pathname.includes("all-owner") ||
              location.pathname.includes("owner-request")
                ? "brightness(0) invert(1)"
                : undefined,
          }}
        />
      ),
      children: [
        {
          key: "all-owner",
          icon: <span>•</span>,
          label: <NavLink to="all-owner">All owner</NavLink>,
        },
        {
          key: "owner-request",
          icon: <span>•</span>,
          label: <NavLink to="owner-request">Owner Request</NavLink>,
        },
      ],
    },
    // {
    //   key: "driver",
    //   label: <span>Driver</span>,
    //   icon: (
    //     <img
    //       src={AllIcons.four}
    //       alt="driver"
    //       width={20}
    //       style={{
    //         filter:
    //           location.pathname.includes("all-driver") ||
    //           location.pathname.includes("driver-request")
    //             ? "brightness(0) invert(1)"
    //             : undefined,
    //       }}
    //     />
    //   ),
    //   children: [
    //     {
    //       key: "all-driver",
    //       icon: <span>•</span>,
    //       label: <NavLink to="all-driver">All driver</NavLink>,
    //     },
    //     {
    //       key: "driver-request",
    //       icon: <span>•</span>,
    //       label: <NavLink to="driver-request">Driver Request</NavLink>,
    //     },
    //   ],
    // },
    // {
    //   key: "employees",
    //   icon: (
    //     <img
    //       src={AllIcons.five}
    //       alt="employees"
    //       width={20}
    //       style={{
    //         filter: location.pathname.includes("employees")
    //           ? "brightness(0) invert(1)"
    //           : undefined,
    //       }}
    //     />
    //   ),
    //   label: <NavLink to="employees">Employees</NavLink>,
    // },
    {
      key: "subscription",
      icon: (
        <img
          src={AllIcons.five}
          alt="subscription"
          width={20}
          style={{
            filter: location.pathname.includes("subscription")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="subscription">Subscription</NavLink>,
    },
    {
      key: "earnings",
      icon: (
        <img
          src={AllIcons.six}
          alt="earnings"
          width={20}
          style={{
            filter: location.pathname.includes("earnings")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="earnings">Earnings</NavLink>,
    },
    {
      key: "offers",
      icon: (
        <img
          src={AllIcons.seven}
          alt="offers"
          width={20}
          style={{
            filter: location.pathname.includes("offers")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="offers">Offers</NavLink>,
    },
    {
      key: "all-withdraw",
      icon: (
        <img
          src={AllIcons.eight}
          alt="all-withdraw"
          width={20}
          style={{
            filter: location.pathname.includes("all-withdraw")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="all-withdraw">Withdraw</NavLink>,
    },
  ];

  const companyMenuItems = [
    {
      key: "dashboard",
      icon: (
        <img
          src={AllIcons.eleven}
          alt="dashboard"
          width={20}
          style={{
            filter: location.pathname.includes("dashboard")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="dashboard">Profile</NavLink>,
    },
    {
      key: "tracking",
      icon: (
        <img
          src={AllIcons.twelve}
          alt="tracking"
          width={20}
          style={{
            filter: location.pathname.includes("tracking")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="tracking">Tracking</NavLink>,
    },
    {
      key: "vehicles",
      icon: (
        <img
          src={AllIcons.thirtheen}
          alt="vehicles"
          width={20}
          style={{
            filter: location.pathname.includes("vehicles")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="vehicles">Vehicles</NavLink>,
    },
    {
      key: "drivers",
      icon: (
        <img
          src={AllIcons.three}
          alt="drivers"
          width={20}
          style={{
            filter: location.pathname.includes("drivers")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="drivers">Drivers</NavLink>,
    },
    {
      key: "rent-car",
      icon: (
        <img
          src={AllIcons.fourting}
          alt="rent-car"
          width={20}
          style={{
            filter: location.pathname.includes("rent-car")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="rent-car">Rent Car</NavLink>,
    },
    {
      key: "earning",
      icon: (
        <img
          src={AllIcons.five}
          alt="earning"
          width={20}
          style={{
            filter: location.pathname.includes("earning")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="earning">Earning</NavLink>,
    },
    {
      key: "booking",
      icon: (
        <img
          src={AllIcons.fifthing}
          alt="booking"
          width={20}
          style={{
            filter: location.pathname.includes("booking")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="booking">Booking</NavLink>,
    },
  ];
  const ownwerMenuItems = [
    {
      key: "dashboard",
      icon: (
        <img
          src={AllIcons.eleven}
          alt="dashboard"
          width={20}
          style={{
            filter: location.pathname.includes("dashboard")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="dashboard">Dashboard</NavLink>,
    },
    {
      key: "tracking",
      icon: (
        <img
          src={AllIcons.twelve}
          alt="tracking"
          width={20}
          style={{
            filter: location.pathname.includes("tracking")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="tracking">Tracking</NavLink>,
    },
    {
      key: "vehicles",
      icon: (
        <img
          src={AllIcons.thirtheen}
          alt="vehicles"
          width={20}
          style={{
            filter: location.pathname.includes("vehicles")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="vehicles">Vehicles</NavLink>,
    },
    {
      key: "drivers",
      icon: (
        <img
          src={AllIcons.three}
          alt="drivers"
          width={20}
          style={{
            filter: location.pathname.includes("drivers")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="drivers">Drivers</NavLink>,
    },

    {
      key: "earning",
      icon: (
        <img
          src={AllIcons.five}
          alt="earning"
          width={20}
          style={{
            filter: location.pathname.includes("earning")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="earning">Earning</NavLink>,
    },
  ];

  const commonItems = [
    {
      key: "settings",
      icon: (
        <img
          src={AllIcons.nine}
          alt="settings"
          width={20}
          style={{
            filter:
              location.pathname.includes("settings") ||
              location.pathname.includes("change-password") ||
              location.pathname.includes("faq") ||
              location.pathname.includes("safety") ||
              location.pathname.includes("terms-and-condition") ||
              location.pathname.includes("edit-profile") ||
              location.pathname.includes("profile")
                ? "brightness(0) invert(1)"
                : undefined,
          }}
        />
      ),
      label: <NavLink to="settings">Settings</NavLink>,
    },
    {
      key: "logout",
      icon: (
        <img
          src={AllIcons.ten}
          alt="logout"
          width={16}
          height={16}
          style={{ color: "#222222" }}
        />
      ),
      label: (
        <div onClick={() => localStorage.removeItem("home_care_user")}>
          <NavLink to="/signin">Logout</NavLink>
        </div>
      ),
    },
  ];

  // const menuItems = userRole?.role === "admin" ? adminMenuItems : companyMenuItems;
  const menuItems =
    (userRole?.role === "admin" && adminMenuItems) ||
    (userRole?.role === "company" && companyMenuItems) ||
    (userRole?.role === "owner" && ownwerMenuItems);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timeout = setTimeout(() => setProgress(100), 100);
    const resetTimeout = setTimeout(() => setProgress(0), 200);
    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };
  }, [location]);

  return (
    <div className="h-screen bg-white">
      <TopLoadingBar
        color="#FE4101"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <ScrollRestoration />
      <Layout className="!relative !bg-white">
        <Sider
          width={240}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 0px 5px #00000040",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Link to="/">
            <img
              src={AllImages.logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="my-7 mx-auto w-52"
            />
          </Link>
          <Menu
            mode="inline"
            defaultSelectedKeys={pathSegment}
            selectedKeys={activeKeys}
            openKeys={openKeys} // Bind openKeys state
            onOpenChange={onOpenChange} // Handle open/close
            style={{
              backgroundColor: "transparent",
              border: "none",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
            items={menuItems}
          />
          <Typography.Title
            level={5}
            className="mt-5 text-xs font-medium !text-[#727272]"
            style={{
              paddingLeft: "6px",
              paddingRight: "6px",
              marginLeft: "12%",
            }}
          >
            OTHER
          </Typography.Title>
          <Menu
            mode="inline"
            defaultSelectedKeys={pathSegment}
            selectedKeys={activeOtherKeys}
            openKeys={openKeys} // Bind openKeys state
            onOpenChange={onOpenChange} // Handle open/close
            style={{
              paddingBottom: "40px",
              backgroundColor: "transparent",
              border: "none",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
            items={commonItems}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#ffffff",
              position: "sticky",
              top: 0,
              zIndex: 999,
              marginLeft: 2,
            }}
          >
            <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
          <Content>
            <div className="bg-base-color px-2 xl:px-5 py-4 xl:py-5">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
