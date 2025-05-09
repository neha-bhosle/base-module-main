import { ValidationMessages } from "../../../../constants/formConst";
import * as yup from "yup";

export const AddPatientSchema = yup.object().shape({
  profileImage: yup.mixed<File>().nullable().optional(),
  firstName: yup.string().required("First name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last name is required"),
  preferredName: yup.string().optional(),
  dateOfBirth: yup.string().required("Date of birth is required"),
  legalSex: yup.string().optional(),
  genderIdentity: yup.string().optional(),
  phoneNumber: yup.string().required("Phone number is required"),
  emailId: yup
    .string()
    .required(ValidationMessages.EmailRequired)
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: ValidationMessages.ValidEmailRequired,
    })
    .required(ValidationMessages.ValidEmailRequired)
    .max(255, ValidationMessages.EmailMaxLength),
  ethnicity: yup.string().optional(),
  race: yup.string().optional(),
  preferredLanguage: yup.string().optional(),
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup.string().required("Zipcode is required"),
  emergencyName: yup.string().optional(),
  emergencyPhone: yup.string().optional(),
  relationship: yup.string().optional(),
  isResponsibleParty: yup.boolean().optional(),
  phoneAppointmentReminders: yup.boolean().optional(),
  emailAppointmentReminders: yup.boolean().optional(),
  primaryClinician: yup.string().optional(),
  secondaryClinician: yup.string().optional(),
  sameAsEmergencyContact: yup.boolean().optional(),
  isResponsiblePartyClinician: yup.boolean().optional(),
});

export const AddPatientInsuranceSchema = yup.object().shape({
  paymentMethod: yup.string().required("Payment method is required"),
  insuranceName: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Insurance name is required"),
  }),
  memberId: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Member ID is required"),
  }),
  groupId: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Group ID is required"),
  }),
  patientRelationship: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Patient relationship is required"),
  }),
  firstName: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("First name is required"),
  }),
  lastName: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Last name is required"),
  }),
  dateOfBirth: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Date of birth is required"),
  }),
});
