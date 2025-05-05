/* eslint-disable @typescript-eslint/no-namespace */
export type Address = {
  line1: string;
  line2?: string | null | undefined;
  city: string;
  state: string;
  country: string;
  zipcode: string;
};

export type ProviderGroupResponse = {
  uuid?: string;
  emrLink?: string;
  name: string;
  description?: string | null | undefined;
  npi: string;
  logo?: null | string | undefined;
  email: string;
  phone: string;
  website?: string | null;
  fax?: string | null | undefined;
  physicalAddress: Address;
  billingAddress: Address;
  active?: string | boolean;
  primaryColor?: string;
  secondaryColor?: string;
  subDomain?: string;
  archive?: string | boolean;
  favicon?: string | null | undefined;
  sameAsPhysicalAddress?: boolean;
  avatar?: string | null | undefined;
  drugVendor?: string | null;
  videoVendor?: string | null;
  paymentVendor?: string | null;
  googleTagManagerId?: string | null;
  behaviourAnalyticsTool?: string | null;
};

export interface EditProviderGroupProfile {
  uuid?: string | null | undefined;
  name: string;
  email: string;
  website?: string | null;
  phone: string;
  fax?: string | null | undefined;
  npi: string;
  physicalAddress: Address;
  billingAddress: Address;
  description?: string | null | undefined | number;
  avatar?: string | null | undefined;
  active?: string;
  colorCode?: string;
  archive?: string;
  favicon?: string | null | undefined;
  sameAsPhysicalAddress?: boolean;
}

type LicensedStates = {
  [key: string]: string;
};

export type ProviderUser = {
  states: string[];
  archive: string;
  active: boolean;
  avatar: "";
  firstName: string;
  lastName: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  email: string;
  fax: string;
  address: Address;
  npi: string;
  acceptedInsurance: string[];
  licensedStates: LicensedStates;
  experience: number;
  expertise: string;
  bio: string;
  phone: string;
  role: "THERAPIST" | "ADMIN" | "OTHER";
  uuid: string;
  xTenant?: string;
};

export type StaffUser = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
  uuid: string;
};

export type Insurance = {
  name: string;
  ediCode: string;
};

export type Location = {
  uuid: string;
  name: string;
  phone: string;
  email: string;
  fax: string;
  note: string;
  avatar: string | null;
  timeZone: string;
  active: boolean;
  physicalAddress: Address;
  billingAddress: Address;
  archive: boolean;
};

export type StaffModal = {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  active: boolean;
  archive: boolean;
  avatar: string | null;
  role: string;
  lastLogin: string | null;
  roleType: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  iamId: string;
  allowTextMacro: boolean;
  status: string;
  sign: string | null;
};

export type UserType = {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  active: boolean;
  archive: boolean;
  avatar: string;
  role: string;
  lastLogin: string;
  roleType: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  iamId: string;
  allowTextMacro: boolean;
  birthDate: string;
  signature: string;
};

export interface providerProfile {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  active: boolean;
  archive: boolean;
  avatar: string | null;
  role: string;
  lastLogin: string;
  roleType: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  iamId: string;
  birthDate: string;
  signature: string;
}

export type UserProfilePayload = {
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  roleType: string;
};

export type UserProfilePhotoPayload = {
  data: {
    newAvatar: string;
  };
  userId: string;
  xTenant?: string;
};

export type ProfilePhotoProvider = {
  newAvatar: string;
  uuid: string;
};

export type AppointmentSlotBooking = {
  startTime: string;
  endTime: string;
};

export type AppointmentSlotBookingDate = {
  startDate: string;
  endDate: string;
  page: string | number;
  size: string | number;
  state: string;
};

export type KetamineBookAppointmentModel = {
  startTime: string;
  endTime: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  sourceId: string;
  timezone: string;
  state: { code: string };
  contactId: string | null;
  opportunityId: string | null;
  description: string;
  paymentType: string;
};

export type ketamineUserData = {
  id: string;
  opportunityId: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  timeZone: string | null;
  phone: string;
};

export type GetAllProviderGroupPayload = {
  page: string | number;
  size: string | number;
  searchString?: string;
};

export type DeleteRestoreProviderGroupPayload = {
  groupUuid: string;
  status: boolean;
};

export type GetProviderGroupDetailsPayload = {
  uuid: string;
};

export type EditProviderGroupSetting = {
  providerGroupUuid: string;
  drugVendor?: string;
  paymentVendor?: string;
  videoVendor?: string;
  behaviourAnalyticsTool?: string;
  googleTagManagerId?: string;
};

