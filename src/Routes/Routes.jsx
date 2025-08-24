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
import DriverRequestAccept from "../Components/SuperAdminPages/DriverRequestPage/DriverRequestAccept";
import DriverSeeDetails from "../Components/SuperAdminPages/DriverRequestPage/DriverSeeDetails";
import OwnerRequestAccept from "../Components/SuperAdminPages/DriverRequestPage/OwnerRequestAccept";
import OwnerSeeDetails from "../Components/SuperAdminPages/DriverRequestPage/OwnerSeeDetails";
import NotificationsPage from "../Pages/Admin/NotificationsPage";
import SettingsPage from "../Pages/Admin/SettingsPage";
import SubscriptionPage from "../Pages/Admin/SubscriptionPage";
import CustomerService from "../Pages/Common/settings/CustomerService";
import Safely from "../Pages/Common/settings/Safely";
import CompanyBooking from "../Pages/Company/CompanyBooking";
import CompanyDashboard from "../Pages/Company/CompanyDashboard";
import CompanyDrivers from "../Pages/Company/CompanyDrivers";
import CompanyEarning from "../Pages/Company/CompanyEarning";
import CompanyTracking from "../Pages/Company/CompanyTracking";
import CompanyVehicles from "../Pages/Company/CompanyVehicles";
import RentCar from "../Pages/Company/RentCar";
import AllDriver from "../Pages/SuperAdmin/AllDriver";
import AllOwner from "../Pages/SuperAdmin/AllOwner";
import AllWithdraw from "../Pages/SuperAdmin/AllWithdraw";
import DriverRequest from "../Pages/SuperAdmin/DriverRequest";
import EarningsPage from "../Pages/SuperAdmin/EarningsPage";
import Offers from "../Pages/SuperAdmin/Offers";
import OwnerRequest from "../Pages/SuperAdmin/OwnerRequest";
import Passengers from "../Pages/SuperAdmin/Passengers";
import SuperAdminDashboard from "../Pages/SuperAdmin/SuperAdminDashboard";
import ServiceRequests from "../Pages/SuperAdmin/ServiceRequests";
import AdminPage from "../Pages/SuperAdmin/AdminPage";
import RefundsPage from "../Pages/SuperAdmin/RefundsPage";

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
      // {
      //   path: "dashboard",
      //   element: <AdminDashboard />,
      // },
      {
        path: "dashboard",
        element: <SuperAdminDashboard />,
      },
      {
        path: "passengers",
        element: <Passengers />,
      },
      // {
      //   path: "all-driver",
      //   element: <AllDriver />,
      // },
      // {
      //   path: "driver-request",
      //   element: <DriverRequest />,
      // },
      // {
      //   path: "driver-request/deatils/:id",
      //   element: <DriverSeeDetails />,
      // },
      // {
      //   path: "driver-request/deatils/:id/accepted",
      //   element: <DriverRequestAccept />,
      // },
      {
        path: "all-owner",
        element: <AllOwner />,
      },
      {
        path: "owner-request",
        element: <OwnerRequest />,
      },
      {
        path: "owner-request/deatils/:id",
        element: <OwnerSeeDetails />,
      },
      {
        path: "owner-request/deatils/:id/accepted",
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
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "refunds",
        element: <RefundsPage />,
      },
      {
        path: "subscription",
        element: <SubscriptionPage />,
      },

      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "all-withdraw",
        element: <AllWithdraw />,
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
    path: "company",
    element: (
      <ProtectedRoute role="company">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <CompanyDashboard />,
      },
      {
        path: "tracking",
        element: <CompanyTracking />,
      },
      {
        path: "vehicles",
        element: <CompanyVehicles />,
      },
      {
        path: "drivers",
        element: <CompanyDrivers />,
      },
      {
        path: "rent-car",
        element: <RentCar />,
      },

      {
        path: "earning",
        element: <CompanyEarning />,
      },
      {
        path: "booking",
        element: <CompanyBooking />,
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
        path: "settings/customer-service",
        element: <CustomerService />,
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
  //owner
  {
    path: "owner",
    element: (
      <ProtectedRoute role="owner">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <CompanyDashboard />,
      },
      {
        path: "tracking",
        element: <CompanyTracking />,
      },
      {
        path: "vehicles",
        element: <CompanyVehicles />,
      },
      {
        path: "drivers",
        element: <CompanyDrivers />,
      },

      {
        path: "earning",
        element: <CompanyEarning />,
      },

      {
        path: "notification",
        element: <NotificationsPage />,
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
        path: "settings/customer-service",
        element: <CustomerService />,
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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
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
