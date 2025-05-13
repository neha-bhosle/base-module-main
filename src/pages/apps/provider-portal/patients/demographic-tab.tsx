import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomDatePicker from "../../../../common-components/custom-date-picker/custom-date-picker";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import ImageUpload from "../../../../common-components/image-upload/image-upload";
import {
  PatientEthnicityOptions,
  PatientFormButtons,
  PatientFormLabels,
  PatientFormPlaceholders,
  PatientFormSectionTitles,
  PatientGenderOptions,
  PatientInsuranceOptions,
  PatientLanguageOptions,
  PatientRelationshipOptions,
  PatientRelationshipWithPatientOptions,
  UploadFileComponentConstants,
} from "../../../../constants/formConst";
import { AddPatientSchema } from "./add-patients-schema";
import MultipleFilesUpload, {
  FilesMetaData,
} from "../../../../common-components/multiple-files-upload copy/multiple-files-upload";
import { useState, useEffect } from "react";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../common-components/custom-contact-input/custom-contact-field";
interface FormData {
  profileImage?: File | null;
  firstName: string;
  middleName?: string;
  lastName: string;
  preferredName?: string;
  dateOfBirth: string;
  legalSex?: string;
  genderIdentity?: string;
  emailId: string;
  phoneNumber: string;
  ethnicity?: string;
  race?: string;
  preferredLanguage?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipcode: string;
  emergencyName?: string;
  emergencyPhone?: string;
  relationship?: string;
  isResponsibleParty?: boolean;
  phoneAppointmentReminders?: boolean;
  emailAppointmentReminders?: boolean;
  primaryClinician?: string;
  secondaryClinician?: string;
  sameAsEmergencyContact?: boolean;
  isResponsiblePartyClinician?: boolean;
  paymentMethod?: string;
  insuranceName?: string;
  memberId?: string;
  groupId?: string;
  patientRelationship?: string;
  subscriberFirstName?: string;
  subscriberLastName?: string;
  subscriberDateOfBirth?: string;
  secondaryInsuranceName?: string;
  secondaryMemberId?: string;
  secondaryGroupId?: string;
  secondaryPatientRelationship?: string;
  secondarySubscriberFirstName?: string;
  secondarySubscriberLastName?: string;
  secondarySubscriberDateOfBirth?: string;
  showSecondaryInsurance?: boolean;
}

