import * as yup from "yup";

export const LocationSchema = yup.object().shape({
  locationName: yup.string().required("Location name is required"),
  contactNumber: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9-+()]*$/, "Please enter a valid contact number"),
  emailId: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  groupNpiNumber: yup
    .string()
    .required("Group NPI number is required")
    .matches(/^\d{10}$/, "Please enter a valid 10-digit NPI number"),
  status: yup.string().optional(),
  fax: yup
    .string()
    .optional()
    .matches(/^[0-9-+()]*$/, "Please enter a valid fax number"),
  addressLine1: yup.string().required("Address line 1 is required"),
  addressLine2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),
});
