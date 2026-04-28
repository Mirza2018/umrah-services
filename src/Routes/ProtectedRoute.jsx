/* eslint-disable react/prop-types */
import { Spin } from "antd";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearAuth } from "../redux/slices/authSlice";

function ProtectedRoute({ children, role }) {
  const token = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    if (!token?.accessToken) {
      setIsAuthorized(false);
      return;
    }

    let decodeToken;

    try {
      decodeToken = jwtDecode(token.accessToken);
    } catch (error) {
      console.error("Token decode failed:", error);
      dispatch(clearAuth());
      setIsAuthorized(false);
      return;
    }

    const currentTime = Date.now() / 1000;

    if (decodeToken.exp < currentTime) {
      dispatch(clearAuth());
      setIsAuthorized(false);
      return;
    }

    if (decodeToken?.role !== role) {
      setIsAuthorized(false);
    } else {
      setIsAuthorized(true);
    }
  }, [token?.accessToken, role, dispatch]);

  // ⏳ Loading
  if (isAuthorized === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  // 🚫 Unauthorized
  if (!isAuthorized) {
    return <Navigate to="/signin" replace />;
  }

  // 🔐 Sub-admin route protection
  if (role === "sub-admin") {
    const pathParts = window.location.pathname.split("/");
    const currentPath = pathParts.length > 2 ? pathParts[2] : null;

    const allowed = token?.userInfo?.categoryPermissions?.includes(currentPath);

    if (!allowed && currentPath !== "dashboard" && currentPath !== "settings") {
      return <Navigate to="/sub-admin/dashboard" replace />;
    }
  }

  return <>{children}</>;
}

export default ProtectedRoute;
