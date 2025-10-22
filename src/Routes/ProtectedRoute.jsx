/* eslint-disable react/prop-types */
import { Spin } from "antd";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { clearAuth } from "../redux/slices/authSlice";

function ProtectedRoute({ children, role }) {
  const token = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    if (token?.accessToken) {
      const decodeToken = jwtDecode(token?.accessToken);
      const currentTime = Date.now() / 1000;

      if (decodeToken.exp < currentTime) {
        // Token is expired, log the user out

        dispatch(clearAuth()); // Dispatch logout action
        navigate("/signin");
        setIsAuthorized(false);
      } else {
        // Check if the role matches
        if (decodeToken?.role !== role) {
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
      }
    } else {
      setIsAuthorized(false);
    }
  }, [token?.accessToken, role]);

  // Render loading state while checking the token
  if (isAuthorized === null) {
    return (
      <div className="flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  // Redirect if unauthorized
  if (isAuthorized === false) {
    return <Navigate to="/signin" replace />;
  }

    const path = window.location.pathname;
    const currentpath = path.split("/")[2];
  if (role == "sub-admin") {
    // console.log(token?.userInfo?.categoryPermissions, children);
    // console.log(currentpath);

    const currentCategory = token?.userInfo?.categoryPermissions?.find(
      (cat) => cat === currentpath
    );
    // console.log(currentCategory);

    if (
      !currentCategory &&
      currentpath != "dashboard" &&
      currentpath != "settings"
    ) {
      console.log("redirecting");
      return <Navigate to={`/sub-admin/dashboard`} replace />;
    }

    //   ?.includes(path.split("/")[2])
    //   ? null
    //   : navigate("/employee/dashboard");
  }
  // Render children if authorized
  return <>{children}</>;
}

export default ProtectedRoute;
