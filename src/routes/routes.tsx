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
import Availability from "../pages/apps/provider-portal/availability/availability";
import FeeSchedule from "../pages/apps/provider-portal/other-setting/fee-schedule/fee-schedule";
import OtherSettingsMasterTabs from "../pages/apps/provider-portal/other-setting/other-settings-master-tabs";
import AllSettingsPage from "../pages/apps/provider-portal/settings/all-settings-page";
import Contact from "../pages/apps/provider-portal/settings/contacts/contact";
import Location from "../pages/apps/provider-portal/settings/location/location";
import ProfileTabs from "../pages/apps/provider-portal/settings/profile-settings-tabs";
import Profile from "../pages/apps/provider-portal/settings/profile/profile";
import Roles from "../pages/apps/provider-portal/settings/roles/roles-settings";
import Clinician from "../pages/apps/provider-portal/settings/Users/clinician/clinician";
import Staff from "../pages/apps/provider-portal/settings/Users/staff/staff";
import UserTabs from "../pages/apps/provider-portal/settings/Users/user-tabs";
import Patients from "../pages/apps/provider-portal/patients/patients";
import AddPatients from "../pages/apps/provider-portal/patients/add-patients";
import ViewAppointments from "../pages/apps/provider-portal/calendar/view-appointments";
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
    children: [
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "calendar",
        element: <ViewAppointments />,
      },
      {
        path: "add-patient",
        element: <AddPatients />,
      },
      {
        path: "settings-tabs",
        element: <Outlet />,
        children: [
          { path: "", element: <AllSettingsPage /> },
          {
            path: "other-settings",
            element: <OtherSettingsMasterTabs />,
            children: [
              { path: "availability", element: <Availability /> },
              { path: "fee-schedule", element: <FeeSchedule /> },
            ],
          },
          {
            path: "profile-tabs",
            element: <ProfileTabs />,
            children: [
              { path: "", element: <Profile /> },
              { path: "profile", element: <Profile /> },
              { path: "location", element: <Location /> },
              {
                path: "user",
                element: <UserTabs />,
                children: [
                  { path: "staff", element: <Staff /> },
                  { path: "clinician", element: <Clinician /> },
                ],
              },
              { path: "roles", element: <Roles /> },
              { path: "contact", element: <Contact /> },
            ],
          },
        ],
      },
    ],
  },
]);
