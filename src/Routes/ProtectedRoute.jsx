/* eslint-disable react/prop-types */
import { Spin } from "antd";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearAuth } from "../redux/slices/authSlice";

function ProtectedRoute({ children, role }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const accessToken = auth?.accessToken;

    if (!accessToken) {
      setIsAuthorized(false);
      return;
    }

    let decoded;

    try {
      decoded = jwtDecode(accessToken);
    } catch (err) {
      console.error("Invalid token");
      dispatch(clearAuth());
      setIsAuthorized(false);
      return;
    }

    const now = Date.now() / 1000;

    if (!decoded?.exp || decoded.exp < now) {
      dispatch(clearAuth());
      setIsAuthorized(false);
      return;
    }

    if (decoded.role !== role) {
      setIsAuthorized(false);
      return;
    }

    setIsAuthorized(true);
  }, [auth?.accessToken, role, dispatch]);

  if (isAuthorized === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!isAuthorized) {
    return <Navigate to="/signin" replace />;
  }

  if (role === "sub-admin") {
    const pathParts = window.location.pathname.split("/");
    const currentPath = pathParts.length > 2 ? pathParts[2] : null;

    const allowed = auth?.userInfo?.categoryPermissions?.includes(currentPath);

    if (!allowed && currentPath !== "dashboard" && currentPath !== "settings") {
      return <Navigate to="/sub-admin/dashboard" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;
