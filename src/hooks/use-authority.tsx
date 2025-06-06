import { useLocation } from "react-router-dom";
import { getDataFromLocalStorage } from "../utils/localStorage";
import { RolesPortalMap, Roles } from "../constants/roles";
import { Portals } from "../constants/portals";

type AuthorityInfo = {
  hasRouteAuthority: boolean;
  portal: string;
  role: string | null;
  token: string | null;
  isSuperAdmin: boolean;
  isFrontDesk: boolean;
  isBiller: boolean;
  isEnb: boolean;
  isStaff: boolean;
  isProvider: boolean;
  isProviderButNotCloser: boolean;
  isPatient: boolean;
  isPatientDomain: boolean;
  isAdminPortal: boolean;
  isProviderPortal: boolean;
  isPatientPortal: boolean;
  isProviderGroupAdmin: boolean;
};

const useAuthority = () => {
  const role = getDataFromLocalStorage("role");
  const token = getDataFromLocalStorage("token");
  const location = useLocation();

  const pathArr = location.pathname
    ?.trim()
    .split("/")
    .filter((path) => path.length);
  const pathPrefix = pathArr[0];

  const isAdminPortal = pathPrefix === Portals.admin;
  const isProviderPortal = pathPrefix === Portals.provider;
  const isPatientPortal = pathPrefix === Portals.patient;
  // Compute respective user portal based on role
  const roleString = role?.substring(1, role.length - 1) || "";
  const portal = (role && RolesPortalMap[roleString]) || "";
  // Compute role flags
  const isSuperAdmin = roleString === Roles.PROVIDER_GROUP_ADMIN;
  const isFrontDesk = roleString === Roles.FRONTDESK;
  const isBiller = roleString === Roles.BILLER;
  const isEnb = roleString === Roles.ENB;
  const isStaff =
    roleString === Roles.PROVIDER_GROUP_ADMIN ||
    roleString === Roles.FRONTDESK ||
    roleString === Roles.BILLER ||
    roleString === Roles.ADMISSIONS_COORDINATOR;
    roleString === Roles.FRONTDESK ||
    roleString === Roles.BILLER ||
    roleString === Roles.ENB;
  const isProviderGroupAdmin = roleString === Roles.PROVIDER_GROUP_ADMIN;
  const isProvider =
    roleString === Roles.PSYCHIATRIST ||
    roleString === Roles.THERAPIST ||
    roleString === Roles.NURSE ||
    roleString === Roles.DOCTOR ||
    roleString === Roles.ENB ||
    roleString === Roles.MA;
  const isProviderButNotCloser =
    roleString === Roles.PSYCHIATRIST ||
    roleString === Roles.THERAPIST ||
    roleString === Roles.NURSE ||
    roleString === Roles.DOCTOR ||
    roleString === Roles.ENB ||
    roleString === Roles.NURSE_PRACTITIONERS ||
    roleString === Roles.REMOTE_CLINICIAN;

  const isPatient = roleString === Roles.PATIENT;
  const isPatientDomain =
    window.location.hostname === import.meta.env.VITE_PATIENT_DOMAIN;

  const authorityInfo: AuthorityInfo = {
    hasRouteAuthority: pathPrefix === portal,
    portal,
    role: roleString,
    token,
    isSuperAdmin,
    isFrontDesk,
    isBiller,
    isEnb,
    isStaff,
    isProvider,
    isProviderButNotCloser,
    isPatient,
    isPatientDomain,
    isAdminPortal,
    isProviderPortal,
    isPatientPortal,
    isProviderGroupAdmin,
  };

  return authorityInfo;
};

export default useAuthority;
