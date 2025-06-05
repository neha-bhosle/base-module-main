import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import { PatientProfileToggleRoutes } from "../../../../../constants/formConst";
import { tabLabel, tabSx } from "../../../../../constants/tabs-widget";
import { PatientProfileOutletLabels, PatientDemographicsLabels, PatientPrivacyLabels, PatientGuardianLabels, PatientEmergencyContactLabels, PatientClinicianLabels, PatientAssignedGroupsLabels } from "../../../../../constants/formConst";

import { ProfileTypographyVariants } from "../../../../../constants/typography-variants";

interface FieldData {
  label: string;
  value: string;
}


const ProfilePage = () => {
  
  const [leftDemographicsColumnFields, setLeftDemographicsColumnFields] = useState<FieldData[]>([]);
  const [rightDemographicsColumnFields, setRightDemographicsColumnFields] = useState<FieldData[]>([]);
  const [privacyColumnFields, setPrivacyColumnFields] = useState<FieldData[]>([]);
  const [guardianFirstColumnFields, setGuardianFirstColumnFields] = useState<FieldData[]>([]);
  const [guardianSecondColumnFields, setGuardianSecondColumnFields] = useState<FieldData[]>([]);
  const [guardianThirdColumnFields, setGuardianThirdColumnFields] = useState<FieldData[]>([]);
  const [guardianFourthColumnFields, setGuardianFourthColumnFields] = useState<FieldData[]>([]);
  const [emergencyContactFirstColumnFields, setEmergencyContactFirstColumnFields] = useState<FieldData[]>([]);
  const [emergencyContactSecondColumnFields, setEmergencyContactSecondColumnFields] = useState<FieldData[]>([]);
  const [emergencyContactThirdColumnFields, setEmergencyContactThirdColumnFields] = useState<FieldData[]>([]);
  const [emergencyContactFourthColumnFields, setEmergencyContactFourthColumnFields] = useState<FieldData[]>([]);
  const [clinicianColumnFields, setClinicianColumnFields] = useState<FieldData[]>([]);
  const [assignedGroupsColumnFields, setAssignedGroupsColumnFields] = useState<FieldData[]>([]);

  const navigate = useNavigate();
  const tabRoutes = Object.values(PatientProfileToggleRoutes);

  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabRoutes[newValue].toLowerCase());
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  useEffect(() => {
    if (true) {
      // const profileData = getAllProfileDetailData as unknown as ProfilePayload;

      setLeftDemographicsColumnFields([
        {
          label: PatientDemographicsLabels.LANGUAGES,
          value: "1234567890",
        },
        {
          label: PatientDemographicsLabels.RACE,
          value: 'American',
        },
        {
          label: PatientDemographicsLabels.ETHNICITY,
          value: 'Central American',
        },
        {
          label: PatientDemographicsLabels.LEGAL_SEX,
          value: 'Male',
        },

      ]);
      setRightDemographicsColumnFields([
        {
          label: PatientDemographicsLabels.FAX,
          value: '1234567890',
        },
        {
          label: PatientDemographicsLabels.ACCOUNT_CREATOR,
          value: 'Jessie James',
        },
        {
          label: PatientDemographicsLabels.ACCOUNT_CREATED_ON,
          value: '09/02/2025 09:00 AM',
        },
      ]);

      setPrivacyColumnFields([
        {
          label: PatientPrivacyLabels.PHONE_APPOINTMENT_REMINDERS,
          value: 'Yes',
        },
        {
          label: PatientPrivacyLabels.EMAIL_APPOINTMENT_REMINDERS,
          value: 'Yes',
        },
      ]);

      setGuardianFirstColumnFields([
        {
          label: PatientGuardianLabels.NAME,
          value: 'John Doe',
        },
        {
          label: PatientGuardianLabels.ADDRESS_LINE_1,
          value: '123 Main St',
        },
        {
          label: PatientGuardianLabels.COUNTRY,
          value: 'United States',
        },

      ]);

      setGuardianSecondColumnFields([
        {
          label: PatientGuardianLabels.EMAIL_ID,
          value: 'albartafox@example.com',
        },
        {
          label: PatientGuardianLabels.ADDRESS_LINE_2,
          value: '2120 North Carolina 71',
        },
        {
          label: PatientGuardianLabels.ZIP_CODE,
          value: '28364',
        },
      ]);

      setGuardianThirdColumnFields([
        {
          label: PatientGuardianLabels.RELATIONSHIP_WITH_PATIENT,
          value: 'Wife',
        },
        {
          label: PatientGuardianLabels.CITY,
          value: 'Maxton',
        },
      ]);

      setGuardianFourthColumnFields([
        {
          label: PatientGuardianLabels.PHONE_NO,
          value: '1234567890',
        },
        {
          label: PatientGuardianLabels.STATE,
          value: 'California',
        },
      ]);

      setEmergencyContactFirstColumnFields([
        {
          label: PatientEmergencyContactLabels.NAME,
          value: 'John Doe',
        },
        {
          label: PatientEmergencyContactLabels.ADDRESS_LINE_1,
          value: '123 Main St',
        },
        {
          label: PatientEmergencyContactLabels.COUNTRY,
          value: 'United States',
        },

      ]);

      setEmergencyContactSecondColumnFields([
        {
          label: PatientEmergencyContactLabels.EMAIL_ID,
          value: 'albartafox@example.com',
        },
        {
          label: PatientEmergencyContactLabels.ADDRESS_LINE_2,
          value: '2120 North Carolina 71',
        },
        {
          label: PatientEmergencyContactLabels.ZIP_CODE,
          value: '28364',
        },
      ]);

      setEmergencyContactThirdColumnFields([
        {
          label: PatientEmergencyContactLabels.RELATIONSHIP_WITH_PATIENT,
          value: 'Wife',
        },
        {
          label: PatientEmergencyContactLabels.CITY,
          value: 'Maxton',
        },
      ]);

      setEmergencyContactFourthColumnFields([
        {
          label: PatientEmergencyContactLabels.PHONE_NO,
          value: '1234567890',
        },
        {
          label: PatientEmergencyContactLabels.STATE,
          value: 'California',
        },
      ]);

      setClinicianColumnFields([
        {
          label: PatientClinicianLabels.PRIMARY_CLINICIAN,
          value: 'John Doe',
        },
        {
          label: PatientClinicianLabels.OTHER_CLINICIANS,
          value: 'Alberta Flores',
        },
      ]);

      setAssignedGroupsColumnFields([
        {
          label: PatientAssignedGroupsLabels.GROUP_NAME,
          value: 'ABC',
        },
        
      ]);   
    }
  }, []);


  const handleResetPassword = () => {
    console.log("Reset Password");
  };

  const handleEditProfile = () => {
    console.log("Edit Profile");
  };

  const handleTransferToClinician = () => {
    console.log("Transfer to Clinician");
  };


  return (
    <Box>
      <Box sx={{ p: 2, borderBottom: "1px solid #E0E0E0" }}>
        {/* Toggle Tabs */}
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems="center"

        >
          <Box sx={{ ...tabSx, ml: 0.5 }}>
            <Tabs value={value} onChange={handleChange}>
              {tabRoutes.map((item: string, index: number) => (
                <Tab
                  key={index}
                  label={item}
                  {...a11yProps(index)}
                  sx={tabLabel}
                />
              ))}
            </Tabs>
          </Box>

          <Grid display={"flex"} flexDirection={"row"} gap={2}>
            <CustomButton
              variant="editButton"
              label="Reset Password"
              startIcon={<EditIcon />}
              onClick={handleResetPassword}
            />
            <CustomButton
              variant="editButton"
              label="Edit Profile"
              startIcon={<EditIcon />}
              onClick={handleEditProfile}

            />
          </Grid>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        {/* Profile Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {/* Demographics */}
            <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, width: "50%" }}>
              <Typography variant="bodyMedium3" sx={{ color: "#373D41" }}>{PatientProfileOutletLabels.DEMOGRAPHICS}</Typography>
              <Grid
                container

                display={"flex"}
                flexDirection={"column"}
                mt={"6px"}

              >

                <Grid display={"flex"} flexDirection={"row"}>
                  <Grid
                    width={"20vw"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    {leftDemographicsColumnFields.map((field, index) => (
                      <Grid
                        key={index}
                        display={"flex"}
                        flexDirection={"row"}
                        width={"100%"}
                      >
                        <Grid xs={5}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                            }
                          >
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={5}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                            }
                          >
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>

                  <Grid
                    width={"40vw"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}

                  >
                    {rightDemographicsColumnFields.map((field, index) => (
                      <Grid
                        key={index}
                        display={"flex"}
                        flexDirection={"row"}
                        gap={2}
                      >
                        <Grid xs={3}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                            }
                          >
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={10}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                            }
                          >
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>


            </Box>
            {/* Privacy */}
            <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, gap: 2 }}>
              <Typography variant="bodyMedium3" sx={{ color: "#373D41" }}>{PatientProfileOutletLabels.PRIVACY}</Typography>
              <Grid
                container
                display={"flex"}
                flexDirection={"column"}
                mt={"6px"}

              >

                <Grid
                  width={"20vw"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                >
                  {privacyColumnFields.map((field, index) => (
                    <Grid
                      key={index}
                      display={"flex"}
                      flexDirection={"row"}

                      width={"100%"}
                    >
                      <Grid xs={7}>
                        <Typography
                          variant={
                            ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                          }
                        >
                          {field.label}
                        </Typography>
                      </Grid>
                      <Grid xs={7} >
                        <Typography
                          variant={
                            ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                          }
                        >
                          :  {field.value}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* Guardian Information */}
          <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, }}>
            <Typography variant="bodyMedium3" sx={{ color: "#373D41" }}>{PatientProfileOutletLabels.GUARDIAN_INFORMATION}</Typography>
            <Grid container
              display={"flex"}
              flexDirection={"row"}
              mt={"6px"}>
              {/* First Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {guardianFirstColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Second Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {guardianSecondColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                        <Grid item xs={3}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Third Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {guardianThirdColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Fourth Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {guardianFourthColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

          </Box>

          {/* Emergency Contact Details */}
          <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, }}>
            <Typography variant="bodyMedium3" sx={{ color: "#373D41" }}>{PatientProfileOutletLabels.EMERGENCY_CONTACT_DETAILS}</Typography>
            <Grid container
              display={"flex"}
              flexDirection={"row"}
              mt={"6px"}>
              {/* First Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {emergencyContactFirstColumnFields.map((field, index) => (
                    <Grid key={index}>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Second Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {emergencyContactSecondColumnFields.map((field, index) => (
                    <Grid key={index}>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Third Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {emergencyContactThirdColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                        <Grid xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Fourth Column */}
              <Grid xs={3}>
                <Grid display={"flex"} flexDirection={"column"} gap={2}>
                  {emergencyContactFourthColumnFields.map((field, index) => (
                    <Grid item key={index}>
                      <Grid container>
                      <Grid xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}>
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={4}>
                          <Typography variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT}>
                            : {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* Clinicians & Assigned Groups */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {/* CLinicians */}
            <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, width: "50%" }}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="bodyMedium3" sx={{ color: "#373D41", }} >{PatientProfileOutletLabels.CLINICIANS}</Typography>
                <CustomButton
                  variant="editButton"
                  label="Transfer to Clinician"
                  onClick={handleTransferToClinician}
                />
              </Box>

              <Grid
                container

                display={"flex"}
                flexDirection={"column"}
                mt={"6px"}

              >

                <Grid display={"flex"} flexDirection={"row"}>
                  <Grid
                    width={"20vw"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    {clinicianColumnFields.map((field, index) => (
                      <Grid
                        key={index}
                        display={"flex"}
                        flexDirection={"row"}
                        gap={2}
                        width={"100%"}
                      >
                          <Grid xs={4}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                            }
                          >
                            {field.label}
                          </Typography>
                        </Grid>
                        <Grid xs={4}>
                          <Typography
                            variant={
                              ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                            }
                          >
                            :  {field.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>


            </Box>
            {/* Assigned Groups */}
            <Box sx={{ flex: 2, border: '1px solid #E7E7E7', borderRadius: 2, p: 2, gap: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Typography variant="bodyMedium3" sx={{ color: "#373D41", }} >{PatientProfileOutletLabels.ASSIGN_GROUPS}</Typography>
                <CustomButton
                  variant="editButton"
                  label="Edit"
                  startIcon={<EditIcon />}
                  onClick={handleTransferToClinician}
                />
              </Box>              <Grid
                container
                display={"flex"}
                flexDirection={"column"}
                mt={"6px"}

              >
                <Grid
                  width={"20vw"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                >
                  {assignedGroupsColumnFields.map((field, index) => (
                    <Grid
                      key={index}
                      display={"flex"}
                      flexDirection={"row"}

                      width={"100%"}
                    >
                        <Grid xs={4}>
                        <Typography
                          variant={
                            ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                          }
                        >
                          {field.label}
                        </Typography>
                      </Grid>
                      <Grid xs={4}>
                        <Typography
                          variant={
                            ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                          }
                        >
                          :  {field.value}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;