const DemographicTab = () => {
  const [showSecondaryInsurance, setShowSecondaryInsurance] = useState(false);
  const [, setUploadedFrontFiles] = useState<FilesMetaData[]>([]);

  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      profileImage: null,
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      dateOfBirth: "",
      legalSex: "",
      genderIdentity: "",
      emailId: "",
      phoneNumber: "",
      ethnicity: "",
      race: "",
      preferredLanguage: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      emergencyName: "",
      emergencyPhone: "",
      relationship: "",
      isResponsibleParty: false,
      phoneAppointmentReminders: false,
      emailAppointmentReminders: false,
      primaryClinician: "",
      secondaryClinician: "",
      sameAsEmergencyContact: false,
      isResponsiblePartyClinician: false,
      paymentMethod: "",
      insuranceName: "",
      memberId: "",
      groupId: "",
      patientRelationship: "",
      subscriberFirstName: "",
      subscriberLastName: "",
      subscriberDateOfBirth: "",
      secondaryInsuranceName: "",
      secondaryMemberId: "",
      secondaryGroupId: "",
      secondaryPatientRelationship: "",
      secondarySubscriberFirstName: "",
      secondarySubscriberLastName: "",
      secondarySubscriberDateOfBirth: "",
      showSecondaryInsurance: false,
    },
    resolver: yupResolver(AddPatientSchema),
  });

  const paymentMethod = watch("paymentMethod");

  // Update form context when showSecondaryInsurance changes
  useEffect(() => {
    setValue("showSecondaryInsurance", showSecondaryInsurance);
  }, [showSecondaryInsurance, setValue]);

  // Clear secondary insurance fields when hiding the section
  useEffect(() => {
    if (!showSecondaryInsurance) {
      setValue("secondaryInsuranceName", "");
      setValue("secondaryMemberId", "");
      setValue("secondaryGroupId", "");
      setValue("secondaryPatientRelationship", "");
      setValue("secondarySubscriberFirstName", "");
      setValue("secondarySubscriberLastName", "");
      setValue("secondarySubscriberDateOfBirth", "");
    }
  }, [showSecondaryInsurance, setValue]);

  const handleImageChange = (file: File) => {
    setValue("profileImage", file);
  };

  const onSubmit = () => {};

  return (
    <Grid
      sx={{
        position: "relative",
        maxHeight: "calc(100vh - 100px)",
        height: "calc(100vh - 100px)",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none" /* IE and Edge */,
        scrollbarWidth: "none" /* Firefox */,
      }}
    >
      <Grid
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"#F5F5F5"}
        p={0.5}
        borderRadius={2}
        mb={1}
        mr={2}
      >
        <Grid ml={1}>
          <Typography variant="bodyMedium4">
            {PatientFormSectionTitles.PATIENT_INFORMATION}
          </Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)} style={{ minHeight: "100%" }}>
        <Grid bgcolor={"#FFFFFF"} borderRadius={2}>
          <Grid container borderRadius={2} pr={2} pl={2} pt={1} pb={1}>
            <Grid
              item
              xs={12}
              md={1.5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ImageUpload
                initialImage="/src/assets/images/avatar.png"
                onImageChange={handleImageChange}
                size={150}
              />
            </Grid>

            <Grid item xs={12} md={10.5} pl={2}>
              <Grid container spacing={1.8}>
                <Grid item xs={12} md={2}>
                  <CustomLabel
                    label={PatientFormLabels.FIRST_NAME}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_FIRST_NAME}
                        {...field}
                        hasError={!!errors.firstName}
                        errorMessage={errors.firstName?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.MIDDLE_NAME} />
                  <Controller
                    control={control}
                    name="middleName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_MIDDLE_NAME}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.LAST_NAME} isRequired />
                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_LAST_NAME}
                        {...field}
                        hasError={!!errors.lastName}
                        errorMessage={errors.lastName?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.PREFERRED_NAME} />
                  <Controller
                    control={control}
                    name="preferredName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={
                          PatientFormPlaceholders.ENTER_PREFERRED_NAME
                        }
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel
                    label={PatientFormLabels.DATE_OF_BIRTH}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <CustomDatePicker
                        placeholder={PatientFormPlaceholders.SELECT_DATE}
                        value={field.value}
                        handleDateChange={field.onChange}
                        hasError={!!errors.dateOfBirth}
                        errorMessage={errors.dateOfBirth?.message}
                        disableFuture
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.LEGAL_SEX} />
                  <Controller
                    control={control}
                    name="legalSex"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={PatientFormPlaceholders.SELECT_LEGAL_SEX}
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(PatientGenderOptions).map(
                          ([value, label]) => ({
                            value: value.toLowerCase(),
                            label,
                          })
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.GENDER_IDENTITY} />
                  <Controller
                    control={control}
                    name="genderIdentity"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={
                          PatientFormPlaceholders.SELECT_GENDER_IDENTITY
                        }
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(PatientGenderOptions).map(
                          ([value, label]) => ({
                            value: value.toLowerCase(),
                            label,
                          })
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.EMAIL_ID} isRequired />
                  <Controller
                    control={control}
                    name="emailId"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_EMAIL_ID}
                        {...field}
                        hasError={!!errors.emailId}
                        errorMessage={errors.emailId?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel
                    label={PatientFormLabels.PHONE_NUMBER}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <CustomContactInput
                        {...field}
                        hasError={!!errors.phoneNumber}
                        errorMessage={errors.phoneNumber?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.ETHNICITY} />
                  <Controller
                    control={control}
                    name="ethnicity"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={PatientFormPlaceholders.SELECT_ETHNICITY}
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(PatientEthnicityOptions).map(
                          ([value, label]) => ({
                            value: value.toLowerCase(),
                            label,
                          })
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.RACE} />
                  <Controller
                    control={control}
                    name="race"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_RACE}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <CustomLabel label={PatientFormLabels.PREFERRED_LANGUAGE} />
                  <Controller
                    control={control}
                    name="preferredLanguage"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={
                          PatientFormPlaceholders.SELECT_PREFERRED_LANGUAGE
                        }
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(PatientLanguageOptions).map(
                          ([value, label]) => ({
                            value: value.toLowerCase(),
                            label,
                          })
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  display={"flex"}
                  gap={2}
                  flexDirection={"row"}
                >
                  <Grid item xs={12} md={1.89}>
                    <CustomLabel
                      label={PatientFormLabels.ADDRESS_LINE_1}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="addressLine1"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            PatientFormPlaceholders.ENTER_ADDRESS_LINE_1
                          }
                          {...field}
                          hasError={!!errors.addressLine1}
                          errorMessage={errors.addressLine1?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={1.89}>
                    <CustomLabel label={PatientFormLabels.ADDRESS_LINE_2} />
                    <Controller
                      control={control}
                      name="addressLine2"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            PatientFormPlaceholders.ENTER_ADDRESS_LINE_2
                          }
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={1.89}>
                    <CustomLabel label={PatientFormLabels.CITY} isRequired />
                    <Controller
                      control={control}
                      name="city"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={PatientFormPlaceholders.ENTER_CITY}
                          {...field}
                          hasError={!!errors.city}
                          errorMessage={errors.city?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={1.89}>
                    <CustomLabel label={PatientFormLabels.STATE} isRequired />
                    <Controller
                      control={control}
                      name="state"
                      render={({ field }) => (
                        <CustomSelect
                          placeholder={PatientFormPlaceholders.SELECT_STATE}
                          {...field}
                          value={field.value || ""}
                          items={[
                            { value: "ny", label: "New York" },
                            { value: "ca", label: "California" },
                          ]}
                          hasError={!!errors.state}
                          errorMessage={errors.state?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={1.89}>
                    <CustomLabel label={PatientFormLabels.ZIPCODE} isRequired />
                    <Controller
                      control={control}
                      name="zipcode"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={PatientFormPlaceholders.ENTER_ZIPCODE}
                          {...field}
                          hasError={!!errors.zipcode}
                          errorMessage={errors.zipcode?.message}
                          isNumeric={true}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={0.5}
          borderRadius={2}
          mb={1}
          mt={1}
          mr={2}
        >
          <Grid ml={1}>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.EMERGENCY_CONTACT}
            </Typography>
          </Grid>
        </Grid>

        <Grid borderRadius={2} ml={1} mb={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_NAME} />
              <Controller
                control={control}
                name="emergencyName"
                render={({ field }) => (
                  <CustomInput
                    placeholder={PatientFormPlaceholders.ENTER_NAME}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_PHONE} />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => <CustomContactInput {...field} />}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={9}>
                  <CustomLabel label={PatientFormLabels.RELATIONSHIP} />
                  <Controller
                    control={control}
                    name="relationship"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={
                          PatientFormPlaceholders.SELECT_RELATIONSHIP
                        }
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(
                          PatientRelationshipWithPatientOptions
                        ).map(([value, label]) => ({
                          value: value.toLowerCase(),
                          label,
                        }))}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <FormControlLabel
                    control={
                      <Controller
                        name="isResponsibleParty"
                        control={control}
                        render={({ field }) => (
                          <Checkbox {...field} checked={field.value} />
                        )}
                      />
                    }
                    label={PatientFormLabels.RESPONSIBLE_PARTY}
                    sx={{
                      whiteSpace: "nowrap",
                      mt: 3,
                      "& .MuiFormControlLabel-label": {
                        whiteSpace: "nowrap",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          borderRadius={2}
          mb={1}
          mt={1}
          mr={2}
        >
          <Grid ml={1}>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.GUARDIAN_INFORMATION}
            </Typography>
          </Grid>
          <Grid mr={2} display={"flex"} flexDirection={"row"} gap={2}>
            <Grid display={"flex"} flexDirection={"row"} gap={2}>
              <Grid item xs={3} width={"100%"}>
                <FormControlLabel
                  control={
                    <Controller
                      name="sameAsEmergencyContact"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label={PatientFormLabels.SAME_AS_EMERGENCY_CONTACT}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid borderRadius={2} ml={1} mb={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_NAME} />
              <Controller
                control={control}
                name="emergencyName"
                render={({ field }) => (
                  <CustomInput
                    placeholder={PatientFormPlaceholders.ENTER_NAME}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_PHONE} />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => <CustomContactInput {...field} />}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={9}>
                  <CustomLabel label={PatientFormLabels.RELATIONSHIP} />
                  <Controller
                    control={control}
                    name="relationship"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={
                          PatientFormPlaceholders.SELECT_RELATIONSHIP
                        }
                        {...field}
                        value={field.value || ""}
                        items={Object.entries(
                          PatientRelationshipWithPatientOptions
                        ).map(([value, label]) => ({
                          value: value.toLowerCase(),
                          label,
                        }))}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={3} width={"100%"}>
                  <FormControlLabel
                    control={
                      <Controller
                        name="isResponsiblePartyClinician"
                        control={control}
                        render={({ field }) => (
                          <Checkbox {...field} checked={field.value} />
                        )}
                      />
                    }
                    label={PatientFormLabels.RESPONSIBLE_PARTY}
                    sx={{
                      whiteSpace: "nowrap",
                      mt: 3,
                      "& .MuiFormControlLabel-label": {
                        whiteSpace: "nowrap",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={0.5}
          borderRadius={2}
          mb={1}
          mt={1}
          mr={2}
        >
          <Grid ml={1}>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.CLINICIAN_INFORMATION}
            </Typography>
          </Grid>
        </Grid>
        <Grid borderRadius={2} ml={1} mb={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.PRIMARY_CLINICIAN} />
              <Controller
                control={control}
                name="primaryClinician"
                render={({ field }) => (
                  <CustomSelect
                    items={[]}
                    placeholder={
                      PatientFormPlaceholders.SELECT_PRIMARY_CLINICIAN
                    }
                    {...field}
                    value={field.value || ""}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <CustomLabel label={PatientFormLabels.SECONDARY_CLINICIAN} />
              <Controller
                control={control}
                name="secondaryClinician"
                render={({ field }) => (
                  <CustomSelect
                    items={[]}
                    placeholder={
                      PatientFormPlaceholders.SELECT_SECONDARY_CLINICIAN
                    }
                    {...field}
                    value={field.value || ""}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={0.5}
          borderRadius={2}
          mb={1}
          mt={1}
          mr={2}
        >
          <Grid ml={1}>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.PRIVACY_CONSENT}
            </Typography>
          </Grid>
        </Grid>
        <Grid borderRadius={2} mb={2.1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} ml={1.5}>
              <Grid
                item
                xs={3}
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="phoneAppointmentReminders"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label={PatientFormLabels.PHONE_APPOINTMENT_REMINDERS}
                  sx={{
                    whiteSpace: "nowrap",
                    "& .MuiFormControlLabel-label": {
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={2}>
              <Grid
                item
                xs={3}
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="emailAppointmentReminders"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label={PatientFormLabels.EMAIL_APPOINTMENT_REMINDERS}
                  sx={{
                    whiteSpace: "nowrap",
                    "& .MuiFormControlLabel-label": {
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid pb={2}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Grid
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bgcolor={"#F5F5F5"}
                p={0.5}
                borderRadius={2}
                mb={1}
                mr={2}
              >
                <Grid ml={1}>
                  <Typography variant="bodyMedium4">
                    {PatientFormSectionTitles.PAYMENT_METHOD}
                  </Typography>
                </Grid>
              </Grid>

              <Grid bgcolor={"#FFFFFF"} borderRadius={2} mb={1}>
                <Grid container borderRadius={2}>
                  <Controller
                    control={control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <RadioGroup row {...field} sx={{ gap: 4, marginLeft: 1 }}>
                        <FormControlLabel
                          value="self-pay"
                          control={<Radio />}
                          label="Self Pay"
                        />
                        <FormControlLabel
                          value="insurance"
                          control={<Radio />}
                          label="Insurance"
                        />
                      </RadioGroup>
                    )}
                  />
                </Grid>
              </Grid>

              {paymentMethod === "insurance" && (
                <>
                  <Grid
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    bgcolor={"#F5F5F5"}
                    p={0.5}
                    borderRadius={2}
                    mb={1}
                    mt={1}
                    mr={2}
                  >
                    <Grid ml={1}>
                      <Typography variant="bodyMedium4">
                        {PatientFormSectionTitles.PRIMARY_INSURANCE}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box mb={2}>
                    <Grid
                      bgcolor={"#FFFFFF"}
                      borderRadius={2}
                      sx={{ width: "100%" }}
                    >
                      <Grid container p={1} sx={{ width: "100%" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.INSURANCE_NAME}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="insuranceName"
                              render={({ field }) => (
                                <CustomSelect
                                  placeholder={
                                    PatientFormPlaceholders.SELECT_INSURANCE_NAME
                                  }
                                  name={field.name}
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    field.onChange(e.target.value);
                                  }}
                                  items={[
                                    {
                                      value: "aetna",
                                      label: PatientInsuranceOptions.AETNA,
                                    },
                                    {
                                      value: "bluecross",
                                      label: PatientInsuranceOptions.BLUE_CROSS,
                                    },
                                    {
                                      value: "cigna",
                                      label: PatientInsuranceOptions.CIGNA,
                                    },
                                    {
                                      value: "united",
                                      label: PatientInsuranceOptions.UNITED,
                                    },
                                  ]}
                                  hasError={!!errors.insuranceName}
                                  errorMessage={errors.insuranceName?.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.MEMBER_ID}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="memberId"
                              render={({ field }) => (
                                <CustomInput
                                  placeholder={
                                    PatientFormPlaceholders.ENTER_MEMBER_ID
                                  }
                                  {...field}
                                  hasError={!!errors.memberId}
                                  errorMessage={errors.memberId?.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.GROUP_ID}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="groupId"
                              render={({ field }) => (
                                <CustomInput
                                  placeholder={
                                    PatientFormPlaceholders.ENTER_GROUP_ID
                                  }
                                  {...field}
                                  hasError={!!errors.groupId}
                                  errorMessage={errors.groupId?.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <CustomLabel
                              label={PatientFormLabels.PATIENT_RELATIONSHIP}
                            />
                            <Controller
                              control={control}
                              name="patientRelationship"
                              render={({ field }) => (
                                <RadioGroup
                                  row
                                  {...field}
                                  sx={{ gap: 4, marginTop: 1 }}
                                >
                                  <FormControlLabel
                                    value="self"
                                    control={<Radio />}
                                    label={PatientRelationshipOptions.SELF}
                                  />
                                  <FormControlLabel
                                    value="spouse"
                                    control={<Radio />}
                                    label={PatientRelationshipOptions.SPOUSE}
                                  />
                                  <FormControlLabel
                                    value="child"
                                    control={<Radio />}
                                    label={PatientRelationshipOptions.CHILD}
                                  />
                                  <FormControlLabel
                                    value="dependent"
                                    control={<Radio />}
                                    label={PatientRelationshipOptions.DEPENDENT}
                                  />
                                </RadioGroup>
                              )}
                            />
                          </Grid>

                          <Grid
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            bgcolor={"#F5F5F5"}
                            p={0.5}
                            borderRadius={2}
                            mt={1}
                            xs={12}
                            ml={1}
                          >
                            <Grid ml={1} mr={2}>
                              <Typography variant="bodyMedium4">
                                {PatientFormSectionTitles.SUBSCRIBER_DETAILS}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.FIRST_NAME}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="subscriberFirstName"
                              render={({ field }) => (
                                <CustomInput
                                  placeholder={
                                    PatientFormPlaceholders.ENTER_FIRST_NAME
                                  }
                                  {...field}
                                  hasError={!!errors.subscriberFirstName}
                                  errorMessage={
                                    errors.subscriberFirstName?.message
                                  }
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.LAST_NAME}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="subscriberLastName"
                              render={({ field }) => (
                                <CustomInput
                                  placeholder={
                                    PatientFormPlaceholders.ENTER_LAST_NAME
                                  }
                                  {...field}
                                  hasError={!!errors.subscriberLastName}
                                  errorMessage={
                                    errors.subscriberLastName?.message
                                  }
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12} md={2}>
                            <CustomLabel
                              label={PatientFormLabels.DATE_OF_BIRTH}
                              isRequired
                            />
                            <Controller
                              control={control}
                              name="subscriberDateOfBirth"
                              render={({ field }) => (
                                <CustomDatePicker
                                  placeholder={
                                    PatientFormPlaceholders.SELECT_DATE
                                  }
                                  value={field.value || ""}
                                  handleDateChange={field.onChange}
                                  hasError={!!errors.subscriberDateOfBirth}
                                  errorMessage={
                                    errors.subscriberDateOfBirth?.message
                                  }
                                />
                              )}
                            />
                          </Grid>

                          <Grid
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            bgcolor={"#F5F5F5"}
                            p={0.5}
                            borderRadius={2}
                            mt={2}
                            mb={2}
                            xs={12}
                            ml={1}
                          >
                            <Grid ml={1} mr={2}>
                              <Typography variant="bodyMedium4">
                                {PatientFormSectionTitles.UPLOAD_INSURANCE_CARD}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} width={"50%"} ml={0.1}>
                            <Grid item xs={12} md={6}>
                              <MultipleFilesUpload
                                onUpload={(filesMetaData: FilesMetaData[]) => {
                                  setUploadedFrontFiles(filesMetaData);
                                }}
                                placeholder={
                                  UploadFileComponentConstants.FRONT_OF_CARD
                                }
                              />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <MultipleFilesUpload
                                onUpload={(filesMetaData: FilesMetaData[]) => {
                                  setUploadedFrontFiles(filesMetaData);
                                }}
                                placeholder={
                                  UploadFileComponentConstants.BACK_OF_CARD
                                }
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    sx={{
                      cursor: "pointer",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 3,
                    }}
                    onClick={() =>
                      setShowSecondaryInsurance(!showSecondaryInsurance)
                    }
                  >
                    <Typography
                      variant="bodyMedium4"
                      sx={{
                        color: "#145DA0",
                        textDecoration: "underline",
                      }}
                    >
                      {showSecondaryInsurance
                        ? "Remove Secondary Insurance"
                        : "Add Secondary Insurance"}
                    </Typography>
                  </Box>

                  {showSecondaryInsurance && (
                    <Box mb={1} pb={5}>
                      <Grid
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        bgcolor={"#F5F5F5"}
                        p={0.5}
                        borderRadius={2}
                        mb={1}
                        mt={1}
                      >
                        <Grid ml={1}>
                          <Typography variant="bodyMedium4">
                            {PatientFormSectionTitles.SECONDARY_INSURANCE}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        bgcolor={"#FFFFFF"}
                        borderRadius={2}
                        sx={{ width: "100%" }}
                      >
                        <Grid container p={1} sx={{ width: "100%" }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.INSURANCE_NAME}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondaryInsuranceName"
                                render={({ field }) => (
                                  <CustomSelect
                                    placeholder={
                                      PatientFormPlaceholders.SELECT_INSURANCE_NAME
                                    }
                                    name={field.name}
                                    value={field.value || ""}
                                    onChange={(e) => {
                                      field.onChange(e.target.value);
                                    }}
                                    items={[
                                      {
                                        value: "aetna",
                                        label: PatientInsuranceOptions.AETNA,
                                      },
                                      {
                                        value: "bluecross",
                                        label:
                                          PatientInsuranceOptions.BLUE_CROSS,
                                      },
                                      {
                                        value: "cigna",
                                        label: PatientInsuranceOptions.CIGNA,
                                      },
                                      {
                                        value: "united",
                                        label: PatientInsuranceOptions.UNITED,
                                      },
                                    ]}
                                    hasError={!!errors.secondaryInsuranceName}
                                    errorMessage={
                                      errors.secondaryInsuranceName?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.MEMBER_ID}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondaryMemberId"
                                render={({ field }) => (
                                  <CustomInput
                                    placeholder={
                                      PatientFormPlaceholders.ENTER_MEMBER_ID
                                    }
                                    {...field}
                                    hasError={!!errors.secondaryMemberId}
                                    errorMessage={
                                      errors.secondaryMemberId?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.GROUP_ID}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondaryGroupId"
                                render={({ field }) => (
                                  <CustomInput
                                    placeholder={
                                      PatientFormPlaceholders.ENTER_GROUP_ID
                                    }
                                    {...field}
                                    hasError={!!errors.secondaryGroupId}
                                    errorMessage={
                                      errors.secondaryGroupId?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <CustomLabel
                                label={PatientFormLabels.PATIENT_RELATIONSHIP}
                              />
                              <Controller
                                control={control}
                                name="secondaryPatientRelationship"
                                render={({ field }) => (
                                  <RadioGroup
                                    row
                                    {...field}
                                    sx={{ gap: 4, marginTop: 1 }}
                                  >
                                    <FormControlLabel
                                      value="self"
                                      control={<Radio />}
                                      label={PatientRelationshipOptions.SELF}
                                    />
                                    <FormControlLabel
                                      value="spouse"
                                      control={<Radio />}
                                      label={PatientRelationshipOptions.SPOUSE}
                                    />
                                    <FormControlLabel
                                      value="child"
                                      control={<Radio />}
                                      label={PatientRelationshipOptions.CHILD}
                                    />
                                    <FormControlLabel
                                      value="dependent"
                                      control={<Radio />}
                                      label={
                                        PatientRelationshipOptions.DEPENDENT
                                      }
                                    />
                                  </RadioGroup>
                                )}
                              />
                            </Grid>

                            <Grid
                              display={"flex"}
                              flexDirection={"row"}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                              bgcolor={"#F5F5F5"}
                              p={0.5}
                              borderRadius={2}
                              mt={1}
                              xs={12}
                              ml={1}
                            >
                              <Grid ml={1} mr={2}>
                                <Typography variant="bodyMedium4">
                                  {PatientFormSectionTitles.SUBSCRIBER_DETAILS}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.FIRST_NAME}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondarySubscriberFirstName"
                                render={({ field }) => (
                                  <CustomInput
                                    placeholder={
                                      PatientFormPlaceholders.ENTER_FIRST_NAME
                                    }
                                    {...field}
                                    hasError={
                                      !!errors.secondarySubscriberFirstName
                                    }
                                    errorMessage={
                                      errors.secondarySubscriberFirstName
                                        ?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.LAST_NAME}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondarySubscriberLastName"
                                render={({ field }) => (
                                  <CustomInput
                                    placeholder={
                                      PatientFormPlaceholders.ENTER_LAST_NAME
                                    }
                                    {...field}
                                    hasError={
                                      !!errors.secondarySubscriberLastName
                                    }
                                    errorMessage={
                                      errors.secondarySubscriberLastName
                                        ?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <CustomLabel
                                label={PatientFormLabels.DATE_OF_BIRTH}
                                isRequired
                              />
                              <Controller
                                control={control}
                                name="secondarySubscriberDateOfBirth"
                                render={({ field }) => (
                                  <CustomDatePicker
                                    placeholder={
                                      PatientFormPlaceholders.SELECT_DATE
                                    }
                                    value={field.value || ""}
                                    handleDateChange={field.onChange}
                                    hasError={
                                      !!errors.secondarySubscriberDateOfBirth
                                    }
                                    errorMessage={
                                      errors.secondarySubscriberDateOfBirth
                                        ?.message
                                    }
                                  />
                                )}
                              />
                            </Grid>

                            <Grid
                              display={"flex"}
                              flexDirection={"row"}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                              bgcolor={"#F5F5F5"}
                              p={0.5}
                              borderRadius={2}
                              mt={2}
                              mb={2}
                              xs={12}
                              ml={1}
                            >
                              <Grid ml={1} mr={2}>
                                <Typography variant="bodyMedium4">
                                  {
                                    PatientFormSectionTitles.UPLOAD_INSURANCE_CARD
                                  }
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container spacing={2} width={"50%"} ml={0.1}>
                              <Grid item xs={12} md={6}>
                                <MultipleFilesUpload
                                  onUpload={(
                                    filesMetaData: FilesMetaData[]
                                  ) => {
                                    setUploadedFrontFiles(filesMetaData);
                                  }}
                                  placeholder={
                                    UploadFileComponentConstants.FRONT_OF_CARD
                                  }
                                />
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <MultipleFilesUpload
                                  onUpload={(
                                    filesMetaData: FilesMetaData[]
                                  ) => {
                                    setUploadedFrontFiles(filesMetaData);
                                  }}
                                  placeholder={
                                    UploadFileComponentConstants.BACK_OF_CARD
                                  }
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </>
              )}
            </Box>

            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "background.paper",
                borderTop: "1px solid #E0E0E0",
                p: 1.5,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                zIndex: 1000,
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)",
              }}
            >
              <CustomButton
                variant="outline"
                label={PatientFormButtons.CANCEL}
                isSubmitButton
              />
              <CustomButton
                variant="filled"
                label={PatientFormButtons.SAVE}
                type="submit"
                changePadding={false}
              />
            </Box>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
};

export default DemographicTab;
