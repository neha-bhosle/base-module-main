import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import signatureImage from "../../../../../../assets/images/signature.png";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import { ClinicianDialogTypographyVariants } from "../../../../../../constants/typography-variants";
import {
  ClinicianFormLabels,
  ClinicianFormPlaceholders,
} from "../../../../../../constants/formConst";

const AddClinicianDialog = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [npiNumber, setNpiNumber] = useState("");
  const [workLocations, setWorkLocations] = useState("");
  const [languages, setLanguages] = useState("");
  const [supervisingClinician, setSupervisingClinician] = useState("");
  const [role, setRole] = useState("");

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

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CustomLabel
            label={ClinicianFormLabels.FIRST_NAME}
            isRequired={true}
          />
          <CustomInput
            placeholder={ClinicianFormPlaceholders.ENTER_FIRST_NAME}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel
            label={ClinicianFormLabels.LAST_NAME}
            isRequired={true}
          />
          <CustomInput
            placeholder={ClinicianFormPlaceholders.ENTER_LAST_NAME}
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.ROLE} />
          <CustomSelect
            placeholder={ClinicianFormPlaceholders.SELECT_ROLE}
            name="role"
            value={role}
            items={roleOptions}
            onChange={(e) => setRole(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.EMAIL_ID} isRequired={true} />
          <CustomInput
            placeholder={ClinicianFormPlaceholders.ENTER_EMAIL_ID}
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.CONTACT_NUMBER} />
          <CustomInput
            placeholder={ClinicianFormPlaceholders.ENTER_CONTACT_NUMBER}
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.NPI_NUMBER} />
          <CustomInput
            placeholder={ClinicianFormPlaceholders.ENTER_NPI_NUMBER}
            name="npiNumber"
            value={npiNumber}
            onChange={(e) => setNpiNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.WORK_LOCATIONS} />
          <CustomSelect
            placeholder={ClinicianFormPlaceholders.SELECT_WORK_LOCATIONS}
            name="workLocations"
            value={workLocations}
            items={locationOptions}
            onChange={(e) => setWorkLocations(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.LANGUAGES_SPOKEN} />
          <CustomSelect
            placeholder={ClinicianFormPlaceholders.SELECT_LANGUAGES}
            name="languages"
            value={languages}
            items={languageOptions}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ClinicianFormLabels.SUPERVISING_CLINICIAN} />
          <CustomSelect
            placeholder={ClinicianFormPlaceholders.SELECT_SUPERVISING_CLINICIAN}
            name="supervisingClinician"
            value={supervisingClinician}
            items={clinicianOptions}
            onChange={(e) => setSupervisingClinician(e.target.value)}
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
              changePadding={false}
            />
          </Grid>
          <Grid>
            <CustomButton
              variant="filled"
              label="Save"
              changePadding={false}
              isSubmitButton
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddClinicianDialog;
