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
    if (currentPath.includes("/customers")) return ["customers"];
    if (
      currentPath.includes("/vendors") ||
      currentPath.includes("/all-vendors") ||
      currentPath.includes("/vendors-request")
    )
      return ["vendors"];

    if (currentPath.includes("/service")) return ["service"];
    if (currentPath.includes("/earnings")) return ["earnings"];
    if (currentPath.includes("/all-admin")) return ["all-admin"];
    if (currentPath.includes("/refunds")) return ["refunds"];
    if (currentPath.includes("/feedback")) return ["feedback"];
    if (currentPath.includes("/payouts")) return ["payouts"];
    if (currentPath.includes("/notification-status")) return ["notification-status"];
    if (currentPath.includes("/notification-requests")) return ["notification-requests"];
    if (currentPath.includes("/contacts")) return ["contacts"];

    if (currentPath.includes("/notification")) return ["notification"];

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
      key: "customers",
      icon: (
        <img
          src={AllIcons.two}
          alt="customers"
          width={20}
          style={{
            filter: location.pathname.includes("customers")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="customers">Customers</NavLink>,
    },
    {
      key: "vendors",
      label: <span>Vendors</span>,
      icon: (
        <img
          src={AllIcons.three}
          alt="vendors"
          width={20}
          style={{
            filter:
              location.pathname.includes("all-vendors") ||
              location.pathname.includes("vendors-request")
                ? "brightness(0) invert(1)"
                : undefined,
          }}
        />
      ),
      children: [
        {
          key: "all-vendors",
          icon: <span>•</span>,
          label: <NavLink to="all-vendors">All Vendors</NavLink>,
        },
        {
          key: "vendors-request",
          icon: <span>•</span>,
          label: <NavLink to="vendors-request">Vendor Request</NavLink>,
        },
      ],
    },

    {
      key: "service",
      icon: (
        <img
          src={AllIcons.four}
          alt="service"
          width={20}
          style={{
            filter: location.pathname.includes("service")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="service">Create Service</NavLink>,
    },

    {
      key: "service",
      icon: (
        <img
          src={AllIcons.five}
          alt="service"
          width={20}
          style={{
            filter: location.pathname.includes("service")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="service">Service Requests</NavLink>,
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
      key: "all-admin",
      icon: (
        <img
          src={AllIcons.seven}
          alt="all-admin"
          width={20}
          style={{
            filter: location.pathname.includes("all-admin")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="all-admin">All Admins</NavLink>,
    },
    {
      key: "refunds",
      icon: (
        <img
          src={AllIcons.eight}
          alt="refunds"
          width={20}
          style={{
            filter: location.pathname.includes("refunds")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="refunds">Refunds</NavLink>,
    },
    {
      key: "feedback",
      icon: (
        <img
          src={AllIcons.nine}
          alt="feedback"
          width={20}
          style={{
            filter: location.pathname.includes("feedback")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="feedback">Feedback</NavLink>,
    },
    {
      key: "payouts",
      icon: (
        <img
          src={AllIcons.ten}
          alt="payouts"
          width={20}
          style={{
            filter: location.pathname.includes("payouts")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="payouts">Payouts</NavLink>,
    },

    {
      key: "notification-status",
      icon: (
        <img
          src={AllIcons.eleven}
          alt="notification-status"
          width={20}
          style={{
            filter: location.pathname.includes("notification-status")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="notification-status">Notification</NavLink>,
    },
    {
      key: "notification-requests",
      icon: (
        <img
          src={AllIcons.fifthing}
          alt="notification-requests"
          width={20}
          style={{
            filter: location.pathname.includes("notification-requests")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: (
        <NavLink to="notification-requests">Notification Requests</NavLink>
      ),
    },
    {
      key: "contacts",
      icon: (
        <img
          src={AllIcons.twelve}
          alt="contacts"
          width={20}
          style={{
            filter: location.pathname.includes("contacts")
              ? "brightness(0) invert(1)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="contacts">Help & Support</NavLink>,
    },
  ];

  const commonItems = [
    {
      key: "settings",
      icon: (
        <img
          src={AllIcons.thirtheen}
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
          src={AllIcons.fourting}
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
  const menuItems = userRole?.role === "admin" && adminMenuItems;

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
              className="my-7 mx-auto w-32"
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
