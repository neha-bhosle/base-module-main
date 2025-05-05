/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { AppointmentStatus } from "../constants/formConst";

export type AppointmentStatusChange = {
  appointmentId: string;
  status?: AppointmentStatus;
  reason?: string;
  chargable?: boolean;
};

export namespace AppointmentStatusChange {
  export enum status {
    COMPLETED = "COMPLETED",
    NO_SHOW = "NO_SHOW",
    CANCELLED = "CANCELLED",
    SCHEDULED = "SCHEDULED",
    CHECKED_IN = "CHECKED_IN",
    PENDING = "PENDING",
    IN_EXAM = "IN_EXAM",
    CONFIRMED = "CONFIRMED",
  }
}
