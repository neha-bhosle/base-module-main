import * as yup from "yup";

export const ContactsSchema = yup.object().shape({
  contactType: yup.string().required("Contact type is required"),
  fullName: yup.string().required("Full name is required"),
  contactNumber: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9-+()]*$/, "Please enter a valid contact number"),
  faxNumber: yup
    .string()
    .optional()
    .matches(/^[0-9-+()]*$/, "Please enter a valid fax number"),
  emailId: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),
});