export type PatientDetails = {
  uuid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  mrn?: string;
  ssn?: string;
  birthDate?: string;
  gender?: string;
  emergContactFirstName?: string;
  emergContactLastName?: string;
  emergContactNumber?: string;
  messageConsent?: boolean | null;
  callConsent?: boolean | null;
  emailConsent?: boolean | null;
  active?: boolean;
  address?: Address;
  provider?: ProviderGroupResponse | null;
  note?: string | null;
  source?: string | null;
  lastVisit?: string | null;
  balance?: number;
  avatar?: string | null;
  intakeStatus?: boolean;
  consentStatus?: boolean;
  archive?: boolean;
  signature?: string | null;
  created?: string;
  providerGroup?: ProviderGroupResponse;
  consent?: boolean;
  document?: boolean;
  xTenant?: string;
};

export type PatientTypes = {
  emailVerified?: boolean;
  size: string | number;
  page: number;
  searchString: string;
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  mrn: string;
  ssn: string | null;
  birthDate: string | null;
  gender: string | null;
  emergContactFirstName: string | null;
  emergContactLastName: string | null;
  emergContactNumber: string | null;
  messageConsent: boolean | null;
  callConsent: boolean | null;
  emailConsent: boolean | null;
  active?: string | boolean | undefined;
  address: Address;
  provider: string | null;
  insurances: Array<string>;
  note: string | null;
  source: string;
  lastVisit: string | null;
  balance: number;
  avatar: string | null;
  intakeStatus: boolean;
  consentStatus: boolean;
  archive: boolean;
  signature: string | null;
  created: string;
  status: string;
  videoStatus: boolean;
  audioStatus: boolean;
  network: string | null;
  intakeModified: string;
  consentModified: string | null;
  document: boolean;
  consent: boolean;
  intakeRejected: boolean;
  xTenant?: string;
  key: string;
  value: string;
  dueDate: string;
};

export type PatientAddress = {
  line1: string | null;
  line2: string | null;
  city: string | null;
  state: string;
  country: string | null;
  zipcode: string | null;
};

export interface Form {
  id: number;
  name: string;
}

export interface NotificationTemplateApptType {
  id: number;
  name: string | null;
  email: {
    emailContent: string | null;
    emailReminder: string | null;
  };
  text: {
    textContent: string | null;
    textReminder: string | null;
  };
}

export interface AppointmentSettingType {
  uuid?: string;
  name?: string;
  description?: string;
  color?: string | JSX.Element | null | undefined;
  isPhysical?: boolean;
  isVirtual?: boolean;
  active?: boolean;
  archive?: boolean;
  forms?: string[] | null;
  id?: string | null | undefined;
}

export interface GetAppointmentSettingTypeResponse {
  id: number;
  name: string;
  description: string | null | undefined;
  forms: Form[];
  color: string;
  icon?: string;
  order?: string;
  notificationTemplate: Form[];
  acForm?: [] | null | undefined;
  typeForm: [] | null | undefined;
  questionnaireForm: [] | null | undefined;
}

export interface ServicesTypeResponse {
  id: number;
  name: string;
  description: string | null | undefined;
  location: JSX.Element | Form[];
  duration: string | null | undefined;
  price: string | null | undefined;
  order: string | null | undefined;
}

interface CustomFormVisitType {
  uuid?: string;
  name?: string;
  content?: string | null;
  type?: string;
  providerGroupUuid?: string | null;
  active?: boolean;
}

interface Frequency {
  frequencyNum?: number;
  frequencyUnit?: string;
}

export interface Notification {
  templateUuid?: string;
  templateName?: string;
  type?: string;
  frequency?: Frequency[];
}

export interface VisitType {
  uuid?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  color?: string | undefined;
  isPhysical?: boolean | undefined;
  isVirtual?: boolean | undefined;
  active?: boolean;
  archive?: boolean;
  forms?: string[] | null;
  customForms?: CustomFormVisitType[] | null;
  acForm?: string[] | null | undefined;
  typeForm?: string[] | null | undefined;
  questionnaireForm?: string[] | null | undefined;
  notificationForms?: CustomFormVisitType[] | null;
  notifications?: Notification[] | null | [];
}

interface serviceLocation {
  id?: number;
  address?: string;
}

export interface ServiceVisitType {
  id?: number;
  name?: string;
  price?: string;
  duration?: string;
  appointments?: number;
}

export interface ServiceModal {
  id?: string;
  location?: string;
  selectedLocations?: serviceLocation[];
  name?: string;
  description?: string;
  visitTypes?: ServiceVisitType[];
  category?: string;
  order?: number;
}
