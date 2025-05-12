import { ValidationMessages } from "../../../../constants/formConst";
import * as yup from "yup";

export const AddPatientSchema = yup.object().shape({
  // Basic Information
  profileImage: yup.mixed<File>().nullable().optional(),
  firstName: yup.string().required("First name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last name is required"),
  preferredName: yup.string().optional(),
  dateOfBirth: yup.string().required("Date of birth is required"),
  legalSex: yup.string().optional(),
  genderIdentity: yup.string().optional(),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  emailId: yup
    .string()
    .required(ValidationMessages.EmailRequired)
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: ValidationMessages.ValidEmailRequired,
    })
    .max(255, ValidationMessages.EmailMaxLength),
  ethnicity: yup.string().optional(),
  race: yup.string().optional(),
  preferredLanguage: yup.string().optional(),

  // Address
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup
    .string()
    .required("Zipcode is required")
    .matches(/^\d{5}(-\d{4})?$/, "Invalid zipcode format"),

  // Emergency Contact
  emergencyName: yup.string().optional(),
  emergencyPhone: yup
    .string()
    .optional()
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  relationship: yup.string().optional(),
  isResponsibleParty: yup.boolean().optional(),

  // Clinician Information
  primaryClinician: yup.string().optional(),
  secondaryClinician: yup.string().optional(),
  sameAsEmergencyContact: yup.boolean().optional(),
  isResponsiblePartyClinician: yup.boolean().optional(),

  // Appointment Reminders
  phoneAppointmentReminders: yup.boolean().optional(),
  emailAppointmentReminders: yup.boolean().optional(),

  // Payment Method
  paymentMethod: yup.string().optional(),

  // Primary Insurance - Only required if paymentMethod is "insurance"
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
  subscriberFirstName: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Subscriber first name is required"),
  }),
  subscriberLastName: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Subscriber last name is required"),
  }),
  subscriberDateOfBirth: yup.string().when("paymentMethod", {
    is: "insurance",
    then: (schema) => schema.required("Subscriber date of birth is required"),
  }),

  // Secondary Insurance - Required fields when secondary insurance is shown
  secondaryInsuranceName: yup.string().test({
    name: "secondaryInsuranceRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary insurance name is required",
          path: "secondaryInsuranceName",
        });
      }
      return true;
    },
  }),
  secondaryMemberId: yup.string().test({
    name: "secondaryMemberIdRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary member ID is required",
          path: "secondaryMemberId",
        });
      }
      return true;
    },
  }),
  secondaryGroupId: yup.string().test({
    name: "secondaryGroupIdRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary group ID is required",
          path: "secondaryGroupId",
        });
      }
      return true;
    },
  }),
  secondaryPatientRelationship: yup.string().test({
    name: "secondaryPatientRelationshipRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary patient relationship is required",
          path: "secondaryPatientRelationship",
        });
      }
      return true;
    },
  }),
  secondarySubscriberFirstName: yup.string().test({
    name: "secondarySubscriberFirstNameRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary subscriber first name is required",
          path: "secondarySubscriberFirstName",
        });
      }
      return true;
    },
  }),
  secondarySubscriberLastName: yup.string().test({
    name: "secondarySubscriberLastNameRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary subscriber last name is required",
          path: "secondarySubscriberLastName",
        });
      }
      return true;
    },
  }),
  secondarySubscriberDateOfBirth: yup.string().test({
    name: "secondarySubscriberDateOfBirthRequired",
    test: function (value) {
      const { paymentMethod, showSecondaryInsurance } = this.parent;
      if (paymentMethod === "insurance" && showSecondaryInsurance && !value) {
        return this.createError({
          message: "Secondary subscriber date of birth is required",
          path: "secondarySubscriberDateOfBirth",
        });
      }
      return true;
    },
  }),
  showSecondaryInsurance: yup.boolean().optional(),
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
