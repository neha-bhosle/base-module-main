export const contactTableHeaders = [
  { id: "name", label: "Name", type: "text" },
  { id: "contacttype", label: "Contact Type", type: "text" },
  { id: "address", label: "Address", type: "text" },
  { id: "contact", label: "Contact", type: "text" },
  { id: "fax", label: "Fax", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "action", label: "Action", type: "action" },
];

export const staffTableHeaders = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "contact", label: "Contact", type: "text" },
  { id: "role", label: "Role", type: "text" },
  { id: "status", label: "Status", type: "radio" },
  { id: "action", label: "Action", type: "action" },
];

export const clinicianTableHeaders = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email ID", type: "text" },
  { id: "contact", label: "Contact Number", type: "text" },
  { id: "npinumber", label: "NPI Number", type: "text" },
  { id: "worklocation", label: "Work Location", type: "text" },
  { id: "languagesSpoken", label: "Language", type: "text" },
  { id: "supervisingClinician", label: "Supervising Clinician", type: "text" },
  { id: "status", label: "Status", type: "radio" },
  { id: "action", label: "Action", type: "action" },
];

export const rolesTableHeaders = [
  { id: "description", label: "Permission", type: "text" },
  { id: "superAdmin", label: "Super Admin", type: "checkbox" },
  { id: "clinician", label: "Clinician", type: "checkbox" },
  { id: "staff", label: "Staff", type: "checkbox" },
  { id: "client", label: "Client", type: "checkbox" },
  { id: "recordCustodian", label: "Record Custodian", type: "checkbox" },
];

export const locationTableHeaders = [
  { id: "locationName", label: "Location Name", type: "text" },
  { id: "contactNumber", label: "Contact Number", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "groupNPI", label: "Group NPI", type: "text" },
  { id: "fax", label: "Fax", type: "text" },
  { id: "address", label: "Address", type: "text" },
  { id: "status", label: "Status", type: "radio" },
  { id: "action", label: "Action", type: "action" },
];

export const practiceData = {
  name: "Practice Easily",
  clinicNPI: "2365987458",
  emailID: "abc@example.com",
  taxType: "TIN",
  taxonomyCode: "1234567890",
  taxNumber: "123456 (TIN)",
  address: "205 Champion Way Suite 11 Georgetown, KY 40324",
  contactNumber: "502-603-0020",
};

export const feeScheduleTableHeaders = [
  { id: "procedureCode", label: "Procedure Code", type: "text" },
  { id: "rate", label: "Rate", type: "text" },
  { id: "codeType", label: "Code Type", type: "text" },
  { id: "action", label: "Action", type: "action" },
];

export const patientTableHeaders = [
  { id: "mrn", label: "MRN", type: "text" },
  { id: "patientName", label: "Client Name", type: "patientName" },
  { id: "dob", label: "DOB", type: "text" },
  { id: "emailId", label: "Email ID", type: "text" },
  { id: "contactNumber", label: "Contact Number", type: "text" },
  { id: "clinician", label: "Clinician", type: "text" },
  { id: "memberSince", label: "Member Since", type: "text" },
  { id: "paymentMethod", label: "Payment Method", type: "text" },
  { id: "status", label: "Status", type: "chip" },
  { id: "action", label: "Action", type: "action" },
];

export const PATIENT_TABLE_HEADERS = [
  {
    id: "mrn",
    label: "MRN",
    type: "text",
  },
  {
    id: "patientName",
    label: "Patient Name",
    type: "text",
  },
  {
    id: "dob",
    label: "DOB",
    type: "text",
  },
  {
    id: "emailId",
    label: "Email ID",
    type: "text",
  },
  {
    id: "contactNumber",
    label: "Contact Number",
    type: "text",
  },
  {
    id: "clinician",
    label: "Clinician",
    type: "text",
  },
  {
    id: "memberSince",
    label: "Member Since",
    type: "text",
  },
  {
    id: "paymentMethod",
    label: "Payment Method",
    type: "text",
  },
  {
    id: "status",
    label: "Status",
    type: "chip",
  },
  {
    id: "action",
    label: "Action",
    sortable: false,
    type: "action",
  },
];

export const appointmentTableHeaders = [
  { id: "clientName", label: "Client Name", type: "text" },
  { id: "apptMode", label: "Appt Mode", type: "text" },
  { id: "time", label: "Time", type: "text" },
  { id: "apptType", label: "Appt Type", type: "text" },
  { id: "intakeForm", label: "Intake Form", type: "intakeForm" },
  { id: "dob", label: "DOB", type: "text" },
  { id: "contactNo", label: "Contact No", type: "text" },
  { id: "clinician", label: "Clinician", type: "text" },
  { id: "status", label: "Status", type: "chip" },
  { id: "action", label: "Action", type: "action" },
];
