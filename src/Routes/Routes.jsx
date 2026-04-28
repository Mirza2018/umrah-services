/* eslint-disable react-refresh/only-export-components */
import { useEffect, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { clearAuth } from "../redux/slices/authSlice";
import Loading from "../Components/UI/Loading";

// ✅ Lazy load ALL page components
const DashboardLayout = lazy(
  () => import("../Components/Layout/DashboardLayout"),
);
const SignIn = lazy(() => import("../Pages/Auth/SignIn"));
const ForgotPassword = lazy(() => import("../Pages/Auth/ForgetPassword"));
const OtpPage = lazy(() => import("../Pages/Auth/OtpPage"));
const UpdatePassword = lazy(() => import("../Pages/Auth/UpdatePassword"));
const SuperAdminDashboard = lazy(
  () => import("../Pages/SuperAdmin/SuperAdminDashboard"),
);
const Passengers = lazy(() => import("../Pages/SuperAdmin/Passengers"));
const AllOwner = lazy(() => import("../Pages/SuperAdmin/AllOwner"));
const OwnerRequest = lazy(() => import("../Pages/SuperAdmin/OwnerRequest"));
const OwnerSeeDetails = lazy(
  () =>
    import("../Components/SuperAdminPages/DriverRequestPage/OwnerSeeDetails"),
);
const OwnerRequestAccept = lazy(
  () =>
    import("../Components/SuperAdminPages/DriverRequestPage/OwnerRequestAccept"),
);
const ServicesManagementsPage = lazy(
  () => import("../Pages/SuperAdmin/ServicesManagementsPage"),
);
const CreateService = lazy(() => import("../Pages/SuperAdmin/CreateService"));
const ServiceRequests = lazy(
  () => import("../Pages/SuperAdmin/ServiceRequests"),
);
const IncompletedServices = lazy(
  () => import("../Pages/SuperAdmin/IncompletedServices"),
);
const EarningsPage = lazy(() => import("../Pages/SuperAdmin/EarningsPage"));
const AdminPage = lazy(() => import("../Pages/SuperAdmin/AdminPage"));
const DiscountPage = lazy(() => import("../Pages/SuperAdmin/DiscountPage"));
const RefundsPage = lazy(() => import("../Pages/SuperAdmin/RefundsPage"));
const Feedbacks = lazy(() => import("../Pages/SuperAdmin/Feedbacks"));
const PayoutsRequest = lazy(() => import("../Pages/SuperAdmin/PayoutsRequest"));
const AllContacts = lazy(() => import("../Pages/SuperAdmin/AllContacts"));
const NotificationStatus = lazy(
  () => import("../Pages/SuperAdmin/NotificationStatus"),
);
const NotificationRequests = lazy(
  () => import("../Pages/SuperAdmin/NotificationRequests"),
);
const NotificationsPage = lazy(
  () => import("../Pages/Admin/NotificationsPage"),
);
const SettingsPage = lazy(() => import("../Pages/Admin/SettingsPage"));
const AdminAllFeedBack = lazy(() => import("../Pages/Admin/AllFeedback"));
const Profile = lazy(() => import("../Pages/Common/Profile"));
const EditProfile = lazy(() => import("../Pages/Common/EditProfile"));
const Notifications = lazy(
  () => import("../Components/Dashboard/Notifications"),
);
const FAQ = lazy(() => import("../Components/Dashboard/FAQ/FAQ"));
const Safely = lazy(() => import("../Pages/Common/settings/Safely"));
const SettingsChangePassword = lazy(
  () => import("../Pages/Common/settings/SettingsChangePassword"),
);
const SettingsForgotPassword = lazy(
  () => import("../Pages/Common/settings/SettingsForgotPassword"),
);
const SettingsOtpPage = lazy(
  () => import("../Pages/Common/settings/SettingsOtpPage"),
);
const SettingsUpdatePassword = lazy(
  () => import("../Pages/Common/settings/SettingsUpdatePassword"),
);
const TermsOfService = lazy(
  () => import("../Pages/Common/settings/TermsOfService"),
);
const PrivacyPolicy = lazy(
  () => import("../Pages/Common/settings/PrivacyPolicy"),
);
const TermsOfServiceVendor = lazy(
  () => import("../Pages/Common/settings/TermsOfServiceVendor"),
);
const PrivacyPolicyVendor = lazy(
  () => import("../Pages/Common/settings/PrivacyPolicyVendor"),
);
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

// ✅ Wrap lazy routes with Suspense
const Fallback = () => (
  <div className="flex justify-center items-center h-screen">
    <Loading />
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<Fallback />}>
    <Component />
  </Suspense>
);

function AuthRedirect() {
  const token = useSelector((state) => state.auth?.accessToken);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/signin") return;

    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken?.role;
      const currentTime = Date.now() / 1000;

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
      dispatch(clearAuth());
      navigate("/signin", { replace: true });
    }
  }, [token, navigate, location.pathname, dispatch]);

  return <Loading />;
}

// ✅ Helper for protected layout
const ProtectedLayout = ({ role }) => (
  <Suspense fallback={<Fallback />}>
    <ProtectedRoute role={role}>
      <DashboardLayout />
    </ProtectedRoute>
  </Suspense>
);

