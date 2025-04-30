export interface Action {
  label: string;
  route: string;
}

export interface staffResponse {
  uuid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  active?: string;
  archive?: string;
  avatar?: string | null | undefined;
  role?: string;
  lastLogin?: string;
  roleType?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  iamId?: string;
  state?: string | null | undefined;
  sign?: string | null | undefined;
  link?: string | null | undefined;
  status?: string;
  roleTable?: string;
  staffName?: string;
  action?: Action[];
}

export type GetAllStaffPayload = {
  page: string | number;
  size: string | number;
  searchString?: string;
  xTenant?: string;
};
