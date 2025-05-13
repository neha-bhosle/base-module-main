import * as yup from "yup";

export const EditProfileSchema = yup.object().shape({
  clinicName: yup.string().required("Name is required"),
  npiNumber: yup.string().required("NPI number is required"),
  contactNumber: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9-+()]*$/, "Please enter a valid contact number"),
  emailId: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  taxType: yup.string().optional(),
  taxNumber: yup.string().optional(),
  taxonomy: yup.string().optional(),

  line1: yup.string().required("Address line 1 is required"),
  line2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),
});
