import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import signatureImage from "../../../../../../assets/images/signature.png";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import {
  ClinicianFormLabels,
  ClinicianFormPlaceholders,
} from "../../../../../../constants/formConst";
import { ClinicianDialogTypographyVariants } from "../../../../../../constants/typography-variants";
import { ClinicianSchema } from "./clinician-schema";

interface AddClinicianDialogProps {
  handleClose: () => void;
}

const AddClinicianDialog = ({ handleClose }: AddClinicianDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      contactNumber: "",
      npiNumber: "",
      workLocations: "",
      languages: "",
      supervisingClinician: "",
      role: "",
    },
    resolver: yupResolver(ClinicianSchema),
  });

  const roleOptions = [
    { value: "doctor", label: "Doctor" },
    { value: "nurse", label: "Nurse" },
    { value: "therapist", label: "Therapist" },
  ];

  const locationOptions = [
    { value: "location1", label: "Location 1" },
    { value: "location2", label: "Location 2" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
  ];

  const clinicianOptions = [
    { value: "clinician1", label: "Dr. John Doe" },
    { value: "clinician2", label: "Dr. Jane Smith" },
  ];

  const onSubmit = () => {};

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.FIRST_NAME}
              isRequired={true}
            />
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_FIRST_NAME}
                  {...field}
                  hasError={!!errors.firstName}
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.LAST_NAME}
              isRequired={true}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_LAST_NAME}
                  {...field}
                  hasError={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.ROLE} />
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_ROLE}
                  {...field}
                  value={field.value || ""}
                  items={roleOptions}
                  hasError={!!errors.role}
                  errorMessage={errors.role?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.EMAIL_ID}
              isRequired={true}
            />
            <Controller
              control={control}
              name="emailId"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_EMAIL_ID}
                  {...field}
                  hasError={!!errors.emailId}
                  errorMessage={errors.emailId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.CONTACT_NUMBER} />
            <Controller
              control={control}
              name="contactNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_CONTACT_NUMBER}
                  {...field}
                  hasError={!!errors.contactNumber}
                  errorMessage={errors.contactNumber?.message}
                  isNumeric={true}

                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.NPI_NUMBER} />
            <Controller
              control={control}
              name="npiNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_NPI_NUMBER}
                  {...field}
                  hasError={!!errors.npiNumber}
                  errorMessage={errors.npiNumber?.message}
                  isNumeric={true}

                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.WORK_LOCATIONS} />
            <Controller
              control={control}
              name="workLocations"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_WORK_LOCATIONS}
                  {...field}
                  value={field.value || ""}
                  items={locationOptions}
                  hasError={!!errors.workLocations}
                  errorMessage={errors.workLocations?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.LANGUAGES_SPOKEN} />
            <Controller
              control={control}
              name="languages"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_LANGUAGES}
                  {...field}
                  value={field.value || ""}
                  items={languageOptions}
                  hasError={!!errors.languages}
                  errorMessage={errors.languages?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.SUPERVISING_CLINICIAN} />
            <Controller
              control={control}
              name="supervisingClinician"
              render={({ field }) => (
                <CustomSelect
                  placeholder={
                    ClinicianFormPlaceholders.SELECT_SUPERVISING_CLINICIAN
                  }
                  {...field}
                  value={field.value || ""}
                  items={clinicianOptions}
                  hasError={!!errors.supervisingClinician}
                  errorMessage={errors.supervisingClinician?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={ClinicianFormLabels.SIGNATURE} />
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E7E7E7",
                borderRadius: 1,
                backgroundColor: "#F5F8FF",
                maxWidth: "275px",
              }}
            >
              <Box sx={{ mb: 1 }}>
                <img
                  src={signatureImage}
                  alt="Signature"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "60px",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                variant={ClinicianDialogTypographyVariants.BODY_REGULAR_6}
                sx={{
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {ClinicianDialogTypographyVariants.SIGNED_BY_CLINICIAN}
              </Typography>
              <Typography
                variant={ClinicianDialogTypographyVariants.BODY_REGULAR_6}
                sx={{
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {ClinicianDialogTypographyVariants.DATE_TIME}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          flexDirection={"row"}
          justifyContent={"flex-end"}
          mt={2}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
            borderTop: "1px solid #E7E7E7",
            paddingTop: 2,
          }}
        >
          <Grid
            display="flex"
            flexDirection={"row"}
            gap={3}
            sx={{ marginBottom: "1.5vh", marginRight: "1.5vw" }}
          >
            <Grid>
              <CustomButton
                variant="outline"
                label="Cancel"
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label="Save"
                type="submit"
                isSubmitButton
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddClinicianDialog;
