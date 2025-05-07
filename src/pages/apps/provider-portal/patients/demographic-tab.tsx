import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../../../common-components/custom-button/custom-button";
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
  PatientLanguageOptions,
  PatientRelationshipWithPatientOptions,
} from "../../../../constants/formConst";
import { AddPatientSchema } from "./add-patients-schema";

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
}

interface DemographicTabProps {
  onNext: () => void;
}

const DemographicTab = ({ onNext }: DemographicTabProps) => {
  const {
    control,
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
    },
    resolver: yupResolver(AddPatientSchema),
  });

  const handleImageChange = (file: File) => {
    setValue("profileImage", file);
  };

  const onSubmit = () => {
    onNext();
  };

  return (
    <Grid>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"#F5F5F5"}
        p={1}
        borderRadius={2}
        mb={2}
      >
        <Grid>
          <Typography variant="bodyMedium4">
            {PatientFormSectionTitles.PATIENT_INFORMATION}
          </Typography>
        </Grid>
        <Grid mr={2}>
          <KeyboardArrowUpOutlinedIcon />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid bgcolor={"#FFFFFF"} borderRadius={2}>
          <Grid container border="1px solid #E0E0E0" p={2} borderRadius={2}>
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
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
                  <CustomLabel
                    label={PatientFormLabels.PHONE_NUMBER}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={PatientFormPlaceholders.ENTER_PHONE_NUMBER}
                        {...field}
                        isNumeric={true}
                        hasError={!!errors.phoneNumber}
                        errorMessage={errors.phoneNumber?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
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
                  <Grid item xs={12} md={6}>
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

                  <Grid item xs={12} md={6}>
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
                </Grid>

                <Grid item xs={12} md={4}>
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

                <Grid item xs={12} md={4}>
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

                <Grid item xs={12} md={4}>
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

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.EMERGENCY_CONTACT}
            </Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>

        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
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

            <Grid item xs={12} md={3}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_PHONE} />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => (
                  <CustomInput
                    placeholder={PatientFormPlaceholders.ENTER_PHONE_NUMBER}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
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
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
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
                      name="isResponsibleParty"
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
            <Grid>
              <KeyboardArrowUpOutlinedIcon />
            </Grid>
          </Grid>
        </Grid>

        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
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

            <Grid item xs={12} md={3}>
              <CustomLabel label={PatientFormLabels.EMERGENCY_PHONE} />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => (
                  <CustomInput
                    placeholder={PatientFormPlaceholders.ENTER_PHONE_NUMBER}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
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
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.CLINICIAN_INFORMATION}
            </Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>
        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomLabel label={PatientFormLabels.PRIMARY_CLINICIAN} />
              <Controller
                control={control}
                name="emergencyName"
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

            <Grid item xs={12} md={3}>
              <CustomLabel label={PatientFormLabels.SECONDARY_CLINICIAN} />
              <Controller
                control={control}
                name="emergencyPhone"
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
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">
              {PatientFormSectionTitles.PRIVACY_CONSENT}
            </Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>
        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2} mb={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
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

            <Grid item xs={12} md={3}>
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

        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "white",
            padding: "16px 24px",
            borderTop: "1px solid #E0E0E0",
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
            label={PatientFormButtons.SAVE_AND_NEXT}
            type="submit"
            changePadding={false}
          />
        </Grid>
      </form>
    </Grid>
  );
};

export default DemographicTab;
