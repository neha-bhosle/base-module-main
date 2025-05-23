import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthority from "../hooks/use-authority";
import { PortalStartingRoute } from "../constants/portals";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { portal, token } = useAuthority();
  const isLoggedIn = !!token;

  return !isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to={PortalStartingRoute[portal]} />
  );
};

export default PublicRoute;
