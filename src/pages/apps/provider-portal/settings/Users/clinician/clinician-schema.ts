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
    .required("Contact number is required")
    .matches(/^[0-9-+()]*$/, "Please enter a valid contact number"),
  npiNumber: yup
    .string()
    .required("NPI number is required")
    .matches(/^\d{10}$/, "Please enter a valid 10-digit NPI number"),
  workLocations: yup
    .array()
    .of(yup.string().defined())
    .required("Work locations are required"),
  languagesSpoken: yup
    .array()
    .of(yup.string().defined())
    .required("Languages are required"),
  supervisingClinician: yup.string().optional(),
  role: yup.string().required("Role is required"),
});
