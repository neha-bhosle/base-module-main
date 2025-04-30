export const apiStatus = {
  LOADING: "loading" as string,
  SUCCEEDED: "succeeded" as string,
  FAILED: "failed" as string,
  IDLE: "idle" as string
};

export enum ViewMode {
  EDIT = "Edit",
  VIEW = "View",
  DELETE = "Delete",
  RESTORE = "Restore",
  OPEN_CHART = "Open Chart",
  RESCHEDULE = "Reschedule",
  CANCEL = "Cancel",
  CONNECT_TO_VIDEO = "Connect to Video",
  VIEW_NOTE = "View Note",
  NO_SHOW = "No-show",
  CLOSER_NOTE = "Closer note",
  CONSULT_NOTE = "Consult note",
  VIEW_CLOSER_NOTE = "View closer note",
  VIEW_CONSULT_NOTE = "View consult note",
  COPY = "Copy"
}
