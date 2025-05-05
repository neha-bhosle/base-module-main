export enum ValidationMessages {
  OtpRequired = "OTP is required",
  OtpLength = "OTP must be exactly 6 digits",
  NewPasswordRequired = "Please enter your new password",
  PasswordMinLength = "Password must be at least 6 characters",
  ConfirmPasswordRequired = "Please confirm your password",
  PasswordsMustMatch = "Passwords must match",
  EmailRequired = "Email is required",
  ValidEmailRequired = "Please enter a valid Email",
  EmailMaxLength = "Email should be at most 255 characters",
  PasswordRequired = "Password is required",
}

export enum SettingsFormMessages {
  MAX_FILE_SIZE = "Maximum file size: 5MB",
  SUPPORTED_FILES = "Supported files: PNG, JPG, JPEG",
}

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
  COPY = "Copy",
}

export enum UnsubscribeReason {
  CONTENT_NOT_RELEVANT = "CONTENT_NOT_RELEVANT",
  TOO_MANY_EMAILS = "TOO_MANY_EMAILS",
  FOUND_ALTERNATIVE_SERVICES = "FOUND_ALTERNATIVE_SERVICES",
  NO_LONGER_INTERESTED = "NO_LONGER_INTERESTED",
  OTHER = "OTHER",
}

export enum AppointmentStatus {
  COMPLETED = "COMPLETED",
  NO_SHOW = "NO_SHOW",
  CANCELLED = "CANCELLED",
  SCHEDULED = "SCHEDULED",
  CHECKED_IN = "CHECKED_IN",
  PENDING = "PENDING",
  IN_EXAM = "IN_EXAM",
  CONFIRMED = "CONFIRMED",
}

export enum UserRole {
  PROVIDER_GROUP_ADMIN = "PROVIDER_GROUP_ADMIN",
  FRONTDESK = "FRONTDESK",
  BILLER = "BILLER",
  ENB = "ENB",
  PSYCHIATRIST = "PSYCHIATRIST",
  THERAPIST = "THERAPIST",
  NURSE = "NURSE",
  PATIENT = "PATIENT",
  ANONYMOUS = "ANONYMOUS",
  DOCTOR = "DOCTOR",
  NURSE_PRACTITIONERS = "NURSE_PRACTITIONERS",
  CRNA = "CRNA",
  PHARMACIST = "PHARMACIST",
  LAB_SPECIALIST = "LAB_SPECIALIST",
  REMOTE_CLINICIAN = "REMOTE_CLINICIAN",
  ADMISSIONS_COORDINATOR = "ADMISSIONS_COORDINATOR",
  PATIENT_EDUCATOR = "PATIENT_EDUCATOR",
  SETTER = "SETTER",
  ACCOUNTANT = "ACCOUNTANT",
  IT_SUPPORT = "IT_SUPPORT",
  QA_COMPLIANCE = "QA_COMPLIANCE",
  SUPERADMIN = "SUPER_ADMIN",
  SUPPORT = "SUPPORT",
}

export enum RoleType {
  PROVIDER = "PROVIDER",
  STAFF = "STAFF",
  PATIENT = "PATIENT",
}

export enum SettingsFormLabels {
  // Section Titles
  PRACTICE_INFORMATION = "Practice Information",
  BILLING_ADDRESS = "Billing Address",

  // Practice Information Fields
  CLINIC_NAME = "Clinic Name",
  CLINIC_NPI_NUMBER = "Clinic NPI Number",
  TAX_TYPE = "Tax Type",
  TAX_NUMBER = "Tax Number",
  CONTACT_NUMBER = "Contact Number",
  EMAIL_ID = "Email ID",
  TAXONOMY = "Taxonomy",

  // Billing Address Fields
  ADDRESS_LINE_1 = "Address line 1",
  ADDRESS_LINE_2 = "Address line 2",
  CITY = "City",
  STATE = "State",
  ZIP_CODE = "Zip Code",
}

