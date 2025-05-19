export type AllTypes = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  npiNumber: string;
  archive: boolean;
  role: "THERAPIST" | "PSYCHIATRIST" | "SUPERVISOR" | "PRACTICE_OWNER"; // Add other roles as needed
  languagesSpoken: string[];
  locationUuids: string[] | null;
  supervisorClinicianId: string | null;
  supervisorClinicianName: string;
  locationNames: string[];
  uuid: string;
  locationName: string;
  emailId: string;
  groupNpiNumber: string;
  status: boolean;
  fax: string;
  address: Address;
  size: number;
  page: number;
  searchString: string;
  xTenant: string;
  faxNumber: string;
};

type Address = {
  uuid: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zipcode: string;
};

export type ClinicianPayload = {
  uuid: string;
  firstName: string;
  lastName: string;
  emailId: string;
  contactNumber: string;
  npiNumber: string;
  status: boolean;
  archive: boolean;
  role: "THERAPIST" | "PSYCHIATRIST" | "SUPERVISOR" | "PRACTICE_OWNER"; // Add other roles as needed
  languagesSpoken: string[];
  locationUuids: string[] | null;
  supervisorClinicianId: string | null;
  supervisorClinicianName: string;
  locationNames: string[];
  xTenant: string;
  size: number;
  page: number;
  searchString: string;
  email: string;
};

export type ContactPayload = {
  uuid: string;
  contactType: "LAB" | "PHARMACY" | "IMAGING_CENTER" | "OTHER";
  name: string;
  contactNumber: string;
  faxNumber: string;
  emailId: string;
  address: Address;
  xTenant: string;
  size: number;
  page: number;
  searchString: string;
};

export type StaffPayload = {
  uuid?: string;
  firstName?: string;
  lastName?: string;
  emailId?: string;
  contactNumber?: string;
  status?: boolean;
  role?:
    | "FRONT_OFFICE_ADMIN"
    | "BACK_OFFICE_ADMIN"
    | "PRACTICE_OWNER"
    | "PROVIDER"
    | "THERAPIST";
  xTenant: string;
  size: number;
  page: number;
  searchString: string;
};

export type USState =
  | "Alabama"
  | "Alaska"
  | "Arizona"
  | "Arkansas"
  | "California"
  | "Colorado"
  | "Connecticut"
  | "Delaware"
  | "Florida"
  | "Georgia"
  | "Hawaii"
  | "Idaho"
  | "Illinois"
  | "Indiana"
  | "Iowa"
  | "Kansas"
  | "Kentucky"
  | "Louisiana"
  | "Maine"
  | "Maryland"
  | "Massachusetts"
  | "Michigan"
  | "Minnesota"
  | "Mississippi"
  | "Missouri"
  | "Montana"
  | "Nebraska"
  | "Nevada"
  | "New Hampshire"
  | "New Jersey"
  | "New Mexico"
  | "New York"
  | "North Carolina"
  | "North Dakota"
  | "Ohio"
  | "Oklahoma"
  | "Oregon"
  | "Pennsylvania"
  | "Rhode Island"
  | "South Carolina"
  | "South Dakota"
  | "Tennessee"
  | "Texas"
  | "Utah"
  | "Vermont"
  | "Virginia"
  | "Washington"
  | "West Virginia"
  | "Wisconsin"
  | "Wyoming";

export type ClinicianMapPayload = {
  uuid: string;
  firstName: string;
  lastName: string;
};

export type GetClinicianPayload = {
  uuid: string;
  firstName: string;
  lastName: string;
  emailId: string;
  contactNumber: string;
  npiNumber: string;
  status: boolean;
  archive: boolean;
  role:
    | "THERAPIST"
    | "PSYCHIATRIST"
    | "SUPERVISOR"
    | "PRACTICE_OWNER"
    | "FRONT_OFFICE_ADMIN"; // Extend as needed
  languagesSpoken: string[];
  locationUuids: string[] | null;
  supervisorClinicianId: string | null;
  supervisorClinicianName: string;
  locationNames: string[];
};

export type LocationPayload = {
  uuid: string;
  locationName: string;
  contactNumber: string;
  emailId: string;
  groupNpiNumber: string;
  status: boolean;
  fax: string;
  address: Address;
  xTenant: string;
  size: number;
  page: number;
  searchString: string;
};

export type ProfilePayload = {
  uuid: string;
  clinicName: string;
  npiNumber: string;
  taxType: "EIN" | "SSN"; // Add more if applicable
  taxNumber: string;
  contactNumber: string;
  emailId: string;
  taxonomy: string;
  address: Address;
  xTenant: string;
  size: number;
  page: number;
  searchString: string;
};

export type OfficeLocationPayload = {
  // ... existing code ...
};
