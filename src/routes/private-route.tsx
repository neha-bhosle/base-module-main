import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getDataFromLocalStorage } from "../utils/localStorage";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = !!getDataFromLocalStorage("token");
  // const { hasRouteAuthority } = useAuthority();
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
  }

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to={"/not-authorized"} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