export enum SettingsFormPlaceholders {
  // Practice Information Fields
  ENTER_CLINIC_NAME = "Enter Clinic Name",
  ENTER_CLINIC_NPI_NUMBER = "Enter Clinic NPI Number",
  SELECT_TAX_TYPE = "Select Tax Type",
  ENTER_TAX_NUMBER = "Enter Tax Number",
  ENTER_CONTACT_NUMBER = "Enter Contact Number",
  ENTER_EMAIL_ID = "Enter Email ID",
  ENTER_TAXONOMY = "Enter Taxonomy",

  // Billing Address Fields
  ENTER_ADDRESS_LINE_1 = "Enter address line 1",
  ENTER_ADDRESS_LINE_2 = "Enter address line 2",
  ENTER_CITY = "Enter City",
  SELECT_STATE = "Select State",
  ENTER_ZIP_CODE = "Enter Zip Code",
}

export enum ContactFormLabels {
  CONTACT_TYPE = "Select Contact Type",
  FULL_NAME = "Full Name",
  CONTACT_NUMBER = "Contact Number",
  FAX_NUMBER = "Fax Number",
  EMAIL_ID = "Email ID",
  ADDRESS = "Address",
  CITY = "City",
  STATE = "State",
  ZIP_CODE = "Zip Code",
}

export enum ContactFormPlaceholders {
  SELECT_TYPE = "Select Type",
  ENTER_FULL_NAME = "Enter Full Name",
  ENTER_CONTACT_NUMBER = "Enter Contact Number",
  ENTER_FAX_NUMBER = "Enter Fax Number",
  ENTER_EMAIL_ID = "Enter Email ID",
  ENTER_ADDRESS = "Enter Address",
  SELECT_CITY = "Select City",
  SELECT_STATE = "Select State",
  ENTER_ZIP_CODE = "Enter Zip Code",
}

export enum StaffFormLabels {
  FIRST_NAME = "First Name",
  LAST_NAME = "Last Name",
  EMAIL_ID = "Email ID",
  CONTACT_NUMBER = "Contact Number",
  STATUS = "Status",
  ROLE = "Role",
}

export enum StaffFormPlaceholders {
  ENTER_FIRST_NAME = "Enter First Name",
  ENTER_LAST_NAME = "Enter Last Name",
  ENTER_EMAIL_ID = "Enter Email ID",
  ENTER_CONTACT_NUMBER = "Enter Contact Number",
  SELECT_STATUS = "Select Status",
  SELECT_ROLE = "Select Role",
}

export enum ClinicianFormLabels {
  FIRST_NAME = "First Name",
  LAST_NAME = "Last Name",
  EMAIL_ID = "Email ID",
  CONTACT_NUMBER = "Contact Number",
  NPI_NUMBER = "NPI Number",
  WORK_LOCATIONS = "Work Locations",
  LANGUAGES_SPOKEN = "Languages Spoken",
  SUPERVISING_CLINICIAN = "Supervising Clinician",
  ROLE = "Role",
  SIGNATURE = "Signature",
}

export enum ClinicianFormPlaceholders {
  ENTER_FIRST_NAME = "Enter First Name",
  ENTER_LAST_NAME = "Enter Last Name",
  ENTER_EMAIL_ID = "Enter Email ID",
  ENTER_CONTACT_NUMBER = "Enter Contact Number",
  ENTER_NPI_NUMBER = "Enter NPI Number",
  SELECT_WORK_LOCATIONS = "Select",
  SELECT_LANGUAGES = "Select",
  SELECT_SUPERVISING_CLINICIAN = "Select Supervising Clinician",
  SELECT_ROLE = "Select Role",
}

