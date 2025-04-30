export interface State {
  name?: string;
  code?: string;
  dst?: boolean;
}

interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string;
}

export type AvailabilitySlots = {
  duration: number | undefined | null;
  endTime: string;
  startTime: string;
  status: string;
  timeZone: string;
};

export interface providerResponse {
  uuid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: string | undefined;
  gender?: string;
  npi?: string | number | undefined;
  fax?: string;
  states?: State[];
  bio?: string;
  expertise?: string;
  experience?: string | number | undefined;
  address?: Address;
  availabilitySlots?: null | AvailabilitySlots[];
  active?: string | boolean | undefined;
  avatar?: string | null | undefined;
  archive?: boolean | string;
  lastLogin?: string | null | undefined;
  signature?: string | null | undefined;
  link?: string | null | undefined;
  followup?: boolean;
  state?: State[] | null | undefined | string;
  licensedState?: State[] | null | undefined;
  roleWithoutFormat?: string;
  licensedStatesAlterData: string | null | undefined;
  xTenant: string | undefined;
  emailVerified?: boolean;
}

export type GetAllProviderPayload = {
  uuid?: string;
  page: string | number;
  size: string | number;
  searchString?: string;
  role?: string;
  sortBy?: string;
  active?: string | boolean | undefined;
  xTenant?: string;
};

export type GetAllVisiTypePayload = {
  page: string | number;
  size: string | number;
  sortBy?: string;
  // sortDirection;
  searchString?: string;
  active?: string | boolean | undefined | null;
};
