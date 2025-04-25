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
  isCloser: boolean;
  isStaffWoSuperAdmin: boolean;
  isPsychiatrist: boolean;
  isTherapist: boolean;
  isProvider: boolean;
  isProviderButNotCloser: boolean;
  isPatient: boolean;
  isPatientDomain: boolean;
  isAdminPortal: boolean;
  isProviderPortal: boolean;
  isPatientPortal: boolean;
  isProviderGroupAdmin: boolean;
  isSetter: boolean;
  isAdmissionsCoordinator: boolean;
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
  const isSetter = roleString === Roles.SETTER;
  const isEnb = roleString === Roles.ENB;
  const isCloser = roleString === Roles.RESOLUTION_SPECIALIST;
  const isStaff =
    roleString === Roles.PROVIDER_GROUP_ADMIN ||
    roleString === Roles.FRONTDESK ||
    roleString === Roles.BILLER ||
    roleString === Roles.ADMISSIONS_COORDINATOR ||
    roleString === Roles.SETTER ||
    roleString === Roles.PATIENT_EDUCATOR ||
    roleString === Roles.ACCOUNTANT ||
    roleString === Roles.IT_SUPPORT ||
    roleString === Roles.QA_COMPLIANCE ||
    roleString === Roles.ADMISSIONS_COORDINATOR;
  const isStaffWoSuperAdmin =
    roleString === Roles.FRONTDESK || roleString === Roles.BILLER || roleString === Roles.ENB;
  const isPsychiatrist = roleString === Roles.PSYCHIATRIST;
  const isTherapist = roleString === Roles.THERAPIST;
  const isProviderGroupAdmin = roleString === Roles.PROVIDER_GROUP_ADMIN;
  const isProvider =
    roleString === Roles.PSYCHIATRIST ||
    roleString === Roles.THERAPIST ||
    roleString === Roles.NURSE ||
    roleString === Roles.DOCTOR ||
    roleString === Roles.ENB ||
    roleString === Roles.NURSE_PRACTITIONERS ||
    roleString === Roles.CRNA ||
    roleString === Roles.PHARMACIST ||
    roleString === Roles.LAB_SPECIALIST ||
    roleString === Roles.REMOTE_CLINICIAN ||
    roleString === Roles.RESOLUTION_SPECIALIST ||
    roleString === Roles.MA;
  const isProviderButNotCloser =
    roleString === Roles.PSYCHIATRIST ||
    roleString === Roles.THERAPIST ||
    roleString === Roles.NURSE ||
    roleString === Roles.DOCTOR ||
    roleString === Roles.ENB ||
    roleString === Roles.NURSE_PRACTITIONERS ||
    roleString === Roles.CRNA ||
    roleString === Roles.PHARMACIST ||
    roleString === Roles.LAB_SPECIALIST ||
    roleString === Roles.REMOTE_CLINICIAN;

  const isPatient = roleString === Roles.PATIENT;
  const isPatientDomain = window.location.hostname === import.meta.env.VITE_PATIENT_DOMAIN;
  const isAdmissionsCoordinator = roleString === Roles.ADMISSIONS_COORDINATOR;

  const authorityInfo: AuthorityInfo = {
    hasRouteAuthority: pathPrefix === portal,
    portal,
    role: roleString,
    token,
    isSuperAdmin,
    isFrontDesk,
    isBiller,
    isEnb,
    isCloser,
    isStaff,
    isStaffWoSuperAdmin,
    isPsychiatrist,
    isTherapist,
    isProvider,
    isProviderButNotCloser,
    isPatient,
    isPatientDomain,
    isAdminPortal,
    isProviderPortal,
    isPatientPortal,
    isProviderGroupAdmin,
    isSetter,
    isAdmissionsCoordinator
  };

  return authorityInfo;
};

export default useAuthority;