export enum LocationFormLabels {
  LOCATION_INFORMATION = "Location Information",
  PHYSICAL_ADDRESS = "Physical Address",
  LOCATION_NAME = "Location Name",
  CONTACT_NUMBER = "Contact Number",
  EMAIL_ID = "Email ID",
  GROUP_NPI_NUMBER = "Group NPI Number",
  STATUS = "Status",
  FAX = "Fax",
  ADDRESS_LINE_1 = "Address line 1",
  ADDRESS_LINE_2 = "Address line 2",
  CITY = "City",
  STATE = "State",
  ZIP_CODE = "Zip Code",
}

export enum LocationFormPlaceholders {
  ENTER_CLINIC_NAME = "Enter Clinic Name",
  ENTER_CONTACT_NUMBER = "Enter Contact Number",
  ENTER_EMAIL_ID = "Enter Email ID",
  ENTER_GROUP_NPI_NUMBER = "Enter Group NPI Number",
  SELECT_STATUS = "Select Status",
  ENTER_FAX = "Enter Fax",

  ENTER_ADDRESS_LINE_1 = "Enter address line 1",
  ENTER_ADDRESS_LINE_2 = "Enter address line 2",
  SELECT_CITY = "Select City",
  SELECT_STATE = "Select State",
  ENTER_ZIP_CODE = "Enter Zip Code",
}

export enum PracticeSettingsTabs {
  PROFILE = "Profile",
  LOCATION = "Location",
  USER = "User",
  ROLES = "Roles",
  CONTACT = "Contact",
}

export enum PracticeSettingsRoutes {
  PROFILE = "profile",
  LOCATION = "location",
  USER = "user",
  ROLES = "roles",
  CONTACT = "contact",
}

export enum UserTabs {
  STAFF = "Staff",
  CLINICIAN = "Clinician",
}

export enum UserTabRoutes {
  STAFF = "staff",
  CLINICIAN = "clinician",
}

export enum LocationTableLabels {
  LOCATION_NAME = "Location Name",
  CONTACT_NUMBER = "Contact Number",
  EMAIL = "Email",
  GROUP_NPI = "Group NPI",
  FAX = "Fax",
  ADDRESS = "Address",
  STATUS = "Status",
  ACTION = "Action",
}

export enum LocationStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum LocationActions {
  EDIT = "Edit",
  DELETE = "Delete",
}

export enum ProfileFieldLabels {
  CLINIC_NPI_NUMBER = "Clinic NPI Number",
  TAX_TYPE = "Tax Type",
  TAX_NUMBER = "Tax Number",
  CONTACT_NUMBER = "Contact Number",
  EMAIL_ID = "Email ID",
  TAXONOMY_CODE = "Taxonomy Code",
  ADDRESS = "Address",
  PRACTICE_NAME = "Practice Easily",
}

export enum ProfilePlaceholders {
  ENTER_CLINIC_NPI = "Enter clinic NPI number",
  ENTER_TAX_TYPE = "Enter tax type",
  ENTER_TAX_NUMBER = "Enter tax number",
  ENTER_CONTACT_NUMBER = "Enter contact number",
  ENTER_EMAIL = "Enter email",
  ENTER_TAXONOMY_CODE = "Enter taxonomy code",
  ENTER_ADDRESS = "Enter address",
}

export enum ProfileValidationMessages {
  REQUIRED_CLINIC_NPI = "Clinic NPI number is required",
  REQUIRED_TAX_TYPE = "Tax type is required",
  REQUIRED_TAX_NUMBER = "Tax number is required",
  REQUIRED_CONTACT_NUMBER = "Contact number is required",
  REQUIRED_EMAIL = "Email is required",
  REQUIRED_TAXONOMY_CODE = "Taxonomy code is required",
  REQUIRED_ADDRESS = "Address is required",
}

export enum SettingsFormConstants {
  PRACTICE_SETTINGS = "Practice Settings",
  EDIT_PROFILE = "Edit Profile",
  ADD_NEW_LOCATION = "Add New Location",
  ADD_NEW_CONTACT = "Add New Contact",
}