const adminChildren = [
  { path: "dashboard", element: withSuspense(SuperAdminDashboard) },
  { path: "customers", element: withSuspense(Passengers) },
  { path: "all-vendors", element: withSuspense(AllOwner) },
  { path: "vendors-request", element: withSuspense(OwnerRequest) },
  {
    path: "vendors-request/details/:id/:sID",
    element: withSuspense(OwnerSeeDetails),
  },
  {
    path: "vendors-request/deatils/:id/accepted",
    element: withSuspense(OwnerRequestAccept),
  },
  {
    path: "services-managements",
    element: withSuspense(ServicesManagementsPage),
  },
  { path: "create-service", element: withSuspense(CreateService) },
  { path: "service-request", element: withSuspense(ServiceRequests) },
  { path: "incompleted-services", element: withSuspense(IncompletedServices) },
  { path: "earnings", element: withSuspense(EarningsPage) },
  { path: "all-admin", element: withSuspense(AdminPage) },
  { path: "discount", element: withSuspense(DiscountPage) },
  { path: "refunds", element: withSuspense(RefundsPage) },
  { path: "feedback", element: withSuspense(Feedbacks) },
  { path: "payouts", element: withSuspense(PayoutsRequest) },
  { path: "contacts", element: withSuspense(AllContacts) },
  { path: "notification-status", element: withSuspense(NotificationStatus) },
  {
    path: "notification-requests",
    element: withSuspense(NotificationRequests),
  },
  { path: "notification", element: withSuspense(NotificationsPage) },
  { path: "settings", element: withSuspense(SettingsPage) },
  {
    path: "settings/change-password",
    element: withSuspense(SettingsChangePassword),
  },
  { path: "settings/faq", element: withSuspense(FAQ) },
  { path: "settings/safety", element: withSuspense(Safely) },
  {
    path: "settings/terms-and-condition",
    element: withSuspense(TermsOfService),
  },
  { path: "settings/privacy-policy", element: withSuspense(PrivacyPolicy) },
  {
    path: "settings/terms-and-condition-vendor",
    element: withSuspense(TermsOfServiceVendor),
  },
  {
    path: "settings/privacy-policy-vendor",
    element: withSuspense(PrivacyPolicyVendor),
  },
  { path: "notifications", element: withSuspense(Notifications) },
  { path: "show-feedback", element: withSuspense(AdminAllFeedBack) },
  { path: "settings/profile", element: withSuspense(Profile) },
  { path: "settings/edit-profile", element: withSuspense(EditProfile) },
  {
    path: "settings/forgot-password",
    element: withSuspense(SettingsForgotPassword),
  },
  { path: "settings/otp-page", element: withSuspense(SettingsOtpPage) },
  {
    path: "settings/update-password",
    element: withSuspense(SettingsUpdatePassword),
  },
];

const subAdminChildren = [
  { path: "dashboard", element: withSuspense(SuperAdminDashboard) },
  { path: "customers", element: withSuspense(Passengers) },
  { path: "all-vendors", element: withSuspense(AllOwner) },
  { path: "vendors-request", element: withSuspense(OwnerRequest) },
  {
    path: "vendors-request/details/:id/:sID",
    element: withSuspense(OwnerSeeDetails),
  },
  {
    path: "vendors-request/details/:id/accepted",
    element: withSuspense(OwnerRequestAccept),
  },
  {
    path: "services-managements",
    element: withSuspense(ServicesManagementsPage),
  },
  { path: "create-service", element: withSuspense(CreateService) },
  { path: "service-request", element: withSuspense(ServiceRequests) },
  { path: "earnings", element: withSuspense(EarningsPage) },
  { path: "all-admin", element: withSuspense(AdminPage) },
  { path: "refunds", element: withSuspense(RefundsPage) },
  { path: "feedback", element: withSuspense(Feedbacks) },
  { path: "payouts", element: withSuspense(PayoutsRequest) },
  { path: "contacts", element: withSuspense(AllContacts) },
  { path: "notification-status", element: withSuspense(NotificationStatus) },
  {
    path: "notification-requests",
    element: withSuspense(NotificationRequests),
  },
  { path: "notification", element: withSuspense(NotificationsPage) },
  { path: "settings", element: withSuspense(SettingsPage) },
  {
    path: "settings/change-password",
    element: withSuspense(SettingsChangePassword),
  },
  { path: "settings/faq", element: withSuspense(FAQ) },
  { path: "settings/safety", element: withSuspense(Safely) },
  {
    path: "settings/terms-and-condition",
    element: withSuspense(TermsOfService),
  },
  { path: "notifications", element: withSuspense(Notifications) },
  { path: "show-feedback", element: withSuspense(AdminAllFeedBack) },
  { path: "settings/profile", element: withSuspense(Profile) },
  { path: "settings/edit-profile", element: withSuspense(EditProfile) },
  {
    path: "settings/forgot-password",
    element: withSuspense(SettingsForgotPassword),
  },
  { path: "settings/otp-page", element: withSuspense(SettingsOtpPage) },
  {
    path: "settings/update-password",
    element: withSuspense(SettingsUpdatePassword),
  },
];

const router = createBrowserRouter([
  { path: "/", element: <AuthRedirect /> },
  { path: "/dashboard", element: <AuthRedirect /> },
  {
    path: "admin",
    element: <ProtectedLayout role="admin" />,
    children: adminChildren,
  },
  {
    path: "sub-admin",
    element: <ProtectedLayout role="sub-admin" />,
    children: subAdminChildren,
  },
  { path: "signin", element: withSuspense(SignIn) },
  { path: "forgot-password", element: withSuspense(ForgotPassword) },
  { path: "verify-otp", element: withSuspense(OtpPage) },
  { path: "update-password", element: withSuspense(UpdatePassword) },
  { path: "*", element: <Navigate to="/signin" replace /> },
]);

export default router;
