import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import EnterOtp from "src/common-components/login/login-pages/enter-otp";
import ForgotPassword from "src/common-components/login/login-pages/forgot-password";
import SetPassword from "src/common-components/login/login-pages/set-password";
import {
  ENTER_OTP,
  FORGOT_PASSWORD,
  LOGIN,
  SET_PASSWORD,
} from "src/models/routesConstant";
import Login from "../common-components/login/login-pages/login";
import AuthLayout from "../layouts/auth-layout";

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
      { path: ENTER_OTP, element: <EnterOtp /> },
      { path: SET_PASSWORD, element: <SetPassword /> },
    ],
  },
]);
