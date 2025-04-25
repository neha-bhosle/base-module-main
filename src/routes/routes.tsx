import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../common-components/login/login";
import AuthLayout from "../layouts/auth-layout";
import MainLayout from "../layouts/main-layout";
import NotAuthorized from "../pages/error/not-authorized";
import NotFound from "../pages/error/not-found";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import { LOGIN, NOT_AUTHORIZED, NOT_FOUND } from "src/models/routesConstant";

export const router = createBrowserRouter([
  { path: "", element: <Navigate to={"/auth/login"} /> },
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </PublicRoute>
    ),
    children: [{ path: LOGIN, element: <Login /> }]
  },

  {
    path: NOT_AUTHORIZED,
    element: <NotAuthorized />
  },
  {
    path: NOT_FOUND,
    element: <NotFound />
  }
]);
