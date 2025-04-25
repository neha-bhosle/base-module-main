export type StringMap = {
  [key: string]: string;
};

export const Roles = {
  PROVIDER_GROUP_ADMIN: "PROVIDER_GROUP_ADMIN",
  FRONTDESK: "FRONTDESK",
  BILLER: "BILLER",
  ENB: "ENB",
  PSYCHIATRIST: "PSYCHIATRIST",
  THERAPIST: "THERAPIST",
  NURSE: "NURSE",
  PATIENT: "PATIENT",
  ANONYMOUS: "ANONYMOUS",
  DOCTOR: "DOCTOR",
  NURSE_PRACTITIONERS: "NURSE_PRACTITIONERS",
  CRNA: "CRNA",
  PHARMACIST: "PHARMACIST",
  LAB_SPECIALIST: "LAB_SPECIALIST",
  REMOTE_CLINICIAN: "REMOTE_CLINICIAN",
  ADMISSIONS_COORDINATOR: "ADMISSIONS_COORDINATOR",
  SETTER: "SETTER",
  PATIENT_EDUCATOR: "PATIENT_EDUCATOR",
  ACCOUNTANT: "ACCOUNTANT",
  IT_SUPPORT: "IT_SUPPORT",
  QA_COMPLIANCE: "QA_COMPLIANCE",
  RESOLUTION_SPECIALIST: "RESOLUTION_SPECIALIST",
  MA: "MA"
};

export const RolesPortalMap: StringMap = {
  PROVIDER_GROUP_ADMIN: "admin",
  FRONTDESK: "staff",
  BILLER: "staff",
  ENB: "provider",
  PSYCHIATRIST: "provider",
  THERAPIST: "provider",
  NURSE: "provider",
  PATIENT: "patient",
  DOCTOR: "provider",
  NURSE_PRACTITIONERS: "provider",
  CRNA: "provider",
  PHARMACIST: "provider",
  LAB_SPECIALIST: "provider",
  REMOTE_CLINICIAN: "provider",
  ADMISSIONS_COORDINATOR: "staff",
  SETTER: "staff",
  PATIENT_EDUCATOR: "staff",
  ACCOUNTANT: "staff",
  IT_SUPPORT: "staff",
  QA_COMPLIANCE: "staff",
  RESOLUTION_SPECIALIST: "provider"
};

export const RoleType = {
  STAFF: "STAFF",
  PROVIDER: "PROVIDER",
  PATIENT: "PATIENT"
};

export const RolesOfUsers = [
  { key: Roles.FRONTDESK, value: "Front desk" },
  { key: Roles.BILLER, value: "Biller" },
  { key: Roles.ENB, value: Roles.ENB },
  { key: Roles.PROVIDER_GROUP_ADMIN, value: "Super Admin" }
];
