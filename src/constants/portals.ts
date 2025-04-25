import { StringMap } from "./roles";

export const Portals: StringMap = {
  admin: "admin",
  provider: "provider",
  patient: "patient",
  staff: "staff"
};

export const PortalStartingRoute: StringMap = {
  admin: `/${Portals.admin}/provider`,
};
