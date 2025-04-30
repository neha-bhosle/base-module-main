// import { Login } from "@mui/icons-material";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import SetPassword from "../common-components/login/login-pages//set-password";
import EnterOtpOne from "../common-components/login/login-pages/enter-otp1";
import ForgotPassword from "../common-components/login/login-pages/forgot-password";
import Login from "../common-components/login/login-pages/login";
import AuthLayout from "../layouts/auth-layout";
import MainLayout from "../layouts/main-layout";
import {
  ENTER_OTP,
  FORGOT_PASSWORD,
  LOGIN,
  SET_PASSWORD,
} from "../models/routesConstant";
import { PROFILE_TABS } from "../models/routesConstant copy";
import ProfileTabs from "../pages/apps/provider-portal/profile-tab/profile-tabs";
// common-components/login/login-pages/login";

export const router = createBrowserRouter([
  { path: "", element: <Navigate to={"/auth/login"} /> },
  {
    path: "/auth",
    element: (
      // <PublicRoute>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
      // </PublicRoute>
    ),
    children: [
      { path: LOGIN, element: <Login /> },
      { path: FORGOT_PASSWORD, element: <ForgotPassword /> },
      { path: ENTER_OTP, element: <EnterOtpOne /> },
      { path: SET_PASSWORD, element: <SetPassword /> },
    ],
  },
  {
    path: "/admin",
    element: (
      // <PrivateRoute>
      <MainLayout>
        <Outlet />
      </MainLayout>
      // </PrivateRoute>
    ),
    children: [{ path: PROFILE_TABS, element: <ProfileTabs /> }],
  },
]);
