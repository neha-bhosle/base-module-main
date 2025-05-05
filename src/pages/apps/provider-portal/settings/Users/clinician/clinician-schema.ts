import * as yup from "yup";

export const ClinicianSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emailId: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  contactNumber: yup
    .string()
    .optional()
    .matches(/^[0-9-+()]*$/, "Please enter a valid contact number"),
  npiNumber: yup
    .string()
    .optional()
    .matches(/^\d{10}$/, "Please enter a valid 10-digit NPI number"),
  workLocations: yup.string().optional(),
  languages: yup.string().optional(),
  supervisingClinician: yup.string().optional(),
  role: yup.string().optional(),
});
