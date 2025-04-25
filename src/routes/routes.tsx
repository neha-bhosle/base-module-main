import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { LOGIN } from "src/models/routesConstant";
import Login from "../common-components/login/login";
import AuthLayout from "../layouts/auth-layout";
import NotAuthorized from "../pages/error/not-authorized";
import NotFound from "../pages/error/not-found";
import PublicRoute from "./public-route";

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
    children: [{ path: LOGIN, element: <Login /> }],
  },

  // {
  //   path: NOT_AUTHORIZED,
  //   element: <NotAuthorized />,
  // },
  // {
  //   path: NOT_FOUND,
  //   element: <NotFound />,
  // },
]);
