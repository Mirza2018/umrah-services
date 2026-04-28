/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import {
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";

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
import CreateService from "../Pages/SuperAdmin/CreateService";
import ServicesManagementsPage from "../Pages/SuperAdmin/ServicesManagementsPage";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivacyPolicy from "../Pages/Common/settings/PrivacyPolicy";
import { Navigate } from "react-router-dom";
import TermsOfServiceVendor from "../Pages/Common/settings/TermsOfServiceVendor";
import PrivacyPolicyVendor from "../Pages/Common/settings/PrivacyPolicyVendor";
import IncompletedServices from "../Pages/SuperAdmin/IncompletedServices";
import DiscountPage from "../Pages/SuperAdmin/DiscountPage";
import { clearAuth } from "../redux/slices/authSlice";

function AuthRedirect() {
  const token = useSelector((state) => state.auth?.accessToken);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // 🛑 Prevent loop
    if (location.pathname === "/signin") return;

    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken?.role;
      const currentTime = Date.now() / 1000;

      // 🔐 Expired token
      if (decodedToken.exp < currentTime) {
        dispatch(clearAuth());
        navigate("/signin", { replace: true });
        return;
      }

      if (userRole) {
        navigate(`/${userRole}/dashboard`, { replace: true });
      } else {
        dispatch(clearAuth());
        navigate("/signin", { replace: true });
      }
    } catch (error) {
      console.error("Token decode failed:", error);
      dispatch(clearAuth());
      navigate("/signin", { replace: true });
    }
  }, [token, navigate, location.pathname, dispatch]);

  return <Loading />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRedirect />,
  },
  {
    path: "/dashboard",
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
        path: "vendors-request/details/:id/:sID",
        element: <OwnerSeeDetails />,
      },
      {
        path: "vendors-request/deatils/:id/accepted",
        element: <OwnerRequestAccept />,
      },
      {
        path: "services-managements",
        element: <ServicesManagementsPage />,
      },
      {
        path: "create-service",
        element: <CreateService />,
      },
      {
        path: "service-request",
        element: <ServiceRequests />,
      },
      {
        path: "incompleted-services",
        element: <IncompletedServices />,
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
        path: "discount",
        element: <DiscountPage />,
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
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/terms-and-condition-vendor",
        element: <TermsOfServiceVendor />,
      },
      {
        path: "settings/privacy-policy-vendor",
        element: <PrivacyPolicyVendor />,
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
    path: "sub-admin",
    element: (
      <ProtectedRoute role="sub-admin">
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
        path: "vendors-request/details/:id/:sID",
        element: <OwnerSeeDetails />,
      },
      {
        path: "vendors-request/details/:id/accepted",
        element: <OwnerRequestAccept />,
      },
      {
        path: "services-managements",
        element: <ServicesManagementsPage />,
      },
      {
        path: "create-service",
        element: <CreateService />,
      },
      {
        path: "service-request",
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
  {
    path: "*",
    element: <Navigate to="/signin" replace />,
  },
]);

export default router;
