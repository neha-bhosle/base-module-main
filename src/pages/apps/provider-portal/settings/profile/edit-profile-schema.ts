import * as yup from "yup";

export const EditProfileSchema = yup.object().shape({
  username: yup.string().required("Clinic name is required"),
  clinicNpiNumber: yup.string().required("Clinic NPI number is required"),
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

  addressLine1: yup.string().required("Address line 1 is required"),
  addressLine2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),

});
