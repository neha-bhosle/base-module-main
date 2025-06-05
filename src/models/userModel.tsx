import { ProviderGroupResponse } from "./providerGroup";
import { Action } from "./staffModel";

/* eslint-disable @typescript-eslint/no-explicit-any */
type State = {
  name: string;
  code: string;
  dst: boolean;
};

type Address = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
};

type AvailabilitySlot = {
  duration: number;
  status: string;
  startTime: string;
  endTime: string;
  timeZone: string;
};

export type UserProfile = {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role?: string;
  gender?: string;
  npi?: number;
  fax?: string;
  states?: State[];
  bio?: string;
  expertise?: string;
  experience?: number;
  address?: Address;
  availabilitySlots?: AvailabilitySlot[];
  active: boolean | string | undefined;
  avatar: string | null | undefined;
  archive: boolean | string | undefined;
  lastLogin: string | null;
  signature?: string;
  link: string | null | undefined;
  followup?: boolean;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  iamId?: string;
  state?: string | null | undefined;
  sign?: string | null | undefined;
  mrn?: string;
  ssn?: string;
  birthDate?: string;
  emergContactFirstName?: string;
  emergContactLastName?: string;
  emergContactNumber?: string;
  messageConsent?: boolean | null;
  callConsent?: boolean | null;
  emailConsent?: boolean | null;
  provider?: string | null;
  insurances?: any[];
  note?: string | null;
  source?: string;
  lastVisit?: string | null;
  balance?: number;
  intakeStatus?: boolean;
  consentStatus?: boolean;
  created?: string;
  status?: string | null;
  document?: boolean;
  consent?: boolean;
  intakeRejected?: boolean;
  roleType?: string;
  roleTable?: string;
  staffName?: string;
  action?: Action[];
  xTenant?: string;
  providerGroup?: null | undefined | ProviderGroupResponse;
};
