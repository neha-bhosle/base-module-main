import { Grid, Paper, Typography } from "@mui/material";
import { practiceData } from "../../../../../common-components/mock-data/all-mock-data";
import doctorProfileImg from "../../../../../assets/images/hospital.jpg";
import { ProfileTypographyVariants } from "../../../../../constants/typography-variants";
import { ProfileFieldLabels } from "../../../../../constants/formConst";
import { useEffect, useState } from "react";

interface FieldData {
  label: string;
  value: string;
}

const Profile = () => {
  const [leftColumnFields, setLeftColumnFields] = useState<FieldData[]>([]);
  const [rightColumnFields, setRightColumnFields] = useState<FieldData[]>([]);

  useEffect(() => {
    setLeftColumnFields([
      {
        label: ProfileFieldLabels.CLINIC_NPI_NUMBER,
        value: practiceData.clinicNPI,
      },
      {
        label: ProfileFieldLabels.TAX_TYPE,
        value: practiceData.taxType,
      },
      {
        label: ProfileFieldLabels.TAX_NUMBER,
        value: practiceData.taxNumber,
      },
      {
        label: ProfileFieldLabels.CONTACT_NUMBER,
        value: practiceData.contactNumber,
      },
    ]);

    setRightColumnFields([
      {
        label: ProfileFieldLabels.EMAIL_ID,
        value: practiceData.emailID,
      },
      {
        label: ProfileFieldLabels.TAXONOMY_CODE,
        value: practiceData.taxonomyCode,
      },
      {
        label: ProfileFieldLabels.ADDRESS,
        value: practiceData.address,
      },
    ]);
  }, []);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 1,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        width: "100%",
      }}
    >
      <Grid display={"flex"} flexDirection={"row"} gap={2}>
        <Grid item xs={12} md={3}>
          <Grid
            component="img"
            src={doctorProfileImg}
            alt="Practice building"
            sx={{
              width: "17vw",
              maxHeight: "19vh",
              objectFit: "cover",
              borderRadius: 1,
              mt: 1.5,
            }}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          display={"flex"}
          flexDirection={"column"}
          mt={"1px"}
          ml={1}
        >
          <Grid ml={5}>
            <Typography
              variant={ProfileTypographyVariants.TITLE_MEDIUM_PROFILE_BOLD}
            >
              {ProfileFieldLabels.PRACTICE_NAME}
            </Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"row"}>
            <Grid
              width={"20vw"}
              ml={5}
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2.5}
            >
              {leftColumnFields.map((field, index) => (
                <Grid
                  key={index}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={5}
                  width={"100%"}
                >
                  <Grid xs={6}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                      }
                    >
                      {field.label}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                      }
                    >
                      {field.value}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid
              width={"40vw"}
              display={"flex"}
              flexDirection={"column"}
              gap={3.5}
              mt={2}
              ml={15}
            >
              {rightColumnFields.map((field, index) => (
                <Grid
                  key={index}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                >
                  <Grid xs={2}>
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
                      {field.value}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
