/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";

import DashboardLayout from "../Components/Layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

//* Auth
import ForgotPassword from "../Pages/Auth/ForgetPassword";
import OtpPage from "../Pages/Auth/OtpPage";
import SignIn from "../Pages/Auth/SignIn";
import UpdatePassword from "../Pages/Auth/UpdatePassword";

//* Common

import Notifications from "../Components/Dashboard/Notifications";
import EditProfile from "../Pages/Common/EditProfile";
import Profile from "../Pages/Common/Profile";
import SettingsChangePassword from "../Pages/Common/settings/SettingsChangePassword";
import SettingsForgotPassword from "../Pages/Common/settings/SettingsForgotPassword";
import SettingsOtpPage from "../Pages/Common/settings/SettingsOtpPage";
import SettingsUpdatePassword from "../Pages/Common/settings/SettingsUpdatePassword";
import TermsOfService from "../Pages/Common/settings/TermsOfService";

//* Admin Dashboard

//* Company Dashboard
import Loading from "../Components/UI/Loading";
import AdminAllFeedBack from "../Pages/Admin/AllFeedback";

import FAQ from "../Components/Dashboard/FAQ/FAQ";
import OwnerRequestAccept from "../Components/SuperAdminPages/DriverRequestPage/OwnerRequestAccept";
import OwnerSeeDetails from "../Components/SuperAdminPages/DriverRequestPage/OwnerSeeDetails";
import NotificationsPage from "../Pages/Admin/NotificationsPage";
import SettingsPage from "../Pages/Admin/SettingsPage";
import Safely from "../Pages/Common/settings/Safely";
import AdminPage from "../Pages/SuperAdmin/AdminPage";
import AllContacts from "../Pages/SuperAdmin/AllContacts";
import AllOwner from "../Pages/SuperAdmin/AllOwner";
import EarningsPage from "../Pages/SuperAdmin/EarningsPage";
import Feedbacks from "../Pages/SuperAdmin/Feedbacks";
import NotificationRequests from "../Pages/SuperAdmin/NotificationRequests";
import NotificationStatus from "../Pages/SuperAdmin/NotificationStatus";
import OwnerRequest from "../Pages/SuperAdmin/OwnerRequest";
import Passengers from "../Pages/SuperAdmin/Passengers";
import PayoutsRequest from "../Pages/SuperAdmin/PayoutsRequest";
import RefundsPage from "../Pages/SuperAdmin/RefundsPage";
import ServiceRequests from "../Pages/SuperAdmin/ServiceRequests";
import SuperAdminDashboard from "../Pages/SuperAdmin/SuperAdminDashboard";

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("home_care_user"));
    if (user && user.role) {
      navigate(`/${user.role}/dashboard`, { replace: true });
    } else {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  // Optionally display a loading indicator
  return <Loading />;
}

const router = createBrowserRouter([
  {
    path: "/",
    index: true, // This applies to the exact path "/"
    element: <AuthRedirect />,
  },
  {
    path: "/dashboard",
    index: true, // This applies to the exact path "/"
    element: <AuthRedirect />,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <SuperAdminDashboard />,
      },
      {
        path: "customers",
        element: <Passengers />,
      },

      {
        path: "all-vendors",
        element: <AllOwner />,
      },
      {
        path: "vendors-request",
        element: <OwnerRequest />,
      },
      {
        path: "vendors-request/deatils/:id",
        element: <OwnerSeeDetails />,
      },
      {
        path: "vendors-request/deatils/:id/accepted",
        element: <OwnerRequestAccept />,
      },
      {
        path: "service",
        element: <ServiceRequests />,
      },
      {
        path: "earnings",
        element: <EarningsPage />,
      },
      {
        path: "all-admin",
        element: <AdminPage />,
      },
      {
        path: "refunds",
        element: <RefundsPage />,
      },
      {
        path: "feedback",
        element: <Feedbacks />,
      },
      {
        path: "payouts",
        element: <PayoutsRequest />,
      },
      {
        path: "contacts",
        element: <AllContacts />,
      },
      {
        path: "notification-status",
        element: <NotificationStatus />,
      },
      {
        path: "notification-requests",
        element: <NotificationRequests />,
      },

      {
        path: "notification",
        element: <NotificationsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "settings/change-password",
        element: <SettingsChangePassword />,
      },
      {
        path: "settings/faq",
        element: <FAQ />,
      },
      {
        path: "settings/safety",
        element: <Safely />,
      },
      {
        path: "settings/terms-and-condition",
        element: <TermsOfService />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "show-feedback",
        element: <AdminAllFeedBack />,
      },
      {
        path: "settings/profile",
        element: <Profile />,
      },
      {
        path: "settings/edit-profile",
        element: <EditProfile />,
      },

      {
        path: "settings/forgot-password",
        element: <SettingsForgotPassword />,
      },
      {
        path: "settings/otp-page",
        element: <SettingsOtpPage />,
      },
      {
        path: "settings/update-password",
        element: <SettingsUpdatePassword />,
      },
    ],
  },

  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "verify-otp",
    element: <OtpPage />,
  },
  {
    path: "update-password",
    element: <UpdatePassword />,
  },
]);

export default router;